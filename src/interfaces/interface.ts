import { ContaTipo } from "src/enum/tipo.enum";
import { Gerente } from "src/gerente/gerente.model";

export interface ContaBancaria{
    id: string,
    saldo:number,
    tipo:ContaTipo,
    depositar(valor:number):void,
    sacar(valor:number):void;

}
export interface clientes{
    nomeCompleto: string
    id: String
    endereco: string
    telefone: string
    contas: ContaBancaria[]
    gerente: Gerente
    
    
}
