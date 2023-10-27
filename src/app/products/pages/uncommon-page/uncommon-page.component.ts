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

}
