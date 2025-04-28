import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../core/exceptions";
import { CreateUserDto, UpdateUserDto } from "../dtos";

const prisma = new PrismaClient();

export class UserService {
  async createUser(data: CreateUserDto) {
    const exists = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (exists) throw new ApiError(400, "Email already exists");

    return prisma.user.create({
      data: {
        email: data.email,
        role: data.role,
        hashedPassword: data.password
          ? await bcrypt.hash(data.password, 12)
          : null,
        profile: {
          create: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        },
      },
      include: { profile: true },
    });
    await this.auditService.log(
        actorId,
        'CREATE',
        'USER',
        user.id,
        { email: user.email, role: user.role }
      );
  
      return user;
    }
  }
  async updateUser(id: number, data: UpdateUserDto) {
    return prisma.user.update({
      where: { id },
      data: {
        isActive: data.isActive,
        role: data.role,
      },
      include: { profile: true },
    });
  }

  async listUsers(options: {
    filters: UserFilters;
    page?: number;
    limit?: number;
    // search?: string;
  }) {
    const { role, page = 1, limit = 10, search } = options;
    const skip = (page - 1) * limit;
  
    const where = {
      AND: [
        role ? { role } : {},
        search ? {
          OR: [
            { email: { contains: search } },
            { profile: { firstName: { contains: search } } },
            { profile: { lastName: { contains: search } } }
          ]
        } : {}
      ]
    };
  
    const [users, totalCount] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        include: { profile: true },
        orderBy: { id: 'desc' }
      }),
      prisma.user.count({ where })
    ]);
  
    return {
      data: users.map(this.toResponseDto),
      meta: {
        total: totalCount,
        page,
        limit,
        totalPages: Math.ceil(totalCount / limit)
      }
    };
  }
  
  private toResponseDto(user: any) {
    return {
      id: user.id,
      email: user.email,
      role: user.role,
      isActive: user.isActive,
      profile: user.profile ? {
        firstName: user.profile.firstName,
        lastName: user.profile.lastName
      } : null
    };
  }
