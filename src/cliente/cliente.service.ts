import { Injectable } from '@nestjs/common';
import { ContaTipo } from 'src/enum/tipo.enum';
import { Gerente } from 'src/gerente/gerente.model';
import { clientes, ContaBancaria } from 'src/interfaces/interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ClienteService {
    private clientes: clientes[] = [];
    private contas: ContaBancaria[] = []

    criarCliente(nomeCompleto: string, endereco: string, telefone: string, gerente: Gerente): clientes {
        const novoCliente: clientes = {
            id: uuidv4(),
            nomeCompleto,
            endereco,
            telefone,
            contas: [],
            gerente
        };
        this.clientes.push(novoCliente);
        return novoCliente;
    }
    abrirConta(id:string ,conta: ContaBancaria): void {
        const contaExistente = this.contas.find(c => c.id === conta.id);
        if (contaExistente) {
            throw new Error("Conta já existe.");
        }
        this.contas.push(conta)
    }
    fecharConta(conta: ContaBancaria): void {
        const index = this.contas.findIndex(c => c.id === conta.id)
        if (index === -1){
            throw new Error("Essa conta não foi encontrada");
        }
        this.contas.splice(index, 1);
        
    }
    mudarTipoConta(conta: ContaBancaria, contaTipo: ContaTipo): void {
        const contaExistente = this.contas.find(c => c.id === conta.id);
        if (contaExistente) {
            throw new Error("Conta já existe.");
        }
        contaExistente.id = contaTipo;
    }
}

