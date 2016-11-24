import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate {

    constructor(private _router : Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            alert('Invalid product id');    // should route to an error page here 
            this._router.navigate(['/products']);   // start a new navigation to redirect to list page

            return false;
        }

        return true;
    }
}