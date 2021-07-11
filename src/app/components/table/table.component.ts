import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() action: string;
  @Input() headers: Array<string>;
  @Input() keysObj: Object;
  @Input() data: any;
  objectKeys = Object.keys;

  constructor() { }

  ngOnInit(): void {
  }
}

