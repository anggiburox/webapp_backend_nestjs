import { Module } from '@nestjs/common';
import { KamarModule } from './kamar/kamar.module';

@Module({
  imports: [KamarModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
