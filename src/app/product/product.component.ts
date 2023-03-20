import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSignupService } from '../login-signup.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductComponent implements OnInit {
  productArray:any;
  productDetailsArray:any;

  constructor(private loginSignupService: LoginSignupService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.loginSignupService.product().subscribe((res) => {
      this.productArray = res;
    })


  }
  productDetails(id:number){
    this.router.navigate(['/product/details/',id]);

  }

}
