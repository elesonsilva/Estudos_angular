import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 animais = [
  {nome:'turca',tipo:'cachorro'},
  {nome:'tom',tipo:'gato'},
  {nome:'frida',tipo:'cachorro'},
  {nome:'bob',tipo:'cavalo'},
]
}
