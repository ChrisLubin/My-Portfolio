import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChangeLog } from '../models/changeLog.interface';
import { fadeInOut } from 'src/animations/fadeInOut.animation';

@Component({
    selector: 'portfolio-changelog',
    templateUrl: './changelog.component.html',
    animations: [
        fadeInOut
    ]
})

export class PortfolioChangelogComponent {
    public activeChange: ChangeLog;
    @Input() public change: ChangeLog;
    @Output() public toggleActiveChange: EventEmitter<ChangeLog> = new EventEmitter();

    public toggleChange(change: ChangeLog): void {
        this.toggleActiveChange.emit(change);
    }
}