import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsArray,
  IsBoolean,
  IsOptional,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'micorreo@email.com',
    description: 'The id of the user',
    uniqueItems: true,
  })
  @IsString({ message: 'El correo debe ser un texto' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @ApiProperty({
    example: 'Example123',
    description: 'The password of the user, may contain letters and numbers',
    minLength: 6,
    maxLength: 50,
  })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @ApiProperty({
    example: 'My Name',
    description: 'The name of the user',
    minLength: 3,
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: ['admin', 'user'],
    description: 'The roles of the user',
    isArray: true,
    uniqueItems: true,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles: string[];

  @ApiProperty({
    example: true,
    description: 'The status of the user',
  })
  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
