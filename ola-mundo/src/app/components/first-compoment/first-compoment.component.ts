import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-compoment',
  standalone: true,
  imports: [],
  templateUrl: './first-compoment.component.html',
  styleUrl: './first-compoment.component.css'
})
export class FirstCompomentComponent{
  name = 'eleson'
  idade = '29'
  profissao = 'front-end'
  hobbie = ['ler', 'assitir anime', 'tocar Violão']
  moto ={
    nome:'pop',
    potencia:'110cc',
    ano:'2019'
  }
}
