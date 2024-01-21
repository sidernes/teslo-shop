import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  MinLength,
  IsPositive,
  // Matches,
  IsIn,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: '160680d2-dfaf-4ed9-bf3b-3c45bf35a6cc',
    description: 'The id of the product',
    uniqueItems: true,
  })
  @IsString()
  @MinLength(2, {
    message: 'Title is too short, minimum length is 2 character',
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'The price of the product',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @ApiProperty({
    example: 'This is a description',
    description: 'The description of the product',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'This is a description',
    description: 'The description of the product',
    uniqueItems: true,
  })
  @IsString()
  @IsOptional()
  // @Matches(/^\S*$/, {
  //   message: 'slug no debe contener espacios en blanco',
  // })
  slug?: string;

  @ApiProperty({
    example: 0,
    description: 'The stock of the product',
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    example: ['S', 'M', 'L'],
    description: 'The sizes of the product',
  })
  @IsArray()
  @IsString({ each: true })
  sizes: string[];

  @ApiProperty({
    example: 'man',
    description: 'Gender of the product',
  })
  @IsIn(['man', 'woman', 'unisex', 'kids'])
  gender: string;

  @ApiProperty({
    example: ['S', 'M', 'L'],
    description: 'The sizes of the product',
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
