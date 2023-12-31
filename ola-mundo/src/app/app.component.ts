import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstCompomentComponent } from "./components/first-compoment/first-compoment.component";
import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { DirectivesComponent } from "./components/directives/directives.component";
import { EventosComponent } from "./components/eventos/eventos.component";
import { ListComponent } from "./components/list/list.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FirstCompomentComponent, ParentDataComponent, DirectivesComponent, EventosComponent, ListComponent]
})
export class AppComponent {
  userName = 'Rafaely'
  userData = {
    email:'rafaely@gmail.com',
    role:'admin'
  }
  title = 'ola-mundo';
}
