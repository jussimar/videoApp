import { IFilme } from './../models/IFilme.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { IFilmeApi } from '../models/IFilmeApi.model';


@Component({
  selector: 'app-dados-filme',
  templateUrl: './dados-filme.page.html',
  styleUrls: ['./dados-filme.page.scss'],
})
export class DadosFilmePage implements OnInit {

  filme: IFilmeApi;
  generos: string[] = [];

  constructor(public dadosService:DadosService) { }

  ngOnInit() {
    this.filme = this.dadosService.pegarDadaos('filme');
    this.generos = this.dadosService.pegarDadaos('generos');
    console.log('Filme', this.filme);
  }

}
