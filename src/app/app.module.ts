import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

import { AppRoutingModule } from './app-routing.module';
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DietsListComponent } from './components/diets-list/diets-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DayComponent } from './components/day/day.component';
import { ButtonComponent } from './components/button/button.component';
import { DietComponent } from './components/diet/diet.component';
import { WeekComponent } from './components/week/week.component';

import { HttpRequestService } from './services/http-request.service';
import { MyFitnessPalService } from './services/my-fitness-pal.service';
import { DietsService } from './services/diets.service';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        AppRoutingModule,
        TNSCheckBoxModule
    ],
    declarations: [
        AppComponent,
        CalendarComponent,
        DietsListComponent,
        SettingsComponent,
        DashboardComponent,
        DayComponent,
        ButtonComponent,
        DietComponent,
        WeekComponent
    ],
    providers: [
        HttpRequestService,
        MyFitnessPalService,
        DietsService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {}
