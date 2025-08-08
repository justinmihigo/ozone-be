import { Controller, Get, Post, Put, Delete, Param, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PackageService } from './package.service';
import { Package } from '../types/package.type';
import { diskStorage } from 'multer';
import { extname } from 'path';




@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Get()
  async findAll(): Promise<Package[]> {
    return this.packageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Package | null> {
    return this.packageService.findOne(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('image', {
  storage: diskStorage({
    // destination: './uploads', // <-- where to store files
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    }
})}))
  async create(
    @Body() createDto: any,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Package> {
    return this.packageService.createWithImage(createDto, file);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
  storage: diskStorage({
    // destination: './uploads', // <-- where to store files
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      cb(null, `${uniqueSuffix}${ext}`);
    }
})}))
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<Package>,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<Package | null> {
    return this.packageService.updateWithImage(id, updateDto, file);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Package | null> {
    return this.packageService.delete(id);
  }
}