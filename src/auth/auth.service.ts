import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';
import { SignInDto } from './dto/signIn.dto';
import { UserModel } from './user.model';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async createUser(data: CreateUserDto) {
    const password = await bcrypt.hash(data.password, 10);

    return this.prisma.user.create({
      data: {
        email: data.email,
        password,
        status: 'user',
      },
    });
  }

  async signIn(data: SignInDto): Promise<{ user: UserModel; token: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (user) {
      const isPasswordCorrect = await bcrypt.compareA(
        data.password,
        user.password,
      );

      if (isPasswordCorrect) {
        const token = this.jwt.sign({ sub: user.id }, { expiresIn: '30 days' });
        return { user, token };
      }
    }

    throw new Error('Email or password are not correct');
  }

  async me(token: string): Promise<UserModel | null> {
    if (token) {
      const data = this.jwt.decode(token, { json: true }) as { sub: unknown };
      if (data?.sub && !isNaN(Number(data.sub))) {
        const user = await this.prisma.user.findUnique({
          where: { id: Number(data.sub) },
        });
        return user || null;
      }
    }
    return null;
  }
}
