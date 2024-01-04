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

  span(
    name: string,
    options?: { type: string; subType: string; action: string },
  ): apm.Span {
    const span = apm.startSpan(name);
    span.type = options.type;
    span.subtype = options.subType;
    span.action = options.action;
    return span;
  }
}
