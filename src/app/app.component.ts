import { Component, HostListener, OnInit, OnDestroy} from '@angular/core';
import { fromEvent, merge, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'straivTasks';

  //Task Nr.2
  //When user has made changes, execute a function before leaving and ask if they want to leave the site
  //Can't use alert or custom message during beforeunload

  // @HostListener('window:beforeunload', ['$event'])
  //  beforeUnloadHandler(event: Event) {
  //     this.customFunction()
  //     return false 
  //  } 

  // customFunction() {
  //   console.log("hello, this text is fired by a custom function")
  // }


  //Tast Nr.4 
  //Check if online or offline
  networkStatus: boolean = false;
  networkStatus$: Subscription = Subscription.EMPTY;

  checkNetworkStatus() {
    this.networkStatus = navigator.onLine;
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine)).subscribe(status => {
        console.log('status', status);
        this.networkStatus = status;
      });
  }

  ngOnInit(): void {
    this.checkNetworkStatus();
  }

  ngOnDestroy(): void {
    this.networkStatus$.unsubscribe();
  }


  

}
