let weather = [
  {
    date: 1563904800000,
    temperature: {
      night: 14,
      day: 26,
    },
    cloudiness: 'Ясно',
    snow: false,
    rain: false,
  },
  {
    date: 1563991200000,
    temperature: {
      night: 16,
      day: 27,
    },
    cloudiness: 'Ясно',
    snow: false,
    rain: false,
  },
  {
    date: 1564077600000,
    temperature: {
      night: 19,
      day: 29,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: true,
  },
  { 
    date: 1564164000000,
    temperature: {
      night: 27,
      day: 18,
    },
    cloudiness: 'Ясно',
    snow: false,
    rain: false,
  },
  { 
    date: 1564250400000,
    temperature: {
      night: 29,
      day: 19,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
  { 
    date: 1564336800000,
    temperature: {
      night: 12,
      day: 11,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
    { 
    date: 1564423200000,
    temperature: {
      night: 12,
      day: 11,
    },
    cloudiness: 'Облачно',
    snow: false,
    rain: false,
  },
  
];

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница',  'Суббота'];

const date_options = {
  day: 'numeric',
  month: 'long',
};

const today_date = new Date().toLocaleString('ru', date_options) +' '+ days[new Date().getDay()];
                           

const subtitle = document.querySelector('.subtitle');
subtitle.innerHTML = today_date;

const slider = document.querySelector('.slider-track');

function createItem(day, date, image, temperature_day, temperature_night, cloudiness, precipitation) {
  const item = document.createElement('div')
  item.className = 'item';
  item.innerHTML = `
    <div class="item-inner">
      <p class="item-title">${day}</p>
      <p class="item-subtitle">${date}</p>
      <img class="item-image" src="./img/${image}.png">
      <p class="item-day">Днем <span>${temperature_day}</span>°C</p>
      <p class="item-text">Ночью <span>${temperature_night}</span>°C</p>
      <p class="item-text">${cloudiness}</p>
      <p class="item-text">${precipitation}</p>
    </div>
  `;
  slider.appendChild(item);
}

let item_count = 4;
weather.forEach(function(el, i) {

  const day = days[new Date(el.date).getDay()];
  const date = new Date(el.date).toLocaleString('ru', date_options);
  let image = 'sunny';
  const temperature_day = el.temperature.day;
  const temperature_night = el.temperature.night;
  const cloudiness = el.cloudiness;
  let precipitation = 'Без осадков';

  if (el.rain) {
    precipitation = 'дождь';
    image = 'rain';
  }
  else if(el.cloudiness == 'Облачно') {
    image = 'sunnyperiod'
  }

  createItem(day, date, image, temperature_day, temperature_night, cloudiness, precipitation);

})
  let item_transition = 0;
  let item_width = 280; 

  slider.style.transitionDuration = '0.3s';

  let next = document.querySelector('.nav_next');
  let prev = document.querySelector('.nav_prev');
  let count_max = 0;

  next.addEventListener('click', function(e) {
  count_max++;
    if( (weather.length - item_count) < count_max  ) {
      this.style.opacity = 0.5;
      return;
    }
     item_transition -= item_width;
     slider.style.transform = 'translateX(' +item_transition+ 'px)';
    item_count++;       
  });


  prev.addEventListener('click', function(e) {
    item_transition += item_width;
    if (count_max == 0) {
      this.style.opacity = 0.5;
      return;
    }

    slider.style.transform = 'translateX(' +item_transition+ 'px)';

  });
