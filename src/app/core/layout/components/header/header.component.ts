import {Component, HostListener, OnInit} from '@angular/core';
import {AuthService} from "../../../../modules/auth/auth.service";
import {GlobalVariableService} from "../../../../services/global-variable.service";
// @ts-ignore
import * as layout from 'src/assets/js/layout.js';
// @ts-ignore
import * as aside from 'src/assets/js/aside.js';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  layout = layout;

  constructor(
    public authService: AuthService,
    public globalVariableService: GlobalVariableService
  ) {
  }

  ngOnInit(): void {
    aside.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.layout.closeResponsiveAside(false);
  }
}
