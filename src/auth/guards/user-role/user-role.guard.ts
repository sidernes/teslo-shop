import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly roles: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('UserRoleGuard');
    const rvalidRoles: string[] = this.roles.get('roles', context.getHandler());
    if (!rvalidRoles) return true;
    if (rvalidRoles.length == 0) return true;
    const req = context.switchToHttp().getRequest();
    const user = req.user as User;
    if (!user) throw new BadRequestException('User not found');

    for (const role of user.roles) {
      if (rvalidRoles.includes(role)) return true;
    }

    throw new ForbiddenException(`User role not authorized [${rvalidRoles}]`);
  }
}
