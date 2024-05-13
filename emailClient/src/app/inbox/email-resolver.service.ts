import { EmailService } from './email.service';
import {
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Email } from './email';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmailResolverService {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve: ResolveFn<Email | null> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Email | null> => {
    const { id } = route.params;
    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/not-found');

        return EMPTY;
      })
    );
  };
}
