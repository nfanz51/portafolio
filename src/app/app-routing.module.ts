import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const app_routes: Routes = [
    { path: '', component: PortafolioComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent, pathMatch: 'full' },
    { path: 'item/:id', component: ItemComponent, pathMatch: 'full' },
    { path: 'search/:termino', component: SearchComponent, pathMatch: 'full' },
    { path: '**', pathMatch: 'full', redirectTo: '' }
    ];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






