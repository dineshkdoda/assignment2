import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-summary-pack',
  templateUrl: './summary-pack.component.html',
  styleUrls: ['./summary-pack.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class SummaryPackComponent implements OnInit {

  hoveredDate: NgbDate | null = null;

  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  constructor(private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) { 
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  ngOnInit(): void {
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';

  toggleFlip(id:number){
    switch(id){
      case 1:
        this.flip1 = 'active';
        this.flip2 = 'inactive';
        this.flip3 = 'inactive';
        break;
        case 2:
        this.flip1 = 'inactive';
        this.flip2 = 'active';
        this.flip3 = 'inactive';
        break;
        case 3:
        this.flip1 = 'inactive';
        this.flip2 = 'inactive';
        this.flip3 = 'active';
        break;
        default:
          this.flip1 = 'inactive';
        this.flip2 = 'inactive';
        this.flip3 = 'inactive';
        break;
    }

    
  }


  closeFlip(){
    this.flip1 = 'inactive';
    this.flip2 = 'inactive';
    this.flip3 = 'inactive';
  }

  


}