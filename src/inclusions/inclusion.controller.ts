import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { InclusionService } from './inclusion.service';
import { Inclusion } from '../types/inclusion.type';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('inclusions')
export class InclusionController {
  constructor(private readonly inclusionService: InclusionService) {}

  @Get()
  async findAll(): Promise<Inclusion[]> {
    return this.inclusionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inclusion | null> {
    return this.inclusionService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
        // destination: './uploads', // <-- where to store files
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${uniqueSuffix}${ext}`);
        }})
  }))
  async create(
    @Body() createDto: Inclusion,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    return this.inclusionService.create(createDto, file);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
    // destination: './uploads', // <-- where to store files
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    }})
  }))
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<Inclusion>,
    @UploadedFile() file: any,
  ): Promise<any> {
    return this.inclusionService.update(id, updateDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.inclusionService.delete(id);
  }
}