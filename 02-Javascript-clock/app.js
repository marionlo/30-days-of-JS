const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate () {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //add 90 to offset the 90degrees in the CSS
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60 * 360) + 90)
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12 * 360) + 90) // divide by 12 because it's hours
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
