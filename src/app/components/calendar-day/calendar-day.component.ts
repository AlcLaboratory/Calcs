import { Component, Input } from '@angular/core';
import { Day } from '~/app/interfaces/day.interface';

@Component({
    selector: 'ns-calendar-day, [ns-calendar-day]',
    templateUrl: './calendar-day.component.html',
    styleUrls: ['./calendar-day.component.scss'],
    moduleId: module.id
})
export class CalendarDayComponent {
    @Input() public day: Day;
    @Input() public label: string;
}
