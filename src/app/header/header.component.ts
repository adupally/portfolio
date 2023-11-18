import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , NavigationEnd, Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  showAboutLink:boolean=true;
  showHomeLink:boolean=true;
  showLink:boolean=true;
  showContactLink: boolean = true;
  showProjectsLink: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        // console.log(currentRoute)
        this.showAboutLink = !currentRoute.includes('About');
        this.showHomeLink = !currentRoute.includes('Home');
        this.showLink = !currentRoute.includes('');
        this.showContactLink = !currentRoute.includes('Contact');
        this.showProjectsLink = !currentRoute.includes('Projects');
      }
    });
  }


  ngOnInit(): void {
    

    
  }
  

}


