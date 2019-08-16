import { Component, EventEmitter, Input, Output } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { ContentView } from "tns-core-modules/ui/content-view";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout/grid-layout";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
  selector: "DataBox",
  moduleId: module.id,
  templateUrl: "data-box.component.html"
})
export class DataBoxComponent extends TextField {
  @Input() dataValue: string;
  @Input() label: string;
  @Input() error: string;
  @Input() isDatePicker: boolean = false;
  @Output() dataValueChange = new EventEmitter<string | number>();
  @Output() tapEvent = new EventEmitter();

  constructor() {
    super();
  }

  onDataBoxTap(event) {
    if (this.isDatePicker === true) {
      this._showDatePicker(event);
    } else {
      this.tapEvent.emit();
    }
  }

  onFocusTF(args) {
    const tf = args.object as TextField;
    const gl = tf.parent as GridLayout;
    const root = gl.parent as StackLayout;
    root.className = "data-box-active";
  }

  onBlurTF(args) {
    const tf = args.object as TextField;
    const gl = tf.parent as GridLayout;
    const root = gl.parent as StackLayout;
    root.className = "data-box";
  }

  private _showDatePicker(args) {
    // return new Promise((resolve, reject) => {
    (args.object as StackLayout).className = "data-box-active";

    const newDate = new Date();

    // });
  }

  private _showListPicker(args) {
    (args.object as StackLayout).className = "data-box-active";
  }
}

registerElement("DataBox", () => {
  return ContentView;
});
