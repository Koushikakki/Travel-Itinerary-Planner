const travelTips = [
  'Pack light to travel easy.',
  'Always carry a portable charger.',
  'Learn a few phrases of the local language.',
  'Keep digital copies of important documents.',
  'Plan but stay flexible.',
];

export function showTipAsync() {
  const tipEle = document.getElementById('travel-tip');
  tipEle.textContent = 'Loading tip...';
  setTimeout(() => {
    const randomTip = travelTips[Math.floor(Math.random() * travelTips.length)];
    tipEle.textContent = randomTip;
  }, 1000);
}
