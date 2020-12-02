import {Controller, Get, Redirect, Req, Res} from '@nestjs/common';
import {Request, Response} from 'express';
import {AppService} from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get()
    getHello(): string {
        return 'Hello NestJS!';
    }

    @Get('t')
    @Redirect('https://docs.nestjs.com', 301)
    getT1() {
        return 'getRedirect';
    }

    @Get('tt')
    getT2(@Req() req: Request, @Res() res: Response) {
        req.rawHeaders.forEach((h) => {
            console.log('getAll= ', h);
        });
        //заменит return
        res.status(200).end('ok');
    }

}
