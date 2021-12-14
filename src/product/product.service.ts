import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async create(createProductDto: CreateProductDto) {
        return await this.productRepository.save(createProductDto);
    }

    async findAll(search?: string) {
        if (search) {
            return await this.productRepository.find({
                where: { brand: Like("%" + search + "%") }
            });
        }
        return await this.productRepository.find();
    }

    async findOne(id: string) {
        try {
            return await this.productRepository.findOneOrFail(id);
        } catch (error) {
            return error;
        }
    }

    async update(id: string, updateProductDto: UpdateProductDto) {
        const product = await this.productRepository.findOneOrFail(id);
        this.productRepository.merge(product, updateProductDto);
        return await this.productRepository.save(product);
    }

    async remove(id: string) {
        await this.productRepository.delete(id);
  }
}
