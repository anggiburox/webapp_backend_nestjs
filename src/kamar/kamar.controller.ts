import { Kamar } from '@prisma/client';
import { KamarService } from './kamar.sevice';
import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('api/kamar')
export class KamarController {
  constructor(private readonly kamarService: KamarService) {}

  @Get()
  async getAllKamar(): Promise<Kamar[]> {
    const data = await this.kamarService.getAllKamar();
    if (data.length === 0) {
      throw new NotFoundException('Data tidak ada');
    }
    return data;
  }

  @Get('generate-kode')
  async generateKodeKamar(): Promise<{ kode_kamar: string }> {
    const kode_kamar = await this.kamarService.generateKodeKamar();
    return { kode_kamar };
  }

  @Post()
  async postKamar(
    @Body() postData: Kamar,
  ): Promise<{ message: string; data: Kamar }> {
    const newKamar = await this.kamarService.createKamar(postData);

    return {
      message: 'Data kamar berhasil ditambahkan',
      data: newKamar,
    };
  }

  @Get(':id')
  async getKamar(@Param('id') id: number): Promise<Kamar | null> {
    return this.kamarService.getKamar(id);
  }

  @Delete(':id')
  async deleteKamar(@Param('id') id: number): Promise<Kamar> {
    return this.kamarService.deleteKamar(id);
  }

  @Put(':id')
  async updateKamar(
    @Param('id') id: number,
    @Body() postData: Kamar,
  ): Promise<Kamar> {
    return this.kamarService.updateKamar(id, postData);
  }
}
