import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.scss'
})
export class HeaderMenuComponent {

  @Input({required:true}) title!:string;
  @Input({required:true}) description!:string;
  @Input() icon !:string;

  constructor(private sanitizer:DomSanitizer){

  }

  get contentSVG(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

}
