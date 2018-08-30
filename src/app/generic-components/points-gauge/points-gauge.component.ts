import {Component, Input, OnInit} from '@angular/core';
import {SelectorGroup} from '../../models/selectors/selector-group';
import {forEach} from '@angular/router/src/utils/collection';
import {GaugeColorset} from '../../models/gauges/gauge-colorset';
import {GaugeColor} from '../../models/gauges/gauge-color';

@Component({
  selector: 'app-points-gauge',
  templateUrl: './points-gauge.component.html',
  styleUrls: ['../gauge-styles/gauge-styles.component.css']
})
export class PointsGaugeComponent implements OnInit {

  gaugeWidth = 200;
  gaugeColorSet = new GaugeColorset();
  gaugeColorNone = new GaugeColor();
  gaugeColorLowBad = new GaugeColor();
  gaugeColorLowWarn = new GaugeColor();
  gaugeColorNormal = new GaugeColor();
  gaugeColorHighWarn = new GaugeColor();
  gaugeColorHighBad = new GaugeColor();

  @Input() selectedGroup: SelectorGroup = new SelectorGroup();
  @Input() gaugeTitle = 'title';

  constructor() {
    this.gaugeColorNone = {color: 'black', valueLessThan: 1, text: 'Not graded yet'};
    this.gaugeColorLowBad = {color: 'red', valueLessThan: 41, text: 'Way too low'};
    this.gaugeColorLowWarn = {color: 'orange', valueLessThan: 101, text: 'Little too low'};
    this.gaugeColorNormal = {color: 'darkgreen', valueLessThan: 171, text: 'Seems okay'};
    this.gaugeColorHighWarn = {color: 'orange', valueLessThan: 186, text: 'Little too high'};
    this.gaugeColorHighBad = {color: 'red', valueLessThan: 201, text: 'Way too high'};
    this.gaugeColorSet = {id: 0, title: 'Confidence', colors: [this.gaugeColorNone, this.gaugeColorLowBad, this.gaugeColorLowWarn, this.gaugeColorNormal, this.gaugeColorHighWarn, this.gaugeColorHighBad]};
  }

  ngOnInit() {
  }

  getGaugePosition() {
    let totalPoints = this.selectedGroup.pointsAvailable;
    let spentPoints = 0;
    for (const item of this.selectedGroup.items) {
      spentPoints += item.costs[item.position];
    }
    totalPoints += spentPoints;
    return (this.gaugeWidth / totalPoints) * spentPoints;
  }

  getGaugeColor() {
    for (const value of this.gaugeColorSet.colors) {
      if (this.getGaugePosition() < value.valueLessThan) {
        return value.color;
      }
    }
  }

  getGaugeText() {
    for (const value of this.gaugeColorSet.colors) {
      if (this.getGaugePosition() < value.valueLessThan) {
        return value.text;
      }
    }
  }

}
