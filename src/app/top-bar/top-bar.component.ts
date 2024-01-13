import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RestApiServiceService } from '../rest-api-service.service';
import { allProperties } from '../../models/allProperties';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit{
  appData: allProperties[] = [];
  ngOnInit(): void {
    
  }

  constructor(private service: RestApiServiceService){
    service.postBlog().subscribe((appDatas : allProperties[]) => { this.appData = appDatas });
    console.log(this.appData);
  }

  links = ['All Properties', 'Giveaways', 'Events'];
  activeLink = this.links[0];
  background: ThemePalette = 'warn';

  toggleBackground() {
    this.background = this.background != 'warn' ? 'warn' : 'primary';
    this.saveBlog();
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  saveBlog() {
    console.log("In the savelog method");
    this.service.postBlog().subscribe((appDatas : allProperties[]) => { this.appData = appDatas });
    console.log(this.appData);
  }
}
