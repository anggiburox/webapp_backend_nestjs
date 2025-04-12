import { Prisma } from '@prisma/client';

export class Kamar implements Prisma.KamarCreateInput {
  id?: number;
  kode_kamar: string;
  nama_kamar?: string;
}
