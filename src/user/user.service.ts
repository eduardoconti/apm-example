import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserModel } from './user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

export type CreateUserInput = Omit<UserModel, 'id'>;

export type CreateUserOutput = UserModel;
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private readonly userRepository: Repository<UserModel>,
    private readonly httpSerice: HttpService,
    private readonly configService: ConfigService,
  ) {}
  async createUser(input: CreateUserInput): Promise<CreateUserOutput> {
    const user = await this.userRepository.save(input, { transaction: false });

    await this.httpSerice.axiosRef.post(
      this.configService.get('WEBHOOK_URL'),
      user,
    );

    return user;
  }
}
