import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  toggleTab = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['home/login'])
  }

  activateButton(){
    this.toggleTab = !this.toggleTab

    this.toggleTab ? this.router.navigate(['home/novousuario']) : this.router.navigate(['home/login'])
  }


}
