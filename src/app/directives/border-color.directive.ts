import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {
  clickNumber = 0;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log(this.elementRef.nativeElement)
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement.children[0], 'color', 'white');
    this.renderer.setStyle(this.elementRef.nativeElement.children[1], 'background-color', 'pink');
  }

  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('click') onClick() {
    this.clickNumber % 2 === 0 ?
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow')
      : this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.clickNumber++;
  }


}
