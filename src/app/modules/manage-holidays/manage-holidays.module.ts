import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HolidaysFormComponent } from './holidays-form/holidays-form.component';
import { HolidaysViewComponent } from './holidays-view/holidays-view.component';
import { ManageHolidaysRoutingModule } from './manage-holidays-routing.module';
console.log("Holidays");

@NgModule({
  declarations: [
    HolidaysViewComponent,
    HolidaysFormComponent
  ],
  imports: [
    CommonModule,
    ManageHolidaysRoutingModule,
    MatButtonModule,
    MatChipsModule,
    MatTooltipModule,
    MatDialogModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ManageHolidaysModule { }
