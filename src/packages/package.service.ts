import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import cloudinaryStorage from "./package.provider"
import { Package } from '../types/package.type';
@Injectable()
export class PackageService {
  constructor(
    @InjectModel('Package') private readonly packageModel: Model<Package>,
  ) {}

  async create(createDto: Package): Promise<Package> {
    const created = new this.packageModel(createDto);
    return created.save();
  }

  async createWithImage(createDto: Package, file?: any): Promise<Package> {
    let imageUrl = createDto.image;
    if (file) {
      const result = await cloudinaryStorage().uploader.upload(file.path);
      imageUrl = result.secure_url;
    }
    const created = new this.packageModel({ ...createDto, image: imageUrl });
    return created.save();
  }

  async findAll(): Promise<Package[]> {
    return this.packageModel.find().exec();
  }

  async findOne(id: string): Promise<Package | null> {
    return this.packageModel.findById(id).exec();
  }

  async update(id: string, updateDto: Partial<Package>): Promise<Package | null> {
    return this.packageModel.findByIdAndUpdate(id, updateDto, { new: true }).exec();
  }

  async updateWithImage(id: string, updateDto: Partial<Package>, file?: any): Promise<Package | null> {
    let imageUrl = updateDto.image;
    if (file) {
      const result = await cloudinaryStorage().uploader.upload(file.path);
      imageUrl = result.secure_url;
    }
    return this.packageModel.findByIdAndUpdate(id, { ...updateDto, image: imageUrl }, { new: true }).exec();
  }

  async delete(id: string): Promise<Package | null> {
    return this.packageModel.findByIdAndDelete(id).exec();
  }
}