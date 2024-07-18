// +---------------------------------+
// |           Cliente               |
// +---------------------------------+
// | - nomeCompleto: string          |
// | - id: string                    |
// | - endereco: string              |
// | - telefone: string              |
// | - contas: ContaBancaria[]       |
// | - gerente: Gerente              |
// +---------------------------------+
// | + constructor(...)              |
// | + abrirConta(conta: ContaBancaria): void |
// | + fecharConta(conta: ContaBancaria): void |
// | + mudarTipoConta(conta: ContaBancaria, novoTipo: string): void |


import { clientes, ContaBancaria } from "src/interfaces/interface";
import { Gerente } from 'src/gerente/gerente.model';
import { v4 as uuidv4 } from 'uuid';


export class Cliente implements clientes {

    nomeCompleto: string
    id: String
    endereco: string
    telefone: string
    contas: ContaBancaria[]
    gerente: Gerente


    constructor(nomeCompleto: string, endereco: string, telefone: string, gerente: Gerente) {
        this.id = uuidv4()
        this.nomeCompleto = nomeCompleto
        this.endereco = endereco
        this.telefone = telefone
        this.contas = [];
        this.gerente = gerente;
    }

    
}


