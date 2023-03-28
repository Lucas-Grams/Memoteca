import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit{

  pensamento:Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: ''
}

  ngOnInit(): void {}

  criarPensamento(){
    alert("criando pensmaento");
  }

  cancelar(){
    alert("cancelando pensamento");
  }

}
