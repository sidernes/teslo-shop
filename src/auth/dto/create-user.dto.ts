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
  @IsString({ message: 'El correo debe ser un texto' })
  @IsEmail({}, { message: 'Invalid email' })
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  roles: string[];

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
