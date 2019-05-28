import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KeyboardType } from 'tns-core-modules/ui/editable-text-base';

@Component({
    selector: 'ns-textfield, [ns-textfield]',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss'],
    moduleId: module.id
})
export class TextfieldComponent {
    @Input() public model: string;
    @Input() public hint: string;
    @Input() public editable: boolean = true;
    @Input() public keyboardType: KeyboardType;
    @Output() public modelChangeEvent: EventEmitter<string> = new EventEmitter<string>();

    public onModelChange(value: string): void {
        this.modelChangeEvent.emit(value);
    }
}
