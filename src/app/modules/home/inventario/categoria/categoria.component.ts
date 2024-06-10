import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CustomerServiceService } from './customer-service.service';
import { TagModule } from 'primeng/tag';
import { HeaderMenuComponent } from '../../../../shared/components/header-menu/header-menu.component';

export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  id?: number;
  name?: string;
  country?: Country;
  company?: string;
  date?: string | Date;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule,TableModule,TagModule,HeaderMenuComponent],
  providers: [ CustomerServiceService ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export default class CategoriaComponent implements OnInit {
  customers!: Customer[];

  selectedCustomers!: Customer;
  icon:string= `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.5 2L6 11H17L11.5 2Z" fill="white"/>
  <path d="M17 22C19.4853 22 21.5 19.9853 21.5 17.5C21.5 15.0147 19.4853 13 17 13C14.5147 13 12.5 15.0147 12.5 17.5C12.5 19.9853 14.5147 22 17 22Z" fill="white"/>
  <path d="M2.5 13.5H10.5V21.5H2.5V13.5Z" fill="white"/>
  </svg>
  `
  constructor(private customerService: CustomerServiceService) {}

  ngOnInit() {
    this.customerService.getCustomersMini().then((data:any) =>{
      if (data != null || undefined) {
        this.customers = data;
        // console.log(this.customers)
      }
    });
  }

  getSeverity(status: string) {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
        default:
            return null;
    }
  }

  onChangeInput(event:Event, name:string){
    const value = (event.target as HTMLInputElement).value;
    this.customers = this.customers.filter(customer => customer.name?.includes(value));
    console.log(this.customers)
  }



}
