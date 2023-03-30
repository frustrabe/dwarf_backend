import {
  Controller,
  Post,
  UseGuards,
  Request as Request2,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { SuperAdminGuard } from './super-admin.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request2() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/signup')
  async signup(@Request2() req) {
    console.log('body', req.body);

    return this.authService.signup(req.body);
  }

  @Post('auth/signup-tenant')
  async signup_tenant(@Request2() req) {
    console.log('body', req.body);

    return this.authService.signup_tenant(req.body);
  }

  @UseGuards(JwtAuthGuard, SuperAdminGuard)
  @Post('auth/signup-boardmember')
  async signup_boardmember(@Request2() req) {
    console.log('body', req.body);

    return this.authService.signup_boardmember(req.body);
  }
  /* @Get()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req: any) {
    console.log('user/tenant in controller', req.user);
    return this.problemsService.findAll();
  } */
}
