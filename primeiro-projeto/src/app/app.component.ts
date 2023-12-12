import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiro2Component } from "./meu-primeiro2/meu-primeiro2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MeuPrimeiro2Component]
})
export class AppComponent {
  title = 'olá mundo';
}
