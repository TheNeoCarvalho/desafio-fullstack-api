import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [ProductModule, OrderModule, TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get('POSTGRES_HOST', 'postgres'),
            port: configService.get('POSTGRES_PORT', 5432),
            username: configService.get('POSTGRES_USER', 'postgres'),
            password: configService.get('POSTGRES_PASS', 'postgres'),
            database: configService.get('POSTGRES_DATABASE', 'shoes'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
