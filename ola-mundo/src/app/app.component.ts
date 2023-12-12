import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstCompomentComponent } from "./components/first-compoment/first-compoment.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FirstCompomentComponent]
})
export class AppComponent {
  title = 'ola-mundo';
}
