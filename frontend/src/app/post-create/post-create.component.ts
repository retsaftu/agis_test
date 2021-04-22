import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import {User} from '../user';

@Component({
  selector: 'app-post-create',
  template: `<div class="form-group">
                    <label>Имя</label>
                    <input class="form-control" name="username" [(ngModel)]="user.name" />
                </div>
                <div class="form-group">
                    <label>Возраст</label>
                    <input class="form-control" type="number" name="age" [(ngModel)]="user.age" />
                </div>
                <div class="form-group">
                    <button class="btn btn-default" (click)="submit(user)">Отправить</button>
                </div>
                <div *ngIf="done">
                    <div>Получено от сервера:</div>

                </div>`,
  providers: [HttpService]
})
export class PostCreateComponent implements OnInit {

  constructor(private httpService: HttpService){}

  ngOnInit(): void {
  }
  user: User=new User();
  //user2: User;
  // receivedUser: User;
  done: boolean = false;

  submit(user: User){
      this.httpService.postData(user) ;
    }
}
