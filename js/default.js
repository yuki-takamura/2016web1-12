
document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
//  return false;
};

var word = 100;
var query = window.location.search.substring( 1 );
var parameters = query.split( '&' );
if(parameters){
  var element = parameters[0].split( '=' );
  word = parseInt(element[1]);
}

for(var i = 1; i <= word; i++)
{
  var li = document.createElement('li');
  
  if((i%3 == 0) && (i%5 == 0)) {
    li.textContent = 'FizzBuzz';
  }
  else if(i%3 == 0) {
    li.textContent = 'Fizz';
  }
  else if(i%5 == 0) {
    li.textContent = 'Buzz';
  }
  else {
    li.textContent = i;
  }
  
 document.getElementById('list').appendChild(li);
}
