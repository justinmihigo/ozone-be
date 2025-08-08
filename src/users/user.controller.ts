import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../types/user.type';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: User): Promise<User> {
    return this.userService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateDto: Partial<User>): Promise<User | null> {
    return this.userService.update(id, updateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User | null> {
    return this.userService.delete(id);
  }

  @Post('login')
  async login(@Body('email') email: string): Promise<User | null> {
    return this.userService.findByEmail(email);
  }
}
