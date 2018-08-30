import {SelectorItem} from './selector-item';

export class SelectorGroup {
  id: number;
  title: string;
  type: string;
  style: string;
  positionX: number;
  positionY: number;
  items: SelectorItem[];
  pointsAvailable: number;
  pointsSpent: number;
  value: number;
  weight: number;
}
