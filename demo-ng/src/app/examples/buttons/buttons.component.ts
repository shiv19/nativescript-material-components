import { Component, OnInit } from '@angular/core';
import { EventData } from 'tns-core-modules/data/observable';

@Component({
    selector: 'ns-buttons',
    templateUrl: './buttons.component.html',
    moduleId: module.id
})
export class ButtonsComponent implements OnInit {
    ngOnInit() {}

    onTap(args: EventData) {
        console.log('Button clicked', args.eventName);
    }
}
