import { PrismaService } from 'src/prisma.service';
import { Injectable } from '@nestjs/common';
import { Kamar } from 'generated/prisma';

@Injectable()
export class KamarService {
  constructor(private prisma: PrismaService) {}

  async getAllKamar(): Promise<Kamar[]> {
    return this.prisma.kamar.findMany();
  }

  async getKamar(id: number): Promise<Kamar | null> {
    return this.prisma.kamar.findUnique({ where: { id: Number(id) } });
  }

  async generateKodeKamar(): Promise<string> {
    const count = await this.prisma.kamar.count(); // jumlah total data
    const nextNumber = count + 1;
    const kode = `KM-${nextNumber.toString().padStart(3, '0')}`;
    return kode;
  }

  async createKamar(data: Kamar): Promise<Kamar> {
    return this.prisma.kamar.create({ data });
  }

  async updateKamar(id: number, data: Kamar): Promise<Kamar> {
    return this.prisma.kamar.update({
      where: { id: Number(id) },
      data: { kode_kamar: data.kode_kamar, nama_kamar: data.nama_kamar },
    });
  }

  async deleteKamar(id: number): Promise<Kamar> {
    return this.prisma.kamar.delete({
      where: { id: Number(id) },
    });
  }
}
