import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModel } from 'src/user/user.model';

export const getTypeOrmModuleOptions = (
  config: ConfigService,
): TypeOrmModuleOptions =>
  ({
    type: 'postgres',
    host: config.getOrThrow('DB_HOST'),
    port: config.getOrThrow('DB_PORT'),
    username: config.getOrThrow('DB_USER'),
    password: config.getOrThrow('DB_PASSWORD'),
    database: config.getOrThrow('DB_NAME'),
    entities: [UserModel],
    synchronize: Boolean(config.getOrThrow('DB_SYNCHRONIZE')),
    logging: Boolean(config.getOrThrow('DB_LOGGING')),
  } as TypeOrmModuleOptions);

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: getTypeOrmModuleOptions,
    }),
  ],
})
export class DatabaseModule {}
