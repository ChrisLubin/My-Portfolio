import { Component, Input } from '@angular/core';
import { Projects } from '../models/projects.interface';

@Component({
    selector: 'portfolio-project',
    templateUrl: './project.component.html'
})

export class PortfolioProjectComponent {
    @Input() public project: Projects;
}