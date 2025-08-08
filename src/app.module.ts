import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PackageModule } from './packages/package.module';
import { InclusionModule } from './inclusions/inclusion.module';
import { UserModule } from './users/user.module';
import { EmailModule } from './email/email.module';
import {configDotenv} from 'dotenv';
configDotenv();
const MONGO_URI= process.env.MONGO_URI || 'mongodb://localhost:27017/ozone-travel';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_URI),
    PackageModule,
    InclusionModule,
    UserModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
