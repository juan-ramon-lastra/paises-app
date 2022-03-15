import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './components/por-capital/por-capital.component';
import { PorPaisComponent } from './components/por-pais/por-pais.component';
import { PorRegionComponent } from './components/por-region/por-region.component';
import { VerPaisComponent } from './components/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  exports: [
    PorCapitalComponent,
    PorPaisComponent,
    PorRegionComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PaisesModule { }
