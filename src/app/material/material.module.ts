import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [ MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule ]

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ]
})
export class MaterialModule { }
