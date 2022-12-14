import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillsModule } from './modules/bills/module/bills.module';
import { MonthsModule } from './modules/months/module/months.module';
import { StudentsModule } from './modules/students/module/students.module';
import { UsersModule } from './modules/users/module/users.module';
import { RepresentativesModule } from './modules/representatives/module/representatives.module';
import { ParentsModule } from './modules/parents/module/parents.module';
import Endpoint from './endpoint/endpoint';
import { MongooseConfigModule } from './database/modules/mongodb/module/mongoose-config.module';
import { AuthModule } from './auth/module/auth.module';
import { RateModule } from './modules/rates/module/rate.module';
import { CurrenciesModule } from './modules/currencies/module/currencies.module';
import config from '../config/config';
import mainEntities from './entities/main.entities';
import mainDto from './dto/main.dto';

@Module({
  imports: [
    MongooseConfigModule,
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true,
      cache: true,
    }),
    AuthModule,
    RateModule,
    CurrenciesModule,
    BillsModule,
    MonthsModule,
    StudentsModule,
    UsersModule,
    RepresentativesModule,
    ParentsModule,
  ],
  controllers: [AppController],
  providers: [Endpoint, AppService, ...mainEntities, ...mainDto],
  exports: [Endpoint, ...mainEntities, ...mainDto],
})
export class AppModule {}
