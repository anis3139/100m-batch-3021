 // + - / * % = 
      // == === ++ < > 

      // string  " " ' '
      //intriger 0-9
      // booliun true false
      // undefined
      // nulled

   // var let const


  // variable
  var x = 5;
  var y = 10;

  var result = x-y;

  console.log(result)

//array

  var man=['Rahim', 'karim', 'asad']
  var l=man.length;
  console.log(man[0]);

// function



var man =function(a,b){
var result= a+b;
return result;
}

var m=man(50, 20);

console.log(m);


///condtional statement
var a=15;
var b=19;

if (a==b) {
console.log("Hello")
}else if(a>b){
console.log("a is big")
}else{
console.log('You are wrong')
}


var weman={
name:"rahima",
age:29,
district:"Comilla"
}

var r=weman.district;

console.log(r);



//For Lop --------- initialization, condition, increment/decrement
var money=['Rahim', 'karim', 'asad', 'Rafiq']

for(var i=0; i<money.length; i++){
  console.log(money[i]);
}







var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
    
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})