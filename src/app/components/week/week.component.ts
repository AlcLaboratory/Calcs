import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Week } from '~/app/interfaces/week.interface';
import { Days } from '~/app/enums/days.enum';

@Component({
    selector: 'ns-week, [ns-week]',
    templateUrl: './week.component.html',
    styleUrls: ['./week.component.scss'],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeekComponent {
    @Input() public week: Week;
    @Input() public editable: boolean;
    public readonly days = Days;
}
