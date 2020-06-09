import { Component, OnInit } from '@angular/core';
import { fadeInOut } from '../animations/fadeInOut.animation';
import { Portfolio, PortfolioData } from 'src/models/datasets/portfolio';
import { ChangeLog } from 'src/models/changeLog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOut]
})

export class AppComponent implements OnInit {
  public portfolio: Portfolio;
  public logOpen: boolean = false;
  public projectOpen: boolean = false;
  public bioOpen: boolean = false;

  public ngOnInit(): void {
    this.portfolio = PortfolioData;
  }

  public toggleOpen(valueToToggle: string): void {
    switch(valueToToggle) {
      case 'logOpen':
        this.logOpen = !this.logOpen;
        break;
      case 'projectOpen':
        this.projectOpen = !this.projectOpen;
        break;
      case 'bioOpen':
        this.bioOpen = !this.bioOpen;
        break;
    }
  }

  public toggleActiveChange(toggleChange: ChangeLog): void {
    toggleChange.showDetails = !toggleChange.showDetails;

    // Stop showing another changelog's details
    for (let change of this.portfolio.changeLog) {
      if (change != toggleChange) {
        change.showDetails = false;
      }
    }
  }
}
