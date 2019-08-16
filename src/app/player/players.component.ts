import { Component, OnInit } from "@angular/core";
import { DataItem, DataService } from "../data.service";

@Component({
  selector: "ns-players",
  moduleId: module.id,
  templateUrl: "./players.component.html"
})
export class PlayerComponent implements OnInit {
  items: DataItem[];
  pw: string;
  pwError = "There is an error, shit";

  constructor(private itemService: DataService) {}

  ngOnInit(): void {
    this.items = this.itemService.getPlayers();
  }

  tbLoaded(args) {
    console.log("max text box loaded", args.object);
  }
}
