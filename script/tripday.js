import { Activity } from './activity.js';

export class TripDay {
  constructor(date) {
    this.date = date;
    this.activities = [];
  }

  addActivity(activity) {
    this.activities.push(activity);
  }

  getActivityList() {
    return this.activities;
  }

  static fromData(date, activityDataArray) {
    const tripDay = new TripDay(date);
    activityDataArray.forEach(data => {
      const activity = new Activity(data.name, data.timeSlot, data.location, data.budget, data.reminderMinutes);
      tripDay.addActivity(activity);
    });
    return tripDay;
  }
}
