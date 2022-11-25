import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  //Task Nr.1 
  //Custom Validator
  max: number = 15
  min: number = 5
  nickname: any = "stranger"
  nicknameClearer: string
  
  //ErrorTips
  errMessageMax: string = `nickname can contain at max ${this.max} characters`
  errMessageMin: string = `nickname must contain at least ${this.min} characters`

  logForm = new FormGroup({
    nickname: new FormControl("", [Validators.required, Validators.minLength(this.min), Validators.maxLength(this.max)] )
  })

  //If input is valid and submitted, nickname changes and input field gets deleted
  getNickname() {
    this.nickname = this.logForm.value.nickname
    this.nicknameClearer = ""
  }

  constructor() {}

  ngOnInit(): void {
  }

}
