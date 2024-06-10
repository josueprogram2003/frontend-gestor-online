import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderService } from '../../shared/service/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,SidebarComponent, HeaderComponent,RouterOutlet,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent implements OnInit, AfterViewInit{

  statusEffectMenuBar!:boolean;
  screenWidth:number = 0;
  _headerToggleService = inject(HeaderService);
  @ViewChild('sidebar') sidebar!:ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document){

  }

  ngAfterViewInit(): void {
    if (this.document.defaultView) {
      this.screenWidth = this.document.defaultView.innerWidth;
    }

    if (this.screenWidth <800) {
      const sidebarMock = this.sidebar.nativeElement as HTMLElement;
      sidebarMock.classList.remove('show')
    }

    if (this.screenWidth >800) {
      const sidebarMock = this.sidebar.nativeElement as HTMLElement;
      sidebarMock.classList.add('show')
    }
  }

  ngOnInit(): void {
    this.effectMenuBar();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:Event){
    if (this.document.defaultView) {
      this.screenWidth = this.document.defaultView.innerWidth;
      console.log(this.screenWidth)
    }
    if (this.screenWidth > 800) {
      const sidebarMock = this.sidebar.nativeElement as HTMLElement;
      if (this.statusEffectMenuBar) {
        sidebarMock.classList.add('show')
      }else{
        sidebarMock.classList.add('show')
      }
    }

    if(this.screenWidth < 800) {
      const sidebarMock = this.sidebar.nativeElement as HTMLElement;
      if (this.statusEffectMenuBar) {
        sidebarMock.classList.add('show')
      }else{
        sidebarMock.classList.remove('show')
      }
    }
  }

  public effectMenuBar(){
    this._headerToggleService.effectMenuBar.subscribe((value:boolean)=>{
      this.statusEffectMenuBar = value;
      console.log(value)
      if (this.sidebar) {
        const sidebarMock = this.sidebar.nativeElement as HTMLElement;
        if (this.statusEffectMenuBar) {
          sidebarMock.classList.add('show')
        }else{
          sidebarMock.classList.remove('show')
        }
      }
    })
  }


}
