import { Module } from '@nestjs/common';
import { ApmModule } from './apm/apm.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    ApmModule,
    DatabaseModule,
    UserModule,
    HealthCheckModule,
  ],
})
export class AppModule {}
