import { Directive,ElementRef,Input,Renderer,HostListener } from '@angular/core';

@Directive(
    {selector : '[showMore]'}
)
export class ShowMore{
    constructor(public ele : ElementRef,public render : Renderer){}

    @Input() showMore : boolean;
    //@Input() textContent : string;
    @HostListener('click',['$event'])

    onClick() {
        if(!this.showMore){            
            this.showMore = true;
            this.ele.nativeElement.innerHTML = 'show less'
            this.render.setElementStyle(this.ele.nativeElement.parentNode, 'height', 'auto');
            this.render.setElementStyle(this.ele.nativeElement,'padding-top','0px');
        }else{
            this.showMore = false;
            this.ele.nativeElement.innerHTML = 'show more'
            this.render.setElementStyle(this.ele.nativeElement.parentNode, 'height','65px');
            this.render.setElementStyle(this.ele.nativeElement,'padding-top','5px');
        }
           
    }
}