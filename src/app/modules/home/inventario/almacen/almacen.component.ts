import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../../../../shared/components/header-menu/header-menu.component';

@Component({
  selector: 'app-almacen',
  standalone: true,
  imports: [CommonModule, HeaderMenuComponent],
  templateUrl: './almacen.component.html',
  styleUrl: './almacen.component.scss'
})
export default class AlmacenComponent {

  icon:string= `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.5 2L6 11H17L11.5 2Z" fill="white"/>
  <path d="M17 22C19.4853 22 21.5 19.9853 21.5 17.5C21.5 15.0147 19.4853 13 17 13C14.5147 13 12.5 15.0147 12.5 17.5C12.5 19.9853 14.5147 22 17 22Z" fill="white"/>
  <path d="M2.5 13.5H10.5V21.5H2.5V13.5Z" fill="white"/>
  </svg>
  `

}
