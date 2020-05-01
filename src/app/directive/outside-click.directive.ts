import {Directive, ElementRef, HostListener, Input, TemplateRef} from '@angular/core';
import { OutsideClickInterface } from './OutsideClickInterface';

@Directive({
  selector: '[appOutsideClick]'
})

export class OutsideClickDirective {
  @Input() public closeTarget: OutsideClickInterface;
  @Input() public exclude: any;
  @Input() public disabled: boolean;

  constructor(public el: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  @HostListener('document:touchstart', ['$event.target'])
  public click(target): void {
   // debugger;
    if ((this.el.nativeElement !== target && !this.el.nativeElement.contains((target as any)))
      && (this.exclude === null || target !== this.exclude)
      && !this.disabled) {
      this.closeTarget.close();
    }
  }
}
