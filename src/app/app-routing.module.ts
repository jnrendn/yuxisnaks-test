import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { UserComponent }    from './user/user.component';
import { UserRegComponent } from './user/user-reg.component';

const routes: Routes = [
    { path:'', redirectTo: '/product', pathMatch: 'full'},
    { path: 'product', component: ProductComponent },
    { path: 'user', component: UserComponent},
    { path: 'reg', component: UserRegComponent} 
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }