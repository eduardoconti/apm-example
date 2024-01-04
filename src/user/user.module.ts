import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './user.model';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
