import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})

export class MainNavComponent 
{
  // Set this to true to always display Side Drawer (until observer shuts it off) else set to false to always display Menu with slide out Side Drawer
  enableSidedrawer: boolean = false;

  // Observable to control display of Menu and Side Drawer based on responsive display
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) 
  {

  }
}
