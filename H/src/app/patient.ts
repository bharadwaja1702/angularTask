import { Time } from "@angular/common";

export class Patient {
    constructor(
        public firstName: string,
        public lastName: string,
        public dob: Date,
        public appointmentDate: Date,
        public appointmentTime:Time
      ) {  }
}
