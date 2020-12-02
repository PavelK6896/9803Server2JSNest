import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { urlDb } from "../setting";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(urlDb)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
