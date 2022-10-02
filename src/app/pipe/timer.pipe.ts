import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  constructor() { }

  transform(value: any, args?: any): string {


    let minute = Math.floor(+value / 60).toString();
    let second = Math.floor(+value % 60).toString();

    if (+minute < 10) minute = "0" + minute;
    if (+second < 10) second = "0" + second;

    return minute + ":" + second;

  }
}

