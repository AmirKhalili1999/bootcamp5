import {Inject, Injectable, Injector, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, of, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {ApiService} from "../../services/api.service";
import {Admin} from "../../models/admin";
import {catchError, finalize, map, switchMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {GlobalVariableService} from "../../services/global-variable.service";

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  currentUser$: Observable<Admin>;
  currentUserSubject: BehaviorSubject<Admin>;
  public unsubscribe: Subscription[] = [];
  token: any = '';

  constructor(
    private router: Router,
    private apiService: ApiService,
    private http: HttpClient,
    private globalVariableService: GlobalVariableService,
    @Inject(Injector) private readonly injector: Injector
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentUserSubject = new BehaviorSubject<any>(undefined);
    this.currentUser$ = this.currentUserSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  get currentUserValue(): Admin {
    return this.currentUserSubject.value;
  }

  set currentUserValue(user: Admin) {
    this.currentUserSubject.next(user);
  }

  getAdmin(): Observable<Admin> {
    const auth = this.getAuthFromLocalStorage();
    this.currentUserSubject = new BehaviorSubject<Admin>(auth);
    console.log(auth)
    if (!auth) {
      // this.router.navigate(['/auth/login']);
      // @ts-ignore
      return of(undefined);
    }
    return this.http.get(this.globalVariableService.admin + '/get' + '/' + auth._id).pipe(
      // @ts-ignore
      map((user: any) => {
        if (user) {
          if (this.currentUserValue) {
            this.token = this.currentUserValue.token;
          } else {
            this.logout();
            window.location.reload();
          }
        } else {
          this.logout();
          window.location.reload();
        }
        return user;
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  // public methods
  login(loginForm: any): Observable<Admin> {
    this.isLoadingSubject.next(true);
    return this.http.post(this.globalVariableService.admin + '/login', loginForm, {headers: {'Anonymous': ''}}).pipe(
      map((admin: any) => {
        return this.setAuthFromLocalStorage(admin);
      }),
      switchMap((): any => {
        this.getAdmin();
        window.location.reload();
      }),
      // @ts-ignore
      catchError((err) => {
        if (err.status == 404) {
          console.error(err);
          return of(undefined);
        }
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  logout() {
    this.clearLocalStorage();
    this.router.navigate(['/auth/login']);
    this.currentUserValue._id = undefined;
    window.location.reload();
  }

  clearLocalStorage() {
    localStorage.removeItem('faradid-admin');
    localStorage.removeItem('faradid-adminId');
    localStorage.removeItem('faradid-token');
  }

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }

  public setAuthFromLocalStorage(auth: any): boolean {
    if (auth) {
      localStorage.setItem('faradid-admin', JSON.stringify(auth.admin));
      // @ts-ignore
      localStorage.setItem('faradid-adminId', auth.admin._id);

      // @ts-ignore
      localStorage.setItem('faradid-token', auth.token);
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

// private methods
  private getAuthFromLocalStorage(): Admin {
    try {
      console.log(localStorage.getItem('faradid-admin'))
      return JSON.parse(
        // @ts-ignore
        localStorage.getItem('faradid-admin')
      );
    } catch (error) {
      console.error(error);
      // @ts-ignore
      return undefined;
    }
  }
}
