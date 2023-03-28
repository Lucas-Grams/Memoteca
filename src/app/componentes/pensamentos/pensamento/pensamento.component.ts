import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  @Input() pensamento: Pensamento = {
    id: 5,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
}

larguraPensamento():string{
  if(this.pensamento.conteudo.length >= 256){
    return 'pensamento-g';
  } else{
    return 'pensmaento-p';
  }
}
}
