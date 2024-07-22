import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshJwtGuard } from './guard/refresh.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post("login")
    login(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto)
    }

    @UseGuards(RefreshJwtGuard)
    @Post('refresh')
    async refreshToken(@Request() req) {
      console.log('refreshed');
  
      return await this.authService.refreshToken(req.user);
    }
}
