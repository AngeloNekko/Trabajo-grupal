import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FrasesPipe implements PipeTransform {

  transform(value: any, arg: any[]): any {
    const resultPost=[];
    for (const item of value){
      if(item.quote.indexOf(arg)>-1){
        resultPost.push(item)
      }
    }
    return resultPost;
  }

}
