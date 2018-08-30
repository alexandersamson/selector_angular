import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {
  private pointsLeft = 161;

  constructor() { }

  getPointsLeft() {
    return this.pointsLeft;
  }

  setPoints(newValue: number) {
    this.pointsLeft = newValue;
  }

}
