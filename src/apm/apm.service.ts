import { Injectable } from '@nestjs/common';
import 'elastic-apm-node/start';

@Injectable()
export class ApmService {}
