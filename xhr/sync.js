/*
* Add Event to button
*/
var bt = document.querySelector('button');
bt.onclick = function(){
  alert('ok');
}
var panel1 = document.getElementById('panel-1');
var panel2 = document.getElementById('panel-2');

/*
* REQUEST 1
*/
console.time('loading');
var req = new XMLHttpRequest();
req.open('GET', 'large-file.html', false);
req.onreadystatechange = function() {
  if (req.readyState == 4 && req.status == 200) {
      panel1.innerHTML = req.responseText;
  }
}
req.send();

/*
* REQUEST 2
*/
var req2 = new XMLHttpRequest();
req2.open('GET', 'small-file.html', false);
req2.onreadystatechange = function() {
  if (req2.readyState == 4 && req2.status == 200) {
      panel2.innerHTML = req2.responseText;
  }
}
req2.send();

/*
* Add Message
*/
var msg = document.createElement('h3');
msg.innerHTML = 'Welcome to my website';
document.querySelector('.msg').appendChild( msg );
