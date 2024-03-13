import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetName]',
})
export class SetNameDirective implements OnInit {
  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.value = 'TestUser';
      console.log('Set Name Directive Completed');
    }, 100);
  }
}
