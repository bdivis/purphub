var week = [
  'The weekend is over :(',
  'It\'s Monday? Gross!',
  'Taco Tuesday boiiii!',
  'It\'s Wednesday, my dudes. AAAAAAHHHHH!',
  'It\'s thirsty Thursday!',
  'Enjoy your weekend!',
  'It\'s Saturday! Turn up!'];

var today = new Date();
var day = today.getDay();
var greeting = '';
if (today.getHours() < 12) {
  greeting = 'Good morning!';
} else if (today.getHours() < 16) {
  greeting = 'Good afternoon!';
} else {
  greeting = 'Good evening!';
}

var x = greeting + " " + week[day]);