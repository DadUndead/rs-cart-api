import { forwardRef, Module } from "@nestjs/common";

import { UsersService } from './services';
import { DatabaseModule } from "../database/database.module";

@Module({
  imports: [forwardRef(() => DatabaseModule)],
  providers: [ UsersService ],
  exports: [ UsersService ],
})
export class UsersModule {}
