export class Activity {
  constructor(name, timeSlot, location, budget, reminderMinutes = 0) {
    this.name = name;
    this.timeSlot = timeSlot;
    this.location = location;
    this.budget = parseFloat(budget);
    this.reminderMinutes = reminderMinutes;
    this.reminderSet = false;
  }

  static fromData(data) {
    return new Activity(
      data.name,
      data.timeSlot,
      data.location,
      data.budget,
      data.reminderMinutes
    );
  }
}
