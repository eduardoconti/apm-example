import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';

export type CreateUserInput = Omit<UserModel, 'id'>;

export type CreateUserOutput = UserModel;
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
  ) {}
  async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.save(input, { transaction: false });
    return user;
  }
}
