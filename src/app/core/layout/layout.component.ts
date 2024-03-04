import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GlobalVariableService} from "../../services/global-variable.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    public gvs: GlobalVariableService,
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }
}
