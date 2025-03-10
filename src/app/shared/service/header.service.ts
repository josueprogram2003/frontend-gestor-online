import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  public effectMenuBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
