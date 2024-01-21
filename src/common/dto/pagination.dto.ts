import { IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({
    example: 10,
    description: 'The number of items to return',
    required: false,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  limit?: number;

  @ApiProperty({
    example: 0,
    description: 'The number of items to skip',
    required: false,
  })
  @IsOptional()
  @IsPositive()
  @Type(() => Number)
  offset?: number;
}
