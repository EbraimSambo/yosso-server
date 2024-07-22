import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [AuthService, JwtService, DatabaseService, UserService],
  controllers: [AuthController]
})
export class AuthModule {}
