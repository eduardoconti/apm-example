import { Injectable } from '@nestjs/common';
import 'elastic-apm-node/start';
import apm from 'elastic-apm-node';

export interface IMonitorError {
  captureException(error: Error): void;
}
@Injectable()
export class ApmService implements IMonitorError {
  captureException(error: Error) {
    apm.captureError(error);
  }
}
