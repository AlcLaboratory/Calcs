import { Component, Output, EventEmitter } from '@angular/core';
import { DietsService } from '~/app/services/diets.service';
import { Observable } from 'rxjs';
import { Diet } from '~/app/interfaces/diet.interface';

@Component({
    selector: 'ns-diets-list',
    templateUrl: './diets-list.component.html',
    styleUrls: ['./diets-list.component.scss'],
    moduleId: module.id
})
export class DietsListComponent {
    public diets$: Observable<Diet[]> = this.dietsService.getDiets();
    @Output() public itemTapEvent: EventEmitter<Diet> = new EventEmitter<Diet>();
    @Output() public newButtonTapEvent: EventEmitter<null> = new EventEmitter<null>();

    public constructor(private dietsService: DietsService) {}

    public onDietTap(diet: Diet): void {
        this.itemTapEvent.emit(diet);
    }

    public onNewButtonTap(): void {
        this.newButtonTapEvent.emit(null);
    }

    public onRemoveButtonTap(diet: Diet): void {
        this.dietsService.removeDiet(diet);
    }
}
