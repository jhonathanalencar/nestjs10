import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

// REPL - Read Eval Print Loop

async function bootstrap() {
  await repl(AppModule);
}

bootstrap();
