import {
  ErrorHandler,
  NgModule,
  NgModuleFactoryLoader,
  NO_ERRORS_SCHEMA
} from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NSModuleFactoryLoader } from "nativescript-angular/router";
import { enable as traceEnable } from "tns-core-modules/trace";
import { AppRoutingModule, COMPONENTS } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataService } from "./data.service";
import { SharedModule } from "./shared/shared.module";

traceEnable();

export class MyErrorHandler implements ErrorHandler {
  handleError(error) {
    console.log("### ErrorHandler Error: " + error.toString());
    console.log("### ErrorHandler Stack: " + error.stack);
  }
}

@NgModule({
  bootstrap: [AppComponent],
  imports: [SharedModule, NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, ...COMPONENTS],
  providers: [
    DataService,
    { provide: ErrorHandler, useClass: MyErrorHandler },
    { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
  ],
  exports: [SharedModule],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
