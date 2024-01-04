import { Global, Module } from '@nestjs/common';
import { ApmService } from './apm.service';

@Global()
@Module({
  providers: [ApmService],
  exports: [ApmService],
})
export class ApmModule {}
