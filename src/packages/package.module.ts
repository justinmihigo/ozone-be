import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PackageController } from './package.controller';
import { PackageService } from './package.service';
import { PackageSchema } from './package.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Package', schema: PackageSchema }]),
  ],
  controllers: [PackageController],
  providers: [PackageService],
  exports: [PackageService],
})
export class PackageModule {}