import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserInput, CreateUserOutput, UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() dto: CreateUserInput): Promise<CreateUserOutput> {
    return await this.userService.createUser(dto);
  }
}
