import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  @Get('r')
  @Redirect('https://docs.nestjs.com', 301)
  getRedirect() {
    return 'getRedirect';
  }

  @Get()
  getAll(@Req() req: Request, @Res() res: Response) {
    req.rawHeaders.forEach((h) => {
      console.log('getAll= ', h);
    });
    res.status(202).end('ok'); //заменит return
    return 'getAll';
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    return 'getOne ' + id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache1', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return (
      'title ' + createProductDto.title + ' price ' + createProductDto.price
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'delete ' + id;
  }

  @Put(':id')
  put(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return 'put ' + updateProductDto.price + ' -- ' + id;
  }
}
