import { Component, Input } from '@angular/core';
import { Day } from '~/app/interfaces/day.interface';

@Component({
    selector: 'ns-day, [ns-day]',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.scss'],
    moduleId: module.id
})
export class DayComponent {
    @Input() public day: Day;
    @Input() public label: string;
    @Input() public isEditable: boolean;

    private readonly fieldClass: string = 'day-field';
}
