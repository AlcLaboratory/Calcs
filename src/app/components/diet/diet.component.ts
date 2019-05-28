import { Component, Input } from '@angular/core';
import { Diet } from '~/app/interfaces/diet.interface';

@Component({
    selector: 'ns-diet',
    templateUrl: './diet.component.html',
    styleUrls: ['./diet.component.scss'],
    moduleId: module.id
})
export class DietComponent {
    @Input() public diet: Diet;
    @Input() public editable: boolean;
}
