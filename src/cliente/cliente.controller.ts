import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Gerente } from 'src/gerente/gerente.model';
import { ContaBancaria } from 'src/interfaces/interface';


@Controller('cliente')
export class ClienteController {
    constructor(private readonly clienteService: ClienteService) {}

    @Post()
  criarCliente(
    @Body('nomeCompleto') nomeCompleto: string,
    @Body('endereco') endereco: string,
    @Body('telefone') telefone: string,
    @Body('gerente') gerente: Gerente,
  ) {
    return this.clienteService.criarCliente(nomeCompleto, endereco, telefone, gerente);
  }

  @Post(':id/conta')
  abrirConta(@Param('id') id: string, @Body('conta') conta: ContaBancaria){
    return this.clienteService.abrirConta(id,conta)
  }
  @Delete(':id/conta/:id')
  fecharConta(@Body('conta')conta:ContaBancaria){
    this.clienteService.fecharConta(conta)
  }
  


}
