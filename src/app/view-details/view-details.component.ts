import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginSignupService } from '../login-signup.service';


@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewDetailsComponent implements OnInit {
  id: number;
  productDetailsArray: any;
  productName: any;
  constructor(private route: ActivatedRoute,
    private loginSignupService: LoginSignupService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.productById(this.id);
  }
  productById(id: number) {
    this.loginSignupService.productById(id).subscribe((res) => {
      this.productDetailsArray = res;
    })
  }
  onClick(){
    this.router.navigate(['/product'])
  }
}
