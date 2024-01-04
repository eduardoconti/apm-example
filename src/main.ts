import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExceptionFilter } from './exception-filter';
import { ApmService } from './apm/apm.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const apm = app.get(ApmService);

  app.useGlobalFilters(new ExceptionFilter(apm));
  await app.listen(3000);
}
bootstrap();
