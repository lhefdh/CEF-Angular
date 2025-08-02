import { Component } from '@angular/core';
import { HidingHeaderFooterService } from '../hiding-header-footer.service';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  template: `
  <div class="notFound-container">
    <h1>Page Non Trouvée</h1>
    <button routerLink="/">Retournez au Village</button>
  </div>
  `,
  styles: ``
})
export class PageNotFoundComponent {

  // changement de la valeur showHeaderFooter dans le service, false quand le component est monté, et enfin True lors de la destruction du component

  constructor(private headerFooterService: HidingHeaderFooterService) {
    this.headerFooterService.setHeaderFooterVisibility(false);
  }
  ngOnDestroy() {
    this.headerFooterService.setHeaderFooterVisibility(true);
  }
}
