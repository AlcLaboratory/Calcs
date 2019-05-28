import { Component, OnInit } from '@angular/core';
import { Page, Color } from 'tns-core-modules/ui/page/page';
import { SelectedIndexChangedEventData } from 'tns-core-modules/ui/tab-view';
import { Diet } from '~/app/interfaces/diet.interface';
import { DietsService } from '~/app/services/diets.service';

@Component({
    selector: 'ns-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    moduleId: module.id
})
export class DashboardComponent implements OnInit {
    public dietToEdit: Diet;

    public constructor(
        private page: Page,
        private dietsService: DietsService) { }

    public ngOnInit(): void {
        this.setPageConfig();
    }

    public onDietItemTap(diet: Diet): void {
        this.dietToEdit = diet;
    }

    public onNewDietButtonTap(): void {
        this.dietToEdit = this.dietsService.createEmptyDiet();
    }

    public onSelectedIndexChanged(index: SelectedIndexChangedEventData): void {
        const dietsListIndex = 1;
        if (index.newIndex === dietsListIndex) {
            this.dietToEdit = null;
        }
    }

    private setPageConfig(): void {
        this.page.actionBarHidden = true;
        this.page.androidStatusBarBackground = new Color('#3d7399');
    }
}
