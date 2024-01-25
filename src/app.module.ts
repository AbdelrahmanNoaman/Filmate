import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ActorsModule } from './actors/actors.module';

@Module({
  imports: [UsersModule, ActorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
