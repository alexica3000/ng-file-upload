import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CopyTextComponent} from './components/copy-text/copy-text.component';
import {FileUploadComponent} from './components/file-upload/file-upload.component';

const routes: Routes = [
  {
    path: '',
    component: FileUploadComponent,
    pathMatch: 'full'
  },
  {
    path: 'clipboard',
    component: CopyTextComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
