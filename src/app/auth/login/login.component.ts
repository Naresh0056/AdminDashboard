import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit, AfterViewInit {
  @ViewChild("container", { static: false }) container: ElementRef;
  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    console.log(this.container);
  }
}
