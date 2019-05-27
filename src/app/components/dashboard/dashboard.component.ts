import { Component, OnInit } from '@angular/core';
import { Page, Color } from 'tns-core-modules/ui/page/page';
import { Diet } from '~/app/interfaces/diet.interface';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {
    public dietToEdit: Diet;

    public constructor(private page: Page) {}

    public ngOnInit(): void {
        this.setPageConfig();
    }

    public onDietItemTap(diet: Diet): void {
        this.dietToEdit = diet;
    }

    private setPageConfig(): void {
        this.page.actionBarHidden = true;
        this.page.androidStatusBarBackground = new Color('#3d7399');
    }
}
