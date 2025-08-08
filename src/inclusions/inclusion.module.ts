import { Module } from '@nestjs/common';
import { InclusionController } from './inclusion.controller';
import { InclusionService } from './inclusion.service';
import { InclusionSchema } from './inclusion.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Inclusion', schema: InclusionSchema}])],
  controllers: [InclusionController],
  providers: [InclusionService],
  exports: [InclusionService],
})
export class InclusionModule {}