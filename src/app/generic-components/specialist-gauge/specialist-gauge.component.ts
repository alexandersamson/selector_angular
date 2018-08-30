import {Component, Input, OnInit} from '@angular/core';
import {SelectorGroup} from '../../models/selectors/selector-group';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-specialist-gauge',
  templateUrl: './specialist-gauge.component.html',
  styleUrls: ['../gauge-styles/gauge-styles.component.css']
})
export class SpecialistGaugeComponent implements OnInit {

  gaugeWidth = 200;
  @Input() selectedGroup: SelectorGroup = new SelectorGroup();
  @Input() gaugeTitle = 'title';

  constructor() { }

  ngOnInit() {
  }

  getGaugePosition() {
    let minPoints = 999999;
    let maxPoints = 0;
    let totalMin = 999999;
    let totalMax = 0;
    for (const item of this.selectedGroup.items) {
      if (item.costs[item.position] < minPoints) {minPoints = item.costs[item.position]; }
      if (item.costs[item.position] > maxPoints) {maxPoints = item.costs[item.position]; }
      if (Math.min(...item.costs) < totalMin) {totalMin = Math.min(...item.costs); }
      if (Math.max(...item.costs) > totalMax) {totalMax = Math.max(...item.costs); }
    }
    console.log('new');
    console.log(maxPoints);
    console.log(minPoints);
    return ((this.gaugeWidth / (totalMax - totalMin)) * (maxPoints - minPoints));
  }
}
