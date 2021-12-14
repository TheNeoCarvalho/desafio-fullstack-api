import { Controller, Query, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { ProductSwagger } from './swagger/product.swagger';

@Controller('product')
@ApiTags('Products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

    @Post()
    @ApiOperation({ 'summary': 'Create a new porduct' })
    @ApiResponse({ status: 201, description: 'The record has been successfully created.', type: ProductSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ 'summary': 'List all products' })
    @ApiResponse({ status: 200, description: 'The all records was been successfully listed.', type: ProductSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    findAll(@Query('search') search: string) {

        console.log(search);
        if (search === null || search === undefined) {
            return this.productService.findAll();
        }
        return this.productService.findAll(search);
    }

    @Get(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully listed.', type: ProductSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiOperation({ 'summary': 'List product by UUID' })
    findOne(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.productService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.', type: ProductSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiOperation({ 'summary': 'Update product by UUID' })
    update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiOperation({ 'summary': 'Delete product by UUID' })
    remove(@Param('id') id: string) {
        return this.productService.remove(id);
    }
}
