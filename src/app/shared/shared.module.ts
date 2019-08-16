import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SHARED_COMPONENTS } from "./components";

const SHARED_MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule
];

@NgModule({
  imports: [...SHARED_MODULES],
  declarations: [...SHARED_COMPONENTS],
  providers: [ModalDialogService],
  exports: [...SHARED_MODULES, ...SHARED_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
