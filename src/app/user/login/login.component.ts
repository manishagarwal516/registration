import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	user : any

  	constructor(private data : DataService) { }

  	ngOnInit() {
  		this.user = new User('','', '');
  	}

  	validateUser(){
	    this.data.validateUser(this.user)
	    	.subscribe((userResponse: any) => {
	          if(userResponse.status === "success" && userResponse.json.length > 0){
	    			alert("Login Successfully");
	    		}else{
	    			alert("Not able to login");
	    		}
	    });
	}
}
