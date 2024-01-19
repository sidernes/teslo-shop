import { join } from 'path';
import { BadRequestException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

@Injectable()
export class FilesService {
  // uploadProductImage(createFileDto: CreateFileDto) {
  //   return 'This action adds a new file';
  // }
  getStaicProductImage(imageName: string) {
    const path = join(__dirname, '../../static/products', imageName);
    if (!existsSync(path))
      throw new BadRequestException(`Image not foun whit name: ${imageName}`);
    return path;
  }
}
