import { Component, Input } from '@angular/core';
import { Day } from '~/app/interfaces/day.interface';
import { KeyboardType } from 'tns-core-modules/ui/editable-text-base';
import { ModelUtil } from '~/app/utils/model.util';

@Component({
    selector: 'ns-day, [ns-day]',
    templateUrl: './day.component.html',
    styleUrls: ['./day.component.scss'],
    moduleId: module.id
})
export class DayComponent {
    @Input() public day: Day;
    @Input() public label: string;
    @Input() public editable: boolean;

    public readonly numberKeyboardType: KeyboardType = 'number';
    private readonly fieldClass: string = 'day-field';

    public onDietModelChange(value: string, fieldName: string): void {
        ModelUtil.onModelChange(this.day, value, fieldName);
    }
}
