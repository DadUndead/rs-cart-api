import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Carts } from "./entities/carts.entity";
import { Cart_items } from "./entities/cart_items.entity";
import { Orders } from "./entities/orders.entity";
import { Users } from "./entities/users.entity";

import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule
      ],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('PGHOST'),
        port: configService.get('PGPORT'),
        username: configService.get('PGUSER'),
        password: configService.get('PGPASSWORD'),
        database: configService.get('PGDATABASE'),
        entities: ['dist/database/entities/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Carts, Cart_items, Orders, Users]),
  ],
  exports: [TypeOrmModule],
})

export class DatabaseModule {}