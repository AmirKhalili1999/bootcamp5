import {Component, OnInit} from '@angular/core';
import {GlobalVariableService} from "../../../../services/global-variable.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    public globalVariableService: GlobalVariableService
  ) {
  }

  ngOnInit(): void {
  }

  goToLink(url: any) {
    window.open(url, '_blank');
  }
}
