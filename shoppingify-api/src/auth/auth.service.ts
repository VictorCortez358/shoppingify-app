import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/sign-up-dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) { }

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
    }

    return JSON.stringify(newUser);
  }

}
