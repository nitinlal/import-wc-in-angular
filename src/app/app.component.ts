import { Component } from "@angular/core";
import "../../../code/my-app/dist/my-webcomponent";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "import-react-web-component";
}
