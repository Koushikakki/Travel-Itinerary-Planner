#  Travel Itinerary Planner Web App

This is a beginner-friendly, modular JavaScript web app that helps users plan trips day-by-day. Users can log activities, set budgets, get real-time travel tips, and receive activity reminders.

---

##  Features

1. **Create and Manage Daily Itineraries**
   - Add activities with:
     - Activity name (e.g., "Visit Eiffel Tower")
     - Time slot (e.g., "10:00 AM – 12:00 PM")
     - Location or notes
     - Budget estimate
   - Activities are grouped by trip day and shown in a collapsible format.

2. **Object-Oriented Structure**
   - Uses `TripDay` and `Activity` classes to structure data.
   - Methods like `getBudgetSummary()` and `getActivityList()` help manage each trip day.

3. **Daily Budget Summary**
   - Shows:
     - Total estimated budget
     - Estimated cost per day
     - Remaining budget
   - Uses JavaScript array methods like `.map()`, `.reduce()`, and `.filter()` for calculations.

4. **Async Travel Tip Fetcher**
   - On page load, a random travel tip is shown after a short simulated delay using `async/await`.

5. **Activity Reminder System**
   - Users can set reminders (e.g., 10 minutes before an activity).
   - Each reminder uses a closure to manage its own countdown timer independently.

6. **Local Storage Support**
   - Your trip data is saved locally in the browser, so refreshing the page won’t erase your plan.

7. **Modular Code Structure**
   - Clean separation of logic into multiple JS files:
     

---



### 📦 Requirements
- No installation needed.
- Works in any modern browser (Chrome, Firefox, Edge, etc.).

###  Run Locally
1. Clone or download the repository.
2. Open `index.html` in a web browser.


---

##  Tech Used

- **HTML5**: For semantic structure
- **CSS3**: For styling and layout
- **JavaScript (ES6+)**: For interactivity and logic
- **Git**: For version control and collaborative development 

---



