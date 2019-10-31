import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public registrationForm: FormGroup;
  public jsonData = {
    email: "abc@gmail.com",
    password: "ffgfgfhj",
    addresses: {
      address1: "beta 1",
      address2: "beta 2",
      city: "Greater Noida",
      zip: "123456",
      check: true
    }
  };
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationFormValidation();
  }

  private registrationFormValidation() {
    // this.registrationForm = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl(),
    //   addresses: new FormGroup({
    //     address1: new FormControl(),
    //     address2: new FormControl(),
    //     city: new FormControl(),
    //     zip: new FormControl(),
    //     check: new FormControl()
    //   })
    // });
    // **********************Use FormBuilder
    this.registrationForm = this.fb.group({
      email: ["", Validators.required],
      password: [""],
      addresses: this.fb.group({
        address1: [""],
        address2: [""],
        city: [""],
        zip: [""],
        check: [""]
      })
    });
  }
  public submitRegForm() {
    console.log(this.registrationForm.value);
  }
  public loadData() {
    this.registrationForm.setValue(this.jsonData);
  }
}
