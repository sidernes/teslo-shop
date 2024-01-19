import { Response } from 'express';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter, fileNamer } from './helpers/';
import { diskStorage } from 'multer';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {
  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('products/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string,
  ) {
    const path = this.filesService.getStaicProductImage(imageName);
    // res.status(403).json({
    //   ok: false,
    //   path,
    // });
    // return path;
    res.sendFile(path);
  }

  @Post('products')
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: fileFilter,
      // limits: { fileSize: 1024 * 1024 * 5 },
      storage: diskStorage({
        destination: './static/products',
        //forma basica de guardar el archivo
        // filename: (req, file, cb) => {
        //   const fileName = `${Date.now()}-${file.originalname}`;
        //   return cb(null, fileName);
        // },
        filename: fileNamer,
      }),
    }),
  )
  uploadProductImage(
    @UploadedFile()
    image: Express.Multer.File,
  ) {
    if (!image) {
      throw new BadRequestException('Make sure to send image file');
    }
    // const secureUrl = `${image.filename}`;
    const secureUrl = `${this.configService.get('HOST_API')}/files/products/${
      image.filename
    }`;
    return {
      imagen: secureUrl,
    };
  }
}
