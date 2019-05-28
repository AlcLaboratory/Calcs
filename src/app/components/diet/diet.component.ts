import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Diet } from '~/app/interfaces/diet.interface';
import { ModelUtil } from '~/app/utils/model.util';
import { DietsService } from '~/app/services/diets.service';

@Component({
    selector: 'ns-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.scss'],
    moduleId: module.id
})
export class DietComponent {
    @Input() public diet: Diet;
    @Input() public editable: boolean;
    @Output() public dietSavedEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    public constructor(private dietsSerivce: DietsService) {}

    public onSaveButtonTap(): void {
        this.dietsSerivce.addDiet(this.diet);
        this.dietSavedEvent.emit(true);
    }

    public onModelChange(value: string, fieldName: string): void {
        ModelUtil.onModelChange(this.diet, value, fieldName);
    }
}
