import { Component, Input } from '@angular/core';

@Component({
    selector: 'ns-textfield, [ns-textfield]',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss'],
    moduleId: module.id
})
export class TextfieldComponent {
    @Input() public text: string;
    @Input() public hint: string;
    @Input() public editable: boolean = true;
}
