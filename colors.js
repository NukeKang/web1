//스크립트 태그는 빼고 복사 해야된다!

var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i<alist.length){
    alist[i].style.color= color;
    i=i + 1;
    }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  }, //프로퍼티와 프로포티 사이에는 , 로 구분한다.
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
  },
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'Night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'Day';
    Links.setColor('powderblue');}
  else {
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'Night';
    Links.setColor('blue');}
}
//파일로 쪼개는 것이 시간, 돈 적으로 훨씬 효율적인 면이다 (캐쉬때문에)
