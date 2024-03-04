import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {PrimeNGConfig} from "primeng/api";
import {Column} from "../../../models/column.model";

/**
 * @author Amir Hosein Khalilian
 * Project: faradid
 * @version 0.0.1
 * @since 2023/09/21
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() loading: boolean = true;
  @Input() noDataText: string = '';
  @Input() tableName: string = '';
  @Input() addBtn: boolean = false;
  @Input() search: boolean = false;
  @Input() addBtnText: string = '';
  @Output() clickRow: EventEmitter<any> = new EventEmitter<any>();
  @Output() clickBtn: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchData: EventEmitter<any> = new EventEmitter<any>();
  @Input() columns: Column[] = [];
  @ViewChild('dt') table: Table;

  constructor(
    private primengConfig: PrimeNGConfig
  ) {
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  rowClick(column: any) {
    this.clickRow.emit(column);
  }

  btnClick() {
    this.clickBtn.emit();
  }

  searchKey(data: any) {
    this.searchData.emit((data && data.target && data.target.value) ? data.target.value : '');
  }
}
