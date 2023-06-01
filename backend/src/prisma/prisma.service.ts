import { Injectable } from '@nestjs/common';
import {PrismaClient} from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient{
    constructor() {
            super({
                    datasources: {
                        db: {
                            url: "mysql://root:admin@localhost:21001/fast_traiteur?schema=public"
                        },
                    },
                });
    }
}
