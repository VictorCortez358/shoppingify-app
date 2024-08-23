import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up-dto';
import { SignInDto } from './dto/sign-in-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() user: SignUpDto) {
    return this.authService.signUp(user);
  }

  @Post('signin')
  async signIn(@Body() signIn: SignInDto){
    return this.authService.signIn(signIn)
  }

}
