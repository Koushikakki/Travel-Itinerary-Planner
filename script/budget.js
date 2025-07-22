export function calculateBudget(activities) {
  return activities.reduce((sum, act) => sum + act.budget, 0);
}