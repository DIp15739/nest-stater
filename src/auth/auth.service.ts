import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signup() {
    return { msg: `i have signed up` };
  }

  signin() {
    return { msg: `i have signed in` };
  }
}
