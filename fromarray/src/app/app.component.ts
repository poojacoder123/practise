import { Component } from '@angular/core';
import { Form, FormArray,FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _fb : FormBuilder){

  }
  title = 'fromarray';
  myForm! : FormGroup;
  

  ngOnInit(){
    this.myForm = this._fb.group({
      firstname : ["", Validators.required],
      lastname : ["", Validators.required],
      age : ["", Validators.required],
      job : new FormArray([])
    })
  }
  get job() :FormArray{
    return this.myForm.get('job') as FormArray
  }
  save(){
    console.log(this.myForm.value)
  }
  addjob(){
  const jobForm = this._fb.group({
    jobtitle :['', Validators.required],
    location :['', Validators.required],
    from :['', Validators.required],
    to :['', Validators.required]

  })
  this.job.push(jobForm)
  }
  deletejob(){

  }
}
