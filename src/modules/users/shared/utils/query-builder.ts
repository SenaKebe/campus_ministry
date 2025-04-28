import { Prisma } from "@prisma/client";

type UserFilters = {
  role?: USERROLE;
  isActive?: boolean;
  search?: string;
  createdAfter?: Date;
};

export function buildUserWhere(filters: UserFilters): Prisma.UserWhereInput {
  return {
    AND: [
      filters.role ? { role: filters.role } : {},
      filters.isActive !== undefined ? { isActive: filters.isActive } : {},
      filters.createdAfter ? { createdAt: { gte: filters.createdAfter } } : {},
      filters.search
        ? {
            OR: [
              { email: { contains: filters.search } },
              {
                profile: {
                  OR: [
                    { firstName: { contains: filters.search } },
                    { lastName: { contains: filters.search } },
                  ],
                },
              },
            ],
          }
        : {},
    ],
  };
}
