var panel1 = document.getElementById('panel-1');
var panel2 = document.getElementById('panel-2');
var bt     = document.querySelector('button');
bt.onclick = function(){
  alert('ok');
}

/*
* REQUEST 1
*/
console.time('loading');
var req = new XMLHttpRequest();
req.open('GET', 'large-file.html', true);
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
req2.open('GET', 'small-file.html', true);
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
