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
  @IsString()
  @MinLength(2, {
    message: 'Title is too short, minimum length is 2 character',
  })
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  // @Matches(/^\S*$/, {
  //   message: 'slug no debe contener espacios en blanco',
  // })
  slug?: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @IsArray()
  @IsString({ each: true })
  sizes: string[];

  @IsIn(['man', 'woman', 'unisex', 'kids'])
  gender: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images?: string[];
}
