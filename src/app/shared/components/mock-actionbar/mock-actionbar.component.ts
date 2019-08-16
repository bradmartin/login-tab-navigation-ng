import { Component, EventEmitter, Input, Output } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { ActionBar } from "tns-core-modules/ui/action-bar";
import { ContentView } from "tns-core-modules/ui/content-view";

@Component({
  selector: "MockActionBar",
  moduleId: module.id,
  templateUrl: "mock-actionbar.component.html"
})
export class MockActionbarComponent extends ActionBar {
  @Input() title: string;
  @Input() showBackNav = false;
  @Input() showSettingsBtn = false;
  @Input() showSupportBtn = false;
  @Input() showRefreshBtn = false;
  @Output() supportTapEvent = new EventEmitter();

  constructor() {
    super();
  }

  onNavBtnTap() {
    // this._params.closeCallback('');
    // const page = topmost().currentPage;
    // if (page && page.modal) {
    //   page.modal.closeModal();
    // } else {
    //   console.log('error closing modal!!!!');
    // }
  }

  onSupportTap(): void {
    this.supportTapEvent.emit();
  }

  onSettingsTap() {
    // this._modalService
    //   .showModal(ProfileSettingsComponent, {
    //     context: {},
    //     fullscreen: true,
    //     animated: true,
    //     viewContainerRef: this._vcRef
    //   })
    //   .catch(err => {
    //     this._logService.logException(err);
    //   });
  }

  onRefreshTap() {}
}

registerElement("MockActionBar", () => {
  return ContentView;
});
