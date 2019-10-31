import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit {
  // @ViewChild("container", { static: false }) container: ElementRef;
  public loginForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.loginFormValidation();
  }
  private loginFormValidation() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      // create new FormGroup

      skills: new FormGroup({
        skillName: new FormControl(),
        expInyears: new FormControl(),
        proficiency: new FormControl()
      })
    });
  }
  submitLoginForm(event): void {
    console.log(this.loginForm.value);
  }
  public loadData(): void {
    this.loginForm.patchValue({
      username: "Naresh",
      password: 1234657,
      skills: {
        skillName: "dddffd",
        expInyears: 5,
        proficiency: "Advanced"
      }
    });
  }
  ngAfterViewInit() {}
}
