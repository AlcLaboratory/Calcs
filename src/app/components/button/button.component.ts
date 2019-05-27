import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'ns-button, [ns-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public text: string;
}
