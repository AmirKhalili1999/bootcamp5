import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {GlobalVariableService} from "../../services/global-variable.service";


@Injectable({
  providedIn: 'root',
})

export class LayoutService {

  constructor(
    private gvs: GlobalVariableService
  ) {
  }

  private _layoutConfigs$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  // getters and setters
  get layoutConfigs$() {
    return this._layoutConfigs$;
  }

  set layoutConfigs$(value: any) {
    this._layoutConfigs$ = value;
  }
}
