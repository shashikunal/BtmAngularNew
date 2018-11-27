import { Pipe , PipeTransform } from "@angular/core";
@Pipe({
    name : 'summary'
})
export class CustomSummary implements PipeTransform {
    transform(value:string , args?:any){
        if(!value){
            return null
        }else {
            value.substring(0 , 50);
        }
    }
}