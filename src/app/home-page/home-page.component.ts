import { Component, OnInit, Pipe } from '@angular/core';
import { Observable, Subscription, bindNodeCallback, concat, BehaviorSubject, asyncScheduler } from 'rxjs';
import { range } from 'rxjs';
import { from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { Subject } from 'rxjs'
import { bindCallback } from 'rxjs';
import * as Rx from 'rxjs/Rx';
import { take, concatMap, switchMap, observeOn } from 'rxjs/operators';
import { empty, interval, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { iif } from 'rxjs';
import { pluck } from 'rxjs/operators';

// import * as fs from 'fs';
// import * as Scheduler  from 'rxjs/Scheduler';
import { Scheduler } from 'rxjs';
// import { take } from 'rxjs-compat/operator/take';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  data: Observable<any>;
  number: Observable<number>;
  subscription: Subscription;
  constructor() { }


  ngOnInit() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 3000);

      setTimeout(() => {
        observer.next(2);
      }, 6000);

      setTimeout(() => {
        observer.error('Error thrown here');
      }, 9000);

      setTimeout(() => {
        observer.complete();
      }, 9000);
      console.log('completed');
    });

    let subscriber1 = this.data.subscribe(value => {
      console.log('subscriber1 : ', value);
      // subscriber1.unsubscribe();

    }, error => {
      console.log(error);
    });
    let subscriber2 = this.data.subscribe(value => {
      console.log('subscriber2 : ', value);
      // subscriber2.unsubscribe();
    }, error => {
      console.log(error);
    });

    var mynumbers = range(11, 12);
    this.subscription = mynumbers.subscribe(
      (n) => { console.log('---', n); },
      (error) => { console.log('Error: ', error); },
      () => { console.log('completed'); }
    )
    let array = ["data1", "data2", "data3", "data4", "data5"];
    var data = from(array);
    this.subscription = data.subscribe(
      (n) => { console.log('From---', n); },
      (error) => { console.log('Error: ', error); },
      () => { console.log('completed'); }
    )
    const clicks = fromEvent(document, 'click');
    clicks.subscribe(x => console.log('MouseClick--: ', x));

    // fromEvent(document, 'click')
    //   .pipe(scan(count => count + 1, 0))
    //   .subscribe(count => console.log(`Clicked ${count} times`));

    /*Subject */
    const subject = new Subject<number>();

    subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    subject.subscribe({
      next: (v) => console.log(`observerC: ${v}`)
    });

    const observable = from([1, 2, 3]);

    observable.subscribe(subject);

    function iCallMyCallbackSynchronously(cb) {
      cb();
    }
    const boundSyncFn = bindCallback(iCallMyCallbackSynchronously);
    const boundAsyncFn = bindCallback(iCallMyCallbackSynchronously, null, Rx.Scheduler.async);

    boundSyncFn().subscribe(() => console.log('I was sync!'));
    boundAsyncFn().subscribe(() => console.log('I was async!'));
    console.log('This happened...');


    //   function someFunction((err, a, b) => {
    //     console.log(err); // null
    //     console.log(a); // 5
    //     console.log(b); // "some string"
    //   })
    //   const boundSomeFunction = bindNodeCallback(someFunction);
    //   boundSomeFunction()
    //   .subscribe(value => {
    //     console.log(value); // [5, "some string"]
    //   });
    // }


    const interval$ = interval(1000);
    let va = interval$.pipe(
      mergeMap(x => x % 4 === 1 ? of('a', 'b', 'c') : empty()),
    )
      .subscribe(x => console.log('mergeMap opeartor', x));
    va.unsubscribe();// To execute this function please remove comments.

    const waitTime = interval(2000);
    const numbers = waitTime.pipe(take(10));
    numbers.subscribe(x => console.log('Number is: ', x));


    let subscribeToFirst;
    const firstOrSecond = iif(
      () => subscribeToFirst,
      of('first'),
      of('second'),
    );

    subscribeToFirst = true;
    firstOrSecond.subscribe(value => console.log(value));
    subscribeToFirst = false;
    firstOrSecond.subscribe(value => console.log(value));


    const source = from([
      { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
      //will return undefined when no job is found
      { name: 'Sarah', age: 35, job: { title: 'Developer', language: 'JavaScript' } }
    ]);
    //grab title property under job
    const example = source.pipe(pluck('job', 'language'));
    //output: "Developer" , undefined
    const subscribe = example.subscribe(val => console.log(val));

    const timer = interval(1000).pipe(take(4));
    const sequence = range(1, 10);
    const result = concat(timer, sequence);
    result.subscribe(x => console.log('Concat works: ', x));

    //Concat Map
    const clicks1 = fromEvent(document, 'click');
    const result1 = clicks1.pipe(
      concatMap(cc => interval(1000).pipe(take(4)))
    );
    result1.subscribe(x => console.log('concatMap : ', x));


    const switched = of(1, 2, 3).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => console.log('Switch Map : ', x));

    const clicks2 = fromEvent(document, 'click');
    const result2 = clicks2.pipe(switchMap((ev) => interval(1000)));
    const result3 = result2.pipe(take(10));
    result3.subscribe(x => console.log('switch Map using fromEvent : ', x));


    const subject1 = new BehaviorSubject(123);
    console.log('-----Behavior Subject------');
    subject1.subscribe(console.log);
    subject1.subscribe(console.log);
    subject1.next(456);
    subject1.subscribe(console.log);
    subject1.next(789);
    console.log('------------------------------');
  
  
  
var observable1 = new Observable((proxyObserver) => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(
  observeOn(asyncScheduler)
);

var finalObserver = {
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
     console.log('done');
  }
};

console.log('just before subscribe');
observable1.subscribe(finalObserver);
console.log('just after subscribe');
  }
}

