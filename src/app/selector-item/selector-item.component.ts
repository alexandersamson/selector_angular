import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { SelectorItem} from '../models/selectors/selector-item';
import { GlobalsService } from '../services/globals.service';
import {SelectorService} from '../services/selector.service';
import {Selector} from '../models/selectors/selector';
import {Subscription} from 'rxjs';
import {SelectorGroup} from '../models/selectors/selector-group';

@Component({
  selector: 'app-selector-item',
  templateUrl: './selector-item.component.html',
  styleUrls: ['./selector-item.component.css']
})

export class SelectorItemComponent implements OnInit, OnDestroy {

  @Input() selectedItem: SelectorItem;
  @Input() selectedGroup: SelectorGroup = new SelectorGroup();


  constructor(public globalsService: GlobalsService) {
    console.log(this.selectedItem);

  }

  ngOnInit() {
   // this.selectorService.setSelectors();
  }

  ngOnDestroy() {
   // this.subscription.unsubscribe();
  }

  clickItem(positionClicked: number) {
    if (this.isEnoughGroupPoints(this.selectedItem, positionClicked) && this.isEnoughTotalPoints(this.selectedItem, positionClicked)) {
      if (this.selectedItem.useTotalPoints === true) {
        this.globalsService.setPoints(this.globalsService.getPointsLeft() + (this.selectedItem.costs[this.selectedItem.position] - this.selectedItem.costs[positionClicked]));
      }
      if (this.selectedItem.useGroupPoints === true) {
        this.setSelectedGroupPoints(this.getSelectedGroupPoints() + (this.selectedItem.costs[this.selectedItem.position] - this.selectedItem.costs[positionClicked]));
      }
      this.selectedItem.position = positionClicked;
    }
  }

  isEnoughGroupPoints(selectedItem: SelectorItem, positionClicked) {
    if (selectedItem.useGroupPoints === true) {
      return this.selectedGroup.pointsAvailable + (selectedItem.costs[selectedItem.position] - selectedItem.costs[positionClicked]) >= 0;
    }
    return true;
  }

  isEnoughTotalPoints(selectedItem: SelectorItem, positionClicked) {
    if (selectedItem.useTotalPoints === true) {
      return this.globalsService.getPointsLeft() + (selectedItem.costs[selectedItem.position] - selectedItem.costs[positionClicked]) >= 0;
    }
    return true;
  }

  setSelectedGroupPoints(newValue: number) {
    this.selectedGroup.pointsAvailable = newValue;
  }

  getSelectedGroupPoints() {
    return this.selectedGroup.pointsAvailable;
  }

  getLowestPointsAvailable() {
    if (this.selectedItem.useTotalPoints === true && this.selectedItem.useGroupPoints === true) {
      return Math.min(this.globalsService.getPointsLeft(), this.getSelectedGroupPoints());
    } else if (this.selectedItem.useTotalPoints === true) {
      return this.globalsService.getPointsLeft();
    } else if (this.selectedItem.useGroupPoints === true) {
      return this.getSelectedGroupPoints();
    } else {return 0;
    }
  }



}
