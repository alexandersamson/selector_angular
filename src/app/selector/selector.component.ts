import {Component, OnDestroy, OnInit} from '@angular/core';
import { GlobalsService} from '../services/globals.service';
import { Subscription } from 'rxjs';
import { SelectorService } from '../services/selector.service';
import { Selector } from '../models/selectors/selector';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit, OnDestroy {

  selector: Selector = new Selector();
  subscription: Subscription;

  constructor(public globalsService: GlobalsService, private selectorService: SelectorService) {
    this.subscription = this.selectorService.getSelectors().subscribe(selectors => { this.selector = selectors; console.log(this.selector); });
  }

  ngOnInit() {
    this.selectorService.setSelectors();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
