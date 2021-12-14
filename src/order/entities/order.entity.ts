import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger'

@Entity({ name: 'order' })
export class OrderEntity {

    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    product_id: string;

    @CreateDateColumn()
    @ApiProperty()
    created_at: string;

    @UpdateDateColumn()
    @ApiProperty()
    updated_at: string;
}
