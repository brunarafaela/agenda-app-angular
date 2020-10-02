import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Schedule } from "../app.component";

@Component({
  selector: "app-schedule-item",
  templateUrl: "./schedule-item.component.html"
})
export class ScheduleItemComponent {
  @Input() value: Schedule;

  @Output() deleteEventInstanceEvent:
  EventEmitter<Schedule> = new EventEmitter<Schedule>();

  handleDeleteClick() {
    this.deleteEventInstanceEvent.emit(this.value);
  }

  constructor() {}
}
