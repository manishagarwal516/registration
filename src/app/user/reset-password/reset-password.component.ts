import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User }    from '../user';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
	user : any

  	constructor(private data : DataService,
  		private routeParams: ActivatedRoute) { }


  	ngOnInit() {
  		this.user = new User('','', '');
  	}

  	resetPassword(){
  		this.routeParams.params.subscribe((params: Params) => {
  			let id = params['id'];

			if(id){
				console.log("hhghg");
				this.data.resetPassword(this.user, id)
			    	.subscribe((userResponse: any) => {
			          console.log(userResponse);
			    });
			}
		});
	}

}
