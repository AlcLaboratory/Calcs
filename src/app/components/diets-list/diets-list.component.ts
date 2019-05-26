import { Component } from '@angular/core';
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

    public constructor(private dietsService: DietsService) {}
}
