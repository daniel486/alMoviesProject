import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round'
})
/**
 * This pipe is for get the round of a decimal number.
 */
export class RoundPipe implements PipeTransform {

  transform(value: number): number {
    return Math.round(value);
  }

}
