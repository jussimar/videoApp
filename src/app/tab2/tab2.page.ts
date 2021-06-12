import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ISerie } from '../models/ISerie.model';
import { DadosService } from '../services/dados.service';
import { FilmeService } from '../services/filme.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  titulo = 'Séries';

  listaSeries: ISerie[] = [
    {
      nome: 'Loki',
      lancamento: '2021',
      duracao: '52m',
      classificacao: 82,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia'],
    },
    {
      nome: 'The Flash',
      lancamento: '2014',
      duracao: '44m',
      classificacao: 77,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Fantasia'],
    },
    {
      nome: 'The Good Doctor: O Bom Doutor',
      lancamento: '2017',
      duracao: '43m',
      classificacao: 86,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtLB7xJKcbekmOYkb5NZditBsgk.jpg',
      generos: ['Drama'],
    },
    {
      nome: 'Ragnarok',
      lancamento: '2020',
      duracao: '45m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Mistério', 'Drama', 'Fantasia'],
    },
    {
      nome: 'Sweet Tooth',
      lancamento: '2021',
      duracao: '45m',
      classificacao: 81,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg',
      generos: ['Drama', 'Fantasia'],
    }
  ];

  constructor(
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public route: Router
    ) {}

    exibirFilme(serie: ISerie){
      this.dadosService.guardarDados('serie', serie);
      this.route.navigateByUrl('/dados-serie');
    }

}
