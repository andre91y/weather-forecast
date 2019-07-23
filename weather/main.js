let weather = [
	{
		date: 1563559200000,
		temperature: {
			night: 2,
			day: 1
		},
		cloudiness: 'Ясно',
		snow: false,
		rain: true
	},
	{
		date: 1563645600000,
		temperature: {
			night: 4,
			day: 3
		},
		cloudiness: 'Ясно',
		snow: false,
		rain: true
	},
	{
		date: 1563684936000,
		temperature: {
			night: 5,
			day: 6
		},
		cloudiness: 'Облачно',
		snow: false,
		rain: true
	},
	{
		date: 1563771336000,
		temperature: {
			night: 7,
			day: 8
		},
		cloudiness: 'Облачно',
		snow: false,
		rain: false
	},
	{
		date: 1563857736000,
		temperature: {
			night: 9,
			day: 10
		},
		cloudiness: 'Облачно',
		snow: false,
		rain: false
	},
	{
		date: 1563944136000,
		temperature: {
			night: 12,
			day: 11
		},
		cloudiness: 'Облачно',
		snow: false,
		rain: false
	}
];

let time = new Date();
// дата на сегодня как в ТЗ
let obj_hours = document.getElementById('wb_data');
let name_month = new Array(
	'января',
	'февраля',
	'марта',
	'апреля',
	'мая',
	'июня',
	'июля',
	'августа',
	'сентября',
	'октября',
	'ноября',
	'декабря'
);

let dayWeek = new Array(
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота'
);

function wr_hours() {
	time_date = time.getDate();
	time_wr = (time_date < 10 ? '0' : '') + time_date;
	time_wr =
		time_wr + ' ' + name_month[time.getMonth()] + ' ' + dayWeek[time.getDay()];
	obj_hours.innerHTML = time_wr;
}

wr_hours();
//setInterval("wr_hours();",1000);

// переводим милисекунды прошедшие с 1970г в дату формата: 01:12:2019
function timestampToDate(e) {
	time.setTime(e);
	return (
		('0' + time.getDate()).slice(-2) +
		'.' +
		('0' + (time.getMonth() + 1)).slice(-2) +
		'.' +
		time.getFullYear()
	);
}
//сравниваем даты, если совпадает дата с массива с сегоднейшним числом то выводим данные из объекта
let DateToday = timestampToDate(Date.now());

for (var i = 0; i < weather.length; i++) {
	let DateArray = timestampToDate(weather[i].date);

	if (DateToday == DateArray) {
		console.log(DateArray);

		let weather_field = document.querySelector('.weather_days .weather_day');

		let creatNewField = function(day, night, cloudiness, snow, rain) {
			let new_field = weather_field.cloneNode(true);

			document.querySelector('.weather_days').appendChild(new_field);

			this.day_field = new_field.querySelector('.temper-day');
			this.night_field = new_field.querySelector('.temper-night');
			this.cloudiness_field = new_field.querySelector('.cloud');
			this.snow_field = new_field.querySelector('.rainfall');
			//this.rain_field = new_field.querySelector('.rainfall');

			day_field.textContent += '+' + day;
			night_field.textContent += '+' + night;
			cloudiness_field.textContent = cloudiness;

			if (snow == true) {
				snow_field.textContent = 'снег';
			} else if (rain == true) {
				snow_field.textContent = 'дождь';
			} else if (snow == false) {
				snow_field.textContent = 'без осадков';
			} else {
				snow_field.textContent = 'без осадков';
			}

			// cloudiness_field.innerHTML = if (cloudiness == 'облачно') {

			// }
		};

		weather_field.remove();

		let active = 4;
		for (let i = 0; i < active; i++) {
			DateArray = timestampToDate(weather[i].date);

			creatNewField(
				weather[i].temperature.day,
				weather[i].temperature.night,
				weather[i].snow,
				weather[i].rain
			);
		}
	}
}
