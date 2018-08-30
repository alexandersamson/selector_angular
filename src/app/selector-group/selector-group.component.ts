import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SelectorGroup} from '../models/selectors/selector-group';
import {Selector} from '../models/selectors/selector';
import {Subscription} from 'rxjs';
import {GlobalsService} from '../services/globals.service';
import {SelectorService} from '../services/selector.service';


@Component({
  selector: 'app-selector-group',
  templateUrl: './selector-group.component.html',
  styleUrls: ['./selector-group.component.css']
})
export class SelectorGroupComponent implements OnInit, OnDestroy {

  @Input() selectedGroup: SelectorGroup = new SelectorGroup();
  subscription: Subscription;

  constructor(public globalsService: GlobalsService, private selectorService: SelectorService) {
    // this.subscription = this.selectorService.getSelectors().subscribe(selector => { this.group = selector.groups[this.groupIndex]; });
  }

  ngOnInit() {
   // this.selectorService.setSelectors();
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

}
