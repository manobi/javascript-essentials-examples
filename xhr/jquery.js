var panel1 = $('#panel-1');
var panel2 = $('#panel-2');
var bt     = document.querySelector('button');
bt.onclick = function(){
  alert('ok');
}

/*
* REQUEST 1
*/
console.time('loading');
$.get('large-file.html', function(data){
  panel1.html(data);
});

/*
* REQUEST 2
*/
$.get('small-file.html', function(data){
  panel2.html(data);
});

/*
* Add Message
*/
var msg = document.createElement('h3');
msg.innerHTML = 'Welcome to my website';
document.querySelector('.msg').appendChild( msg );
