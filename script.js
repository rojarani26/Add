var li = document.getElementsByTagName('li');
console.log(li);
//li[1].style.backgroundColor = 'green';
li[2].style.display = 'none';

var list = document.querySelectorAll('li');
list[1].style.color = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor = 'green';
}