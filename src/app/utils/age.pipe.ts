import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
  
  
})


export class AgePipe implements PipeTransform {

  
  
  transform(value: Date, capitalize: boolean = true, withEmojis: boolean = false): any {
 
    
    const currentYear = new Date().getFullYear();
    const dobYear = value.getFullYear();    
     const age = currentYear - dobYear;

     let text = ' years old';
     const emojis = ' 🍰🥳';
     withEmojis=true
    if (withEmojis) {
      text += emojis;
   }

   if (capitalize) {
      text = text.toUpperCase();
   } 

   return age + text;

    
  }

}
