
document.getElementById('form').onsubmit = function(){
  window.alert(docment.getElementById('form').number.value);
  return false;
};

var maxNum = number;

for(var i = 1; i < maxNum; i++)
{
  var li = document.createElement('li');
  if((i%3 != 0) && (i%5 != 0))
    {
      li.textContent = i;
      document.getElementById('num').appendChild(li);
    }
    
}
