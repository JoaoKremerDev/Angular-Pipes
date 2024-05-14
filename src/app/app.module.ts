import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FormsModule } from '@angular/forms';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

@NgModule({
  declarations: [AppComponent, ExemplosPipesComponent, CamelCasePipe, FiltroArrayPipe, FiltroArrayImpuroPipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
