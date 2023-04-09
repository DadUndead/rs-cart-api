import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Carts } from "./carts.entity";

@Entity()
export class Cart_items {
  @PrimaryGeneratedColumn("uuid")
  product_id: string;

  @Column({ type: "int", nullable: false })
  count: number;

  @ManyToOne(() => Carts)
  @JoinColumn({ name: "cart_id", referencedColumnName: "id" })
  cart_id: Carts;
}