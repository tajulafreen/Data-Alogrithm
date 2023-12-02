// nested logic:=
let [dayReturned, monthReturned, yearReturned, dayDue, monthDue, yearDue] = input.split(/[\n ]/g).map(Number);

let late = {
	day: dayReturned - dayDue,
	month: monthReturned - monthDue,
	year: yearReturned - yearDue
};

console.log(
	late.year > 0 ? 10000
	: ( !late.year && late.month  > 0 ) ? ( 500 * late.month )
	: ( !late.year && !late.month && late.day  > 0 ) ? 15 * late.day
	: 0
);