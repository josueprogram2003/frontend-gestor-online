import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-button-customize',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-customize.component.ts',
  styleUrl: './button-customize.component.scss'
})
export class ButtonCustomizeComponent {
  @Input({required:true}) cssClass!:string;
  @Input({required:true}) title!:string;
  @Input() icon!:string;

  constructor(private sanitizer: DomSanitizer){
  }

  get contentSVG(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.icon);
  }

}
