
const time = document.querySelector("#time");
const timeWidget = document.querySelector("#timeWidget");

function updateTimeTask(currentTime: any) {
  const day = currentTime.getDay();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  if (timeWidget === null || time === null) return;

  time.innerHTML = `${hour}:${fixTime(minute)}:${fixTime(second)}`;
  timeWidget.innerHTML = `
    <h1> ${hour}:${fixTime(minute)} </h1> <br>
    <h2> ${days[day]} </h2>
  `; 
};

module.exports = updateTimeTask;