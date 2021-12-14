import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrderEntity } from './entities/order.entity';


@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(OrderEntity)
        private readonly orderRepository: Repository<OrderEntity>,
    ) { }

    async create(product_id: string) {
        const order = new OrderEntity();
        order.product_id = product_id;

        return await this.orderRepository.save(order);
    }

    async findAll() {
        return await this.orderRepository.find();
    }

    async findOne(id: string) {
        return await this.orderRepository.findOne(id);
    }

    async update(id: string, updateOrderDto: UpdateOrderDto) {
        const order = await this.orderRepository.findOneOrFail(id);
        this.orderRepository.merge(order, updateOrderDto);
        return await this.orderRepository.save(order);
    }

    async remove(id: string) {
        await this.orderRepository.delete(id);
    }
}
