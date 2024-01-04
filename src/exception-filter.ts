import type {
  ArgumentsHost,
  ExceptionFilter as NestExceptionFilter,
} from '@nestjs/common';
import type { Response } from 'express';

import { IMonitorError } from './apm/apm.service';

export class ExceptionFilter implements NestExceptionFilter {
  constructor(private readonly errorMonitor: IMonitorError) {}

  catch(exception: Error, host: ArgumentsHost): void {
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const res = ctx.getResponse<Response>();
      this.errorMonitor.captureException(exception);
      res.setHeader('content-type', 'aplication/problem+json');
      res.status(500).json({
        status: 500,
        title: 'Internal server error',
        detail: exception.message,
        type: 'about:blank',
      });
    }
  }
}
