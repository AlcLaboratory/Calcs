import { Component, OnInit } from '@angular/core';
import { Page, Color } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  moduleId: module.id
})
export class DashboardComponent implements OnInit {

    public constructor(private page: Page) {}

    public ngOnInit(): void {
        this.setPageConfig();
    }

    private setPageConfig(): void {
        this.page.actionBarHidden = true;
        this.page.androidStatusBarBackground = new Color('#3d7399');
    }
}
