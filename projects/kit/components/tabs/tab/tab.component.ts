import { Component, Input } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'tab',
  templateUrl: 'tab.component.html',
})
export class TabComponent {
  @Input()
  public name!: string;

  @Input()
  public caption!: string;

  public isActive!: boolean;

  constructor(tabs: TabsComponent) {
    tabs.addTab(this);
  }
}
