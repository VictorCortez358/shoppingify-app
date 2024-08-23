import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/sign-up-dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in-dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signUp(user: SignUpDto) {
    const userExists = await this.usersService.getUserByEmail(user.email);
    if (userExists) {
      throw new BadRequestException('User already exists');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    const newUser = this.usersService.createUser(user);

    if (!newUser) {
      throw new BadRequestException('User could not be created');
    } else {
      return JSON.stringify('User created');
    }
  }

  async signIn( user: SignInDto
  ): Promise<{ message: string, access_token: string, id: string }> {
    const foundUser = await this.usersService.getUserByEmail(user.email);
    if (user?.password !== user.password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: foundUser.id, username: foundUser.email };
    return {
      message: "Login Successful",
      access_token: await this.jwtService.signAsync(payload),
      id: payload.sub
    };
  }

}
