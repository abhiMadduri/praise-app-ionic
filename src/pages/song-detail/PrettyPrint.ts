import { Pipe, Injectable } from '@angular/core'

@Pipe({
  name: 'prettyPrint'
})
@Injectable()
export class PrettyPrint {

   transform(str: string) {
       console.log('In transform: ' + str);
        let replaced = str.replace(/(\r\n|\r|\n)/g, '<br/>');
        let array = replaced.split("<br/>");

        for(let el of array) {
            if(!!el === false) {
                array.splice(array.indexOf(el), 1);
            }
        }

        return "<p>" + array.join("</p><p>") + "</p>";
    }
}