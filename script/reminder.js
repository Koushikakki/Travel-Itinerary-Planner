export function setupReminder(activity) {
  if (activity.reminderMinutes > 0 && !activity.reminderSet) {
    activity.reminderSet = true;
    setTimeout(() => {
      alert(`Reminder: ${activity.name} at ${activity.timeSlot}`);
    }, activity.reminderMinutes * 60 * 1000);
  }
}
