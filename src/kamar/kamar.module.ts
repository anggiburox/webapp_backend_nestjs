import { Module } from '@nestjs/common';
import { KamarController } from './kamar.controller';
import { KamarService } from './kamar.sevice';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [KamarController],
  providers: [KamarService, PrismaService],
})
export class KamarModule {}
