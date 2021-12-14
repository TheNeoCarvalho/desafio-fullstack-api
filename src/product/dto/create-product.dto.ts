import {ApiProperty } from '@nestjs/swagger';

class CreateProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    amount: number;

    @ApiProperty()
    category: string;

    @ApiProperty()
    brand: string;

    @ApiProperty()
    size: number;

    @ApiProperty()
    quantity_in_stock: number;

    @ApiProperty()
    url_image: string;

}

export { CreateProductDto }
