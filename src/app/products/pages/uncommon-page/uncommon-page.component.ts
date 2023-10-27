import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name:string = 'John';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invite O',
    'female': 'invite A'
  }


  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients:string[] = ['John', 'Peter', 'Fer', 'Hernan', 'Melissa', 'Charles']
  public clientsMap = {
    '=0': 'we don\'t have any client waiting.',
    '=1': 'we have 1 client waiting.',
    '=2': 'we have 2 people waiting.',
    'other': 'we have # clients waiting.',
  }

  deleteClient():void{
    this.clients.shift()
  }
}
