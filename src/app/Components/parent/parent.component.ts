import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
//  changeDetection :ChangeDetectionStrategy.OnPush    // Angular can't detect changes
  // changeDetection :ChangeDetectionStrategy.Default  // By default change detection strategy is Default
})
export class ParentComponent implements OnInit {

  parentMsg: any ;
  constructor(private cdr :ChangeDetectorRef) { 
    this.cdr.detach();  // it is used to detach the component, but while using detach() and detectChanges() ,it works as On Push 
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.parentMsg ="Welcome from Parent Component ";
     // this.cdr.markForCheck();   // it used to informs the angular compiler explicitly, that change happens here check it while using OnPush
     this.cdr.detectChanges();
      
    }, 2000);
  }


  triggerParent(){
    console.log("Parent Triggered");
    
  }

}
