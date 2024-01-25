import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  name: string;
  @ApiProperty()
  @Column()
  userId: string;
  @ApiProperty({ required: false })
  @Column()
  bio?: string;
  @ApiProperty({ required: false })
  @Column()
  mobileNumber?: string;
  @ApiProperty()
  @Column()
  password: string;
  @ApiProperty({ required: false })
  @Column()
  gender?: string;
  @ApiProperty({ required: false })
  @Column('date')
  dateOfBirth?: Date;
  @ApiProperty({ required: false })
  @Column()
  country?: string;
  @ApiProperty()
  @Column()
  titleDisplay: string;
  @ApiProperty()
  @Column()
  displayLanguage: string;
  @ApiProperty()
  @Column()
  ratingsPrivacy: string;
}