import { Routes } from '@angular/router';
import { DocumentComponent } from './components/document/document.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  {
    path: 'document/:id',
    component: DocumentComponent,
  },
];
