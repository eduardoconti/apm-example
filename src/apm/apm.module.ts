import { Module } from '@nestjs/common';
import { ApmService } from './apm.service';

@Module({
  providers: [ApmService],
})
export class ApmModule {}
