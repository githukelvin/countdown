const countdown = () => {
  const date = new Date().getTime();
  let days = document.querySelectorAll(".days");
  let hours = document.querySelectorAll(".hours");
  let mins = document.querySelectorAll(".mins");
  let secs = document.querySelectorAll(".secs");

  const Fdate = new Date("Nov 11 ,2022 00:00:00").getTime();

  // maths

  const second = 1000;
  const min = second * 60;
  const hour = min * 60;
  const day = hour * 24;

  const diff = Fdate - date;

  const dAys = Math.floor(diff / day);
  // console.log(dAys)?
  const Hours = Math.floor((diff - dAys * day) / hour);
  const MiNs = Math.floor((diff - (dAys * day + Hours * hour)) / min);
  const sec = Math.floor(
    (diff - (dAys * day + Hours * hour + MiNs * min)) / second
  );
  const da = days[1].innerHTML;
  const mi = days[1].innerHTML;
  const se = days[1].innerHTML;

  const ho = days[1].innerHTML;

  // console.log(da)
  if (da.length < 2 || mi.length < 2 && se.length < 2 && ho.length < 2) {
  }

  if (  da.length <2) {
    days.forEach((day) => {
      day.innerHTML = 0 + `${dAys}`;
    });
  } else{
    days.forEach((day) => {
      day.innerHTML =`${dAys}`;
    });
  }

  if (mi.length <= 1 ||mi.length <2) {
    mins.forEach((min) => {
      min.innerHTML = 0+ `${MiNs}`;
    });
  } else {
    mins.forEach((min) => {
      min.innerHTML = `${MiNs}`;
    });
  }
  if (se.length <= 1 || se.length < 2) {
    secs.forEach((secd) => {
      secd.innerHTML = 0 + `${sec}`;
    });
  } else {
    secs.forEach((secd) => {
      secd.innerHTML =`${sec}`;
    });
  }
  if (ho.length <= 1) {
    hours.forEach((hours) => {
      hours.innerHTML = 0 + `${Hours}`;
    });
  } else {
    hours.forEach((hours) => {
      hours.innerHTML = `${Hours}`;
    });
  }

  // console.log(days)
//   console.log(da.length);
//   console.log(mi.length);
//   console.log(se.length);
//   console.log(ho.length);
};
countdown();
setInterval(countdown, 1000);
