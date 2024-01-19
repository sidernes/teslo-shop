import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  // SetMetadata,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from './dto/';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { RawHeader, GetUser, Auth } from './decorators/';
import { UserRoleGuard } from './guards/user-role/user-role.guard';
import {
  // META_ROLES,
  RoleProtected,
} from './decorators/role-protected.decorator';
import { ValidRoles } from './interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.authService.loginUser(loginUserDto);
  }

  @Get('check-status')
  @Auth()
  checkAuthStatus(@GetUser() user: User) {
    return this.authService.checkAuthStatus(user);
  }

  @Get('private')
  @UseGuards(AuthGuard())
  testPrivateRoute(
    // @Req() req: Express.Request
    @GetUser() user: User,
    @GetUser('email') userEmail: string,
    @RawHeader() rowHeader: string[],
  ) {
    return {
      message: 'This is a private route',
      user,
      userEmail,
      rowHeader,
    };
  }

  @Get('private2')
  // @SetMetadata(META_ROLES, ['admin', 'super-admin'])
  @RoleProtected(ValidRoles.seperUser, ValidRoles.admin)
  @UseGuards(AuthGuard(), UserRoleGuard)
  testPrivateRoute2(@GetUser() user: User) {
    return {
      message: 'This is a private route',
      user,
    };
  }

  @Get('private3')
  @Auth(ValidRoles.admin)
  testPrivateRoute3(@GetUser() user: User) {
    return {
      message: 'This is a private route 3',
      user,
    };
  }
}
