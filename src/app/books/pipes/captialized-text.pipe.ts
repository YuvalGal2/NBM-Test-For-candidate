import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';
import { WrappedNodeExpr } from '../../../../node_modules/@angular/compiler';

@Pipe({
  name: 'captializedText'
})
export class CaptializedTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    var pattern = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi;
    var fortmatedTitle = value.replace(pattern, '').toLowerCase().split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return fortmatedTitle;
  }

}
