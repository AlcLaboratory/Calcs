import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ns-button, [ns-button]',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    moduleId: module.id,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
    @Input() public text: string;
    @Output() public tapEvent: EventEmitter<null> = new EventEmitter<null>();

    public onTapEvent(): void {
        this.tapEvent.emit(null);
    }
}
