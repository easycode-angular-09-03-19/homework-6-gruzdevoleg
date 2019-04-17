import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from "../../interfaces/User";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User;
  isReadonly = true;
  @ViewChild('editUserForm') form: NgForm;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getuserById(id).subscribe((data: User) => {
      this.user = data;
    }, (err) => {
      console.log(err);
    });
  }

  onEditClickHandler() {
    this.isReadonly = !this.isReadonly;
  }

  onFormSubmit() {
    this.userService.editUser(this.user.id).subscribe((data: number) => {
        this.flashMessagesService.show('Данные пользователя успешно отредактированы', { cssClass: 'alert-success', timeout: 1000 });
        this.form.resetForm();
        this.router.navigate([`/`]);
      })
  }

   onBackClicHandler() {
    this.router.navigate([`/`]);
  }

}
