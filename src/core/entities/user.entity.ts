import { USERROLE } from "@prisma/client";

export class UserEntity {
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly role: USERROLE,
    public readonly profile: {
      firstName: string;
      lastName: string;
    },
    public readonly isActive: boolean = true
  ) {}

  isAdmin() {
    return this.role === USERROLE.ADMIN || this.role === USERROLE.SUPER_ADMIN;
  }

  hasAccess(requiredRole: USERROLE) {
    return this.role >= requiredRole;
  }
}
