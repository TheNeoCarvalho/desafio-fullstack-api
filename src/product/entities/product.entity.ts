import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty()
    id: string;

    @Column()
    @ApiProperty()
    name: string;

    @Column()
    @ApiProperty()
    description: string;

    @Column()
    @ApiProperty()
    amount: number;

    @Column({
        array: true,
        default: [],
        nullable: false,
    })
    @ApiProperty()
    category: string;

    @Column()
    @ApiProperty()
    brand: string;

    @Column()
    @ApiProperty()
    size: number;

    @Column()
    @ApiProperty()
    quantity_in_stock: number;

    @Column()
    @ApiProperty()
    url_image: string;

    @CreateDateColumn()
    @ApiProperty()
    created_at: string;

    @UpdateDateColumn()
    @ApiProperty()
    updated_at: string;

    constructor(product?: Partial<ProductEntity>) {
        this.id = product?.id;
        this.name = product?.name;
        this.description = product?.description;
        this.amount = product?.amount;
        this.category = product?.category;
        this.brand = product?.brand;
        this.size = product?.size;
        this.quantity_in_stock = product?.quantity_in_stock;
        this.url_image = product?.url_image;
        this.created_at = product?.created_at;
        this.updated_at = product?.updated_at;
    }
}
