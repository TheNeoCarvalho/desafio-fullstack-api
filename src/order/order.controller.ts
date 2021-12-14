import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'
import { OrderSwagger } from './swagger/order.swagger';



@Controller('order')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

    @Post(':product_id')
    @ApiOperation({ 'summary': 'Create a new order' })
    @ApiResponse({ status: 200, description: 'Successful order created.', type: OrderSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    create(@Param('product_id', new ParseUUIDPipe()) product_id: string) {
        return this.orderService.create(product_id);
    }

    @Get()
    @ApiOperation({ 'summary': 'List all orders' })
    @ApiResponse({ status: 200, description: 'The all records was been successfully listed.', type: OrderSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    findAll() {
        return this.orderService.findAll();
    }

    @Get(':id')
    @ApiOperation({ 'summary': 'List order by UUID' })
    @ApiResponse({ status: 200, description: 'The record has been successfully listed.', type: OrderSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    findOne(@Param('id') id: string) {
        return this.orderService.findOne(id);
    }

    @Patch(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully updated.', type: OrderSwagger })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiOperation({ 'summary': 'Update order by UUID' })
    update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete(':id')
    @ApiResponse({ status: 201, description: 'The record has been successfully deleted.' })
    @ApiResponse({ status: 400, description: 'Bad Request' })
    @ApiOperation({ 'summary': 'Delete order by UUID' })
    remove(@Param('id') id: string) {
        return this.orderService.remove(id);
    }
}
