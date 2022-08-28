import { AbstractControl, ValidationErrors } from "@angular/forms";

export class HomePageValidators {
    static NoSpace(control: AbstractControl) : ValidationErrors | null {
         if ((control.value as string).indexOf(' ') >= 0)
         {
            debugger
             return { NOSpace : true};
         }
            // return null;
         // return { minLenght : 
         //     {requiredLength : 10
         //     actualLength: control.value.length
         // } }
     }
    }