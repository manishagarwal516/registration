import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	user : any
  	
  	constructor(private data : DataService, private router: Router) { }
	
	ngOnInit() {
		this.user = new User('','', '');
  	}

  	saveUser(){
	    this.data.createUser(this.user)
	    	.subscribe((userResponse: any) => {
	    		if(userResponse.status === "success"){
	    			alert("User Added successfully");
	    			this.router.navigate(['login']);
	    		}else{
	    			alert("User is not added");
	    		}
	    });
	}
}
