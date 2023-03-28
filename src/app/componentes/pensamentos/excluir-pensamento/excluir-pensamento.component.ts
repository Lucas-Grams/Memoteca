import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit{

constructor(private pensamentoService: PensamentoService,
  private router:Router,
  private route: ActivatedRoute){}
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
}


ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.pensamentoService.buscarPensamento(parseInt(id!)).subscribe((pensamento) =>{this.pensamento = pensamento})
}

excluirPensamento(){
  if(this.pensamento.id){
    this.pensamentoService.excluirPensamento(this.pensamento.id).subscribe(() => {this.router.navigate(['/listarPensamento'])});
  }
}

cancelar(){
  this.router.navigate(['/listarPensamento']);
}

}
