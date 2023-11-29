import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RestApiServiceService } from '../rest-api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent{
  
  /**
   *
   */
  constructor(private service: RestApiServiceService, private router: Router) {
    
  }

  links = ['All Properties', 'Giveaways', 'Events'];
  activeLink = this.links[0];
  background: ThemePalette = 'warn';

  toggleBackground() {
    ///this.saveBlog();
    this.background = this.background != 'warn' ? 'warn' : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  saveBlog() {
    let blog = "";
    ///this.service.postBlog(blog);
    // this.service.postBlog(blog).subscribe({
    //   error: (err) => { console.error(err) },
    //   complete: () => { this.router.navigate(['viewblogs']) }
    // });
    console.log("In the savelog method");
    this.background = 'primary';
  }
}
