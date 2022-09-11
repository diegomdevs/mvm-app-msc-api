import { Module } from '@nestjs/common';
import Endpoint from '../../../endpoint/Endpoint';
import { UsersController } from '../controller/users.controller';
import { UsersService } from '../service/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [Endpoint],
})
export class UsersModule {}
