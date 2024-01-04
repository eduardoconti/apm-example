import { Module } from '@nestjs/common';
import { HealthCheckService } from './health-check.service';
import { HealthCheckController } from './health-check.controller';

@Module({
  providers: [HealthCheckService],
  controllers: [HealthCheckController]
})
export class HealthCheckModule {}
