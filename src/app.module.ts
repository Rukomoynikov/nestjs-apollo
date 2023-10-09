import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ArticlesModule } from 'src/articles/articles.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { authenticateUserByRequest } from './auth/auth.middleware';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ArticlesModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [AuthModule],
      inject: [AuthService],
      useFactory: (authService: AuthService) => {
        return {
          autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
          context: async ({ req }) => {
            const user = await authenticateUserByRequest(authService, req);
            return { req, user };
          },
        };
      },
    }),
  ],
})
export class AppModule {}
