import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteService } from './cliente/cliente.service';
import { GerenteService } from './gerente/gerente.service';
import { GerenteController } from './gerente/gerente.controller';
import { ContasService } from './contas/contas.service';
import { ContasController } from './contas/contas.controller';

@Module({
  imports: [],
  controllers: [AppController, GerenteController, ContasController],
  providers: [AppService, ClienteService, GerenteService, ContasService],
})
export class AppModule {}
