import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ChildEagerComponent } from "./child-eager.component";

export const routes: Routes = [
  {
    path: 'child-lazy',
    loadComponent: () => import('./child-lazy.component').then(x => x.ChildLazyComponent)
  },
  {
    path: 'child-lazy-2',
    loadComponent: () => import('./child-lazy-2.component').then(x => x.ChildLazy2Component)
  },
  {
    path: 'child-eager',
    component: ChildEagerComponent
  }
];

