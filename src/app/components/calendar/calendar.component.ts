import { Component } from '@angular/core';
import { Week } from '~/app/interfaces/week.interface';
import { map } from 'rxjs/operators';
import { MyFitnessPalService } from '~/app/services/my-fitness-pal.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'ns-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    moduleId: module.id
})
export class CalendarComponent {
    private subscription: Subscription = new Subscription();
    public selectedWeek: Week;

    public constructor(private myFitnessPalService: MyFitnessPalService) {}

    public ngOnInit(): void {
        this.subscribeSelectedWeek();
        this.setInitialWeek();
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private subscribeSelectedWeek(): void {
        this.subscription.add(
            this.myFitnessPalService.getWeek().pipe(map(week => this.selectedWeek = week)).subscribe());
    }

    private setInitialWeek(): void {
        this.myFitnessPalService.setWeek(0);
    }
}
