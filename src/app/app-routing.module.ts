import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./sections/main/main.module').then(m => m.MainModule) },
  { path: 'main', loadChildren: () => import('./sections/main/main.module').then(m => m.MainModule) },
  { path: 'about', loadChildren: () => import('./sections/about/about.module').then(m => m.AboutModule) },
  { path: 'simulator', loadChildren: () => import('./sections/simulator/simulator.module').then(m => m.SimulatorModule) },
  { path: 'contact', loadChildren: () => import('./sections/contact/contact.module').then(m => m.ContactModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
