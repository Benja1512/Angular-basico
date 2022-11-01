import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';



@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent,
        
    ],
    exports: [
        ListadoComponent
    ],

    imports: [
        //CommonModule

    ],
    


})


export class HeroesModule {}