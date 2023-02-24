import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/app/services/observable/observable.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  selectedPage$ = this.observableService.selectedPage$

  constructor(private observableService: ObservableService) { }

  ngOnInit(): void {
    this.selectedPage$.subscribe((selectedPage) => {
    });
  }
}
