import {SelectorGroup} from './selector-group';

export class Selector {
  id: number;
  title: string;
  type: string;
  style: string;
  positionX: number;
  positionY: number;
  groups: SelectorGroup[];
  pointsAvailable: number;
  pointsSpent: number;
  value: number;
  weight: number;

}
