import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';


@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, DirectivesComponent],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
  
})

export class DirectivesComponent implements CommonModule {
 canShow: boolean = true;
 name ='eleson'
  
    
  
  constructor(){}
  
  
}
