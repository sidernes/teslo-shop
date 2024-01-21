import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductImage } from './';
import { User } from '../../auth/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    example: '160680d2-dfaf-4ed9-bf3b-3c45bf35a6cc',
    description: 'The id of the product',
    uniqueItems: true,
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text', {
    unique: true,
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'The price of the product',
  })
  @Column('float', {
    default: 0,
  })
  price: number;

  @ApiProperty({
    example: 'This is a description',
    description: 'The description of the product',
  })
  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;

  @ApiProperty({
    example: 'This is a description',
    description: 'The description of the product',
    uniqueItems: true,
  })
  @Column('text', {
    unique: true,
  })
  slug: string;

  @ApiProperty({
    example: 0,
    description: 'The stock of the product',
  })
  @Column('int', {
    default: 0,
  })
  stock: number;

  @ApiProperty({
    example: ['S', 'M', 'L'],
    description: 'The sizes of the product',
  })
  @Column('text', {
    array: true,
  })
  sizes: string[];

  @ApiProperty({})
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ['tag1', 'tag2', 'tag3'],
    description: 'The tags of the product',
  })
  @Column('text', {
    array: true,
    default: [],
  })
  tags: string[];

  @ApiProperty({
    example: ['tag1', 'tag2', 'tag3'],
    description: 'The tags of the product',
  })
  @OneToMany(() => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    eager: true,
  })
  images?: ProductImage[];

  @ManyToOne(() => User, (user) => user.products, { eager: true })
  user: User;

  @BeforeInsert()
  chekSlugInsert() {
    if (!this.slug) {
      this.slug = this.title;
    }

    this.slug = this.slug
      .toLowerCase()
      .replace(/ /g, '-')
      .replaceAll(' ', '')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  chekSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replace(/ /g, '_')
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }
}
