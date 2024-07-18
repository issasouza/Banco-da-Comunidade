// +-----------------------+
// |        Gerente        |
// +-----------------------+
// | - nomeCompleto: string|
// | - id: string          |
// | - clientes: Cliente[] |
// +-----------------------+
// | + constructor(...)    |
// | + adicionarCliente(cliente: Cliente): void |
// | + removerCliente(cliente: Cliente): void |
// | + abrirConta(cliente: Cliente, tipoConta: string): void |
// | + fecharConta(cliente: Cliente, conta: ContaBancaria): void |
// | + mudarTipoConta(cliente: Cliente, conta: ContaBancaria, novoTipo: string): void |

import { ContaBancaria } from "src/interfaces/interface";
import { Cliente } from "src/cliente/cliente.model"
import { v4 as uuidv4 } from 'uuid';

export class Gerente {
    nomeCompleto: string
    id: string
    clientes: Cliente[]
    contas: ContaBancaria[]

    constructor(nomeCompleto: string) {

        this.nomeCompleto = nomeCompleto
        this.id = uuidv4()
    }

    
}

    