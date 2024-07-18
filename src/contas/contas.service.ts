import { Injectable } from '@nestjs/common';
import { ContaBancaria } from 'src/interfaces/interface';
import { ContaCorrente, ContaPoupanca } from './contaBancaria.model';

@Injectable()
export class ContasService {
    private contas: ContaBancaria[] = [];

    criarContaCorrente(id: string, saldo: number): ContaCorrente {
        const conta = new ContaCorrente(id, saldo);
        this.contas.push(conta);
        return conta;
    }

    criarContaPoupanca(id: string, saldo: number): ContaPoupanca {
        const conta = new ContaPoupanca(id, saldo);
        this.contas.push(conta);
        return conta;
    }

    depositar(id: string, valor: number): void {
        const conta = this.contas.find(conta => conta.id === id);
        if (conta) {
            conta.depositar(valor);
        } else {
            console.log('Conta não encontrada.');
        }
    }

    sacar(id: string, valor: number): void {
        const conta = this.contas.find(conta => conta.id === id);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log('Conta não encontrada.');
        }
    }

    getContas():ContaBancaria[]{
        return this.contas;
    }
     
    getPorId(id: string): ContaBancaria {
        return this.contas.find(conta => conta.id === id);
    }

}
