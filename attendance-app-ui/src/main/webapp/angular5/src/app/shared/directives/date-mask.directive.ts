import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
    selector: '[date-mask]'
})
export class DateMaskDirective{

    constructor(private _el: ElementRef){}

    @HostListener('keyup') onkeyup(){
        let value: string = this._el.nativeElement.value;
        if(value){
            let length = value.length;
            if((length==2) || (length==5)){
                this._el.nativeElement.value = value+"/";
            }
        }
    }

}