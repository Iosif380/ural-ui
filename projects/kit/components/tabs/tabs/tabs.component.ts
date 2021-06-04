import { Component, Output, EventEmitter } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.component.html',
  styleUrls: ['tabs.component.scss'],
})
export class TabsComponent {
  public tabs: TabComponent[] = [];

  @Output()
  public tabChange = new EventEmitter<TabComponent>();

  private _activeTab!: TabComponent;

  public addTab(tab: TabComponent): void {
    if (this.tabs.length === 0) {
      tab.isActive = true;
    }
    this.tabs.push(tab);
  }

  public selectTab(tab: TabComponent): void {
    if (this._activeTab && this._activeTab === tab) {
      return;
    }

    this.tabs.forEach((tab) => {
      tab.isActive = false;
    });
    tab.isActive = true;
    this._activeTab = tab;
    this.tabChange.emit(tab);
  }

  public getTabByName(name: string): TabComponent | null {
    const tab = this.tabs.find((tab) => tab.name === name);
    return tab || null;
  }
}
