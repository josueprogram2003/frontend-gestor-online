import { Component, inject } from '@angular/core';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  statusEffectMenuBar:boolean = false;
  _headerService = inject(HeaderService)

  public effectMenuBar(){
    this.statusEffectMenuBar = !this.statusEffectMenuBar;
    this._headerService.effectMenuBar.next(this.statusEffectMenuBar);
  }
}
