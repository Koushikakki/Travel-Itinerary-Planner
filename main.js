import { Activity } from './activity.js';
import { TripDay } from './tripday.js';
import { setupReminder } from './reminder.js';
import { renderView } from './ui.js';

const itineraryMap = new Map();

function saveToStorage() {
  const raw = JSON.stringify(
  Array.from(itineraryMap.entries()).map(([date, tripDay]) => [date, tripDay.getActivityList()])
);
  localStorage.setItem('itinerary', raw);
}


function loadFromStorage() {
  const raw = localStorage.getItem('itinerary');
  if (!raw) return;

  const parsed = JSON.parse(raw);
  parsed.forEach(([date, activities]) => {
    const tripDay = TripDay.fromData(date, activities);
    itineraryMap.set(date, tripDay);
  });
}


function displayAll() {
  const allActivities = Array.from(itineraryMap.values()).flatMap(day => day.getActivityList());
  const total = allActivities.reduce((sum, act) => sum + act.budget, 0);
  const estimatedPerDay = itineraryMap.size ? total / itineraryMap.size : 0;

  renderView('budget', { total, estimatedPerDay });

  const events = Array.from(itineraryMap.entries())
    .sort(([dateA], [dateB]) => new Date(dateA) - new Date(dateB))
    .map(([date, day]) => [date, day.getActivityList()]);

  renderView('event', events);
}

document.getElementById('activity-form').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('activity-name').value;
  const timeSlot = document.getElementById('time-slot').value;
  const location = document.getElementById('location').value;
  const budget = document.getElementById('budget').value;
  const date = document.getElementById('activity-date').value;

  const activity = new Activity(name, timeSlot, location, budget);

  if (!itineraryMap.has(date)) {
    itineraryMap.set(date, new TripDay(date));
  }

  itineraryMap.get(date).addActivity(activity);
  setupReminder(activity);
  saveToStorage();
  displayAll();

  e.target.reset();
});

loadFromStorage();  
displayAll();
