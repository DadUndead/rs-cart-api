import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn, CreateDateColumn, UpdateDateColumn
} from "typeorm";
import { Cart_items } from "./cart_items.entity";

@Entity()
export class Carts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "uuid", nullable: false })
  user_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: "enum", enum: ["OPEN", "ORDERED"], nullable: false })
  status: "OPEN" | "ORDERED";

  @OneToMany(() => Cart_items, (cart_item) => cart_item.cart_id)
  @JoinColumn({ name: "id", referencedColumnName: "cart_id" })
  items: Cart_items[];
}