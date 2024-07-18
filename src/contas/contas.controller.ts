import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContaCorrente, ContaPoupanca } from './contaBancaria.model';
import { ContaBancaria } from 'src/interfaces/interface';

@Controller('contas')
export class ContasController {
    constructor(private readonly contasService: ContasService){}

    @Post('corrente')
    criarContaCorrente(@Param('id') id:string, @Body('saldo') saldo:number): ContaCorrente{
        return this.contasService.criarContaCorrente(id, saldo);
    }
    @Post('poupanca')
    criarContaPoupanca(@Param('id') id:string, @Body('saldo') saldo:number):ContaPoupanca{
        return this.contasService.criarContaPoupanca(id, saldo);
    }
    @Patch('depositar/:id')
    depositar(@Param(':id')id:string, @Body('valor') valor:number){
        return this.contasService.depositar(id,valor)
    }
    @Patch('sacar/:id')
    sacar(@Param(':id')id:string, @Body('valor') valor:number){
        return this.contasService.sacar(id,valor)
    }
    @Get()
    getContas():ContaBancaria[]{
        return this.contasService.getContas()
    }
    @Get()
    getPorId(@Body('id') id:string):ContaBancaria{
        return this.contasService.getPorId(id)
    }

}
