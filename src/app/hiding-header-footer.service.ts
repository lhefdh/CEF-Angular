import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HidingHeaderFooterService {
  // variable showHeaderFooter dont la valeur changera depuis pageNotFound et cette valeur est consultable depuis Header et Footer
  private showHeaderFooter = new BehaviorSubject<boolean>(true);
  showHeaderFooter$ = this.showHeaderFooter.asObservable();

  setHeaderFooterVisibility(visible: boolean) {
    this.showHeaderFooter.next(visible);
  }

  constructor() { }
}
