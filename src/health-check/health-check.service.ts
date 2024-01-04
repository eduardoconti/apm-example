import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  check() {
    return {
      status: 200,
      message: 'app is running!',
    };
  }
}
