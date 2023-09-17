import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prismaService: PrismaService) { }



}
