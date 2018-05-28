import { Directive, Input, OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appFragment]'
})
export class FragmentDirective implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  @Input() appFragment: string;
  constructor(
    private route: ActivatedRoute,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // this.scroll(this.route.snapshot.fragment);
    this.route.fragment.pipe(takeUntil(this.ngUnsubscribe)).subscribe(val => {
      this.scroll(val);
    });
    setTimeout(() => {
      this.scroll(this.route.snapshot.fragment);
    }, 500);

  }


  scroll(val) {
    if (val === this.appFragment) {
      this.elementRef.nativeElement.scrollIntoView({block: 'center', inline: 'center', behavior: 'smooth'});
      this.renderer.addClass(this.elementRef.nativeElement, 'active-fragment');
      setTimeout(() => {
        this.renderer.removeClass(this.elementRef.nativeElement, 'active-fragment');
      }, 1500);
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
