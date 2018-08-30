import { Injectable } from '@angular/core';
import { Selector } from '../models/selectors/selector';
import { SelectorGroup } from '../models/selectors/selector-group';
import { SelectorItem } from '../models/selectors/selector-item';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  private subject = new Subject<any>();
  private selector: Selector;
  private selectorGroupA: SelectorGroup;
  private selectorGroupB: SelectorGroup;
  private selectorItemA: SelectorItem;
  private selectorItemB: SelectorItem;
  private selectorItemC: SelectorItem;
  private selectorItemD: SelectorItem;
  private selectorItemE: SelectorItem;
  private selectorItemF: SelectorItem;
  private selectorItemG: SelectorItem;
  private selectorItemH: SelectorItem;
  private selectorItemI: SelectorItem;

  constructor() {
    this.selectorItemA = {id: 0, subgroup: 'A', title: 'Ontwerpen', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 5, 10, 20, 25, 35, 60, 90], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemB = {id: 0, subgroup: 'B', title: 'Delegeren', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 5, 10, 20, 25, 35, 60, 90], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemC = {id: 0, subgroup: 'C', title: 'Uitvoeren', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 5, 10, 20, 25, 35, 60, 90], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemD = {id: 0, subgroup: 'D', title: 'Adviseren', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 5, 10, 20, 25, 35, 60, 90], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemE = {id: 0, subgroup: 'E', title: 'Assisteren', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 5, 10, 20, 25, 35, 60, 90], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemF = {id: 0, subgroup: 'A', title: 'Luisteren', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 3, 4, 6, 8, 13, 18, 24], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemG = {id: 0, subgroup: 'B', title: 'Spreken', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 3, 4, 6, 8, 13, 18, 24], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemH = {id: 0, subgroup: 'C', title: 'Voelen', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 3, 4, 6, 8, 13, 18, 24], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorItemI = {id: 0, subgroup: 'D', title: 'Uitstraling', values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], captions: ['', '', '', '', '', '', '', '', '', ''], costs: [0, 1, 2, 3, 4, 6, 8, 13, 18, 24], position: 0, useGroupPoints: true, useTotalPoints: true};
    this.selectorGroupA = {id: 0, title: 'Kwaliteiten', items: [this.selectorItemA, this.selectorItemB, this.selectorItemC, this.selectorItemD, this.selectorItemE], pointsAvailable: 125, pointsSpent: 0, positionX: 0, positionY: 0, style: 'generic', type: 'normal', value: 1, weight: 1 };
    this.selectorGroupB = {id: 0, title: 'Communicatie', items: [this.selectorItemF, this.selectorItemG, this.selectorItemH, this.selectorItemI], pointsAvailable: 36, pointsSpent: 0, positionX: 0, positionY: 0, style: 'generic', type: 'normal', value: 1, weight: 1 };
    this.selector = {id: 0, title: 'Selector', style: 'generic', type: 'normal', positionX: 0, positionY: 0, groups: [this.selectorGroupA, this.selectorGroupB], pointsAvailable: 120, pointsSpent: 0, value: 1, weight: 1 };
  }

  setSelectors() {
    this.subject.next(this.selector);
  }

  getSelectors(): Observable<any> {
    return this.subject.asObservable();
  }

}
