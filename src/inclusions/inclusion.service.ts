import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import cloudinaryStorage from '../packages/package.provider';
import { Inclusion } from '../types/inclusion.type';

@Injectable()
export class InclusionService {
  constructor(
    @InjectModel('Inclusion') private readonly inclusionModel: Model<Inclusion>,
  ) {}

  async create(createDto: Inclusion, file?: Express.Multer.File): Promise<Inclusion> {
    let imageUrl = createDto.image;
    if (file) {
      const result = await cloudinaryStorage().uploader.upload(file.path, {
        folder: 'inclusions',
      });
      imageUrl = result.secure_url;
    }
    const created = new this.inclusionModel({ ...createDto, image: imageUrl });
    return created.save();
  }

  async findAll(): Promise<Inclusion[]> {
    return this.inclusionModel.find().exec();
  }

  async findOne(id: string): Promise<Inclusion | null> {
    return this.inclusionModel.findById(id).exec();
  }

  async update(id: string, updateDto: Partial<Inclusion>, file?: Express.Multer.File): Promise<Inclusion | null> {
    let imageUrl = updateDto.image;
    if (file) {
      const result = await cloudinaryStorage().uploader.upload(file.path, {
        folder: 'inclusions',
      });
      imageUrl = result.secure_url;
    }
    return this.inclusionModel.findByIdAndUpdate(id, { ...updateDto, image: imageUrl }, { new: true }).exec();
  }

  async delete(id: string): Promise<Inclusion | null> {
    return this.inclusionModel.findByIdAndDelete(id).exec();
  }
}