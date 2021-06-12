import { Component, OnInit } from '@angular/core';
import { ISerie } from '../models/ISerie.model';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-dados-serie',
  templateUrl: './dados-serie.page.html',
  styleUrls: ['./dados-serie.page.scss'],
})
export class DadosSeriePage implements OnInit {

  serie: ISerie;
  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie= this.dadosService.pegarDadaos('serie');
    this.generos = this.dadosService.pegarDadaos('generos');
  }

}
