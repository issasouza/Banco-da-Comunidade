import { Injectable } from '@nestjs/common';
import { Gerente } from './gerente.model';
import { clientes, ContaBancaria } from 'src/interfaces/interface';
import { Cliente } from 'src/cliente/cliente.model';
import { v4 as uuidv4 } from 'uuid';
import { ContaTipo } from 'src/enum/tipo.enum';

@Injectable()
export class GerenteService {
    private gerentes: Gerente[] = [];


    adicionarCliente(cliente: Cliente): void {
        gerente.clientes.push(cliente);
    }
    removerCliente(cliente: Cliente): void{}
    abrirConta(cliente: Cliente, tipoConta: ContaTipo): void{}
    fecharConta(cliente: Cliente, conta: ContaBancaria): void{}
    mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo: string): void{}

}
