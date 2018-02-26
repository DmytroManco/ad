import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
    @Input() public type: string = 'submit';
    @Input() public className: string = '';
    @Input() public disabled: boolean = false;

    @Output() public onclickHandler: EventEmitter<Event> = new EventEmitter<Event>();

    public clickHandler($event: Event): void {
        this.onclickHandler.emit($event);
    }
}
