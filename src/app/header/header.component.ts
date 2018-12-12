import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/guards/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //@Output() featureSelected = new EventEmitter<string>();
  private subs: Subscription;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  //onSelect(feature: string){
    //this.featureSelected.emit(feature);
  //}

  ngOnInit() {
    this.onLogOut();
  }

  onLogOut(){
    this.authService.logout();
    this.router.navigate(['auth']);
  }

}

