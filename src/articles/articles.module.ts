import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesResolver } from './articles.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [ArticlesResolver, ArticlesService],
  imports: [PrismaModule],
})
export class ArticlesModule {}