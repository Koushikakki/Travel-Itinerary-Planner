export function renderView(type, data) {
  if (type === 'budget') {
    const { total, estimatedPerDay } = data;
    const budgetEl = document.getElementById("budget-summary");
    budgetEl.innerHTML = `
      <strong>Total Budget:</strong> ₹${total.toFixed(2)}<br>
      <strong>Estimated Per Day:</strong> ₹${estimatedPerDay.toFixed(2)}
    `;
  }

  if (type === 'event') {
    const itineraryEl = document.getElementById("itinerary");
    itineraryEl.innerHTML = ''; 

    data.forEach(([date, activities]) => {
      const daySection = document.createElement("div");
      daySection.classList.add("day-section");

      const dateHeader = document.createElement("h3");
      dateHeader.textContent = `Date: ${date}`;
      daySection.appendChild(dateHeader);

      const list = document.createElement("ul");
      activities.forEach(act => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${act.name}</strong> (${act.timeSlot})<br>
          Location: ${act.location}<br>
          Budget: ₹${act.budget.toFixed(2)}
        `;
        list.appendChild(li);
      });

      daySection.appendChild(list);
      itineraryEl.appendChild(daySection);
    });
  }
}