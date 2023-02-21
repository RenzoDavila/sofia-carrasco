import { Component } from '@angular/core';
import { Page } from 'src/app/models/page.model';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  selectedPage: Page = {
    page: 'home'
  };

  constructor(private observableService: ObservableService) {}

  ngOnInit(): void {
    this.observableService.selectedPage$.subscribe((page:Page) => this.selectedPage = page)
  }

  changeSelected(page: string){
    let tempSelectedPage : Page = {
      page: page
    };
    this.observableService.setPage(tempSelectedPage)
  }

}
