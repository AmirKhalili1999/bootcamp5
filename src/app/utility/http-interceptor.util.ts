import {Injectable} from "@angular/core";
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {AuthService} from "../modules/auth/auth.service";
import {catchError, finalize} from "rxjs/operators";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable()

export class HttpInterceptorUtil implements HttpInterceptor {
  token: any;

  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    // this.admin = this.authService.currentUserValue;
    this.token = localStorage.getItem('faradid-token')

  }

  returnFinal(next: any, req: any) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('This is client side error');
          errorMsg = `Error: ${error.error.message}`;
        } else {
          console.log('This is server side error');
          errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        if (error.status == 500) {
          this.router.navigate(['/error/500']).then();
        }
        if (error.status == 401) {
          this.authService.logout();
          this.router.navigate(['/auth/login']).then();
          this.toastrService.warning('توکن شما منقضی شده است');
        }
        if (error.status != 200) {
          this.toastrService.warning(error.error.message ? error.error.message : 'خطایی رخ داد');
        }
        return throwError(errorMsg);
      }),
      finalize(() => ''),
    );
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.headers.get(`Anonymous`) === ``) {
      const newHeaders = req.headers.delete(`Anonymous`);
      const newRequest = req.clone({headers: newHeaders});
      return this.returnFinal(next, newRequest);
    } else {
      if (localStorage.getItem('nobaton-token')) {
        this.token = localStorage.getItem('nobaton-token')
      }
      if (this.token) {
        // @ts-ignore
        const clonedRequest = req.clone({headers: req.headers.append('X-Auth-Token', `${this.token}`)});
        return this.returnFinal(next, clonedRequest);
      }
      return this.returnFinal(next, req);
    }
  }

}
