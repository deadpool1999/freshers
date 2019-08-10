window.onload = function(){
var ev1 = document.getElementById('ev1'), ev1_anim=0, ev1img = document.getElementById('ev1img') ;
var ev2 = document.getElementById('ev2'), ev2_anim=0, ev2img = document.getElementById('ev2img') ;
var ev3 = document.getElementById('ev3'), ev3_anim=0, ev3img = document.getElementById('ev3img') ;
var ev4 = document.getElementById('ev4'), ev4_anim=0, ev4img = document.getElementById('ev4img') ;
var ev5 = document.getElementById('ev5'), ev5_anim=0, ev5img = document.getElementById('ev5img') ;
var ev6 = document.getElementById('ev6'), ev6_anim=0, ev6img = document.getElementById('ev6img') ;
var ev7 = document.getElementById('ev7'), ev7_anim=0, ev7img = document.getElementById('ev7img') ;
var ev8 = document.getElementById('ev8'), ev8_anim=0, ev8img = document.getElementById('ev8img') ;


var zoomin = [
    {
        transform : "scale(1)"
    },
    {
        transform : "scale(1.5)"
    }
];

var zoomout = [
    {
        transform: "scale(1.5)"
    },
    {
        transform : "scale(1)"
    }
];

ev1.onmouseover = function(){
    if(ev1_anim==0)
    {ev1img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev1_anim = 1 ;
    ev1img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev1.onmouseout = function(){
    if(ev1_anim)
    {ev1img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev1_anim = 0 ;
    ev1img.style["transform"] = "scale(1)" ;
    }
   
}



ev2.onmouseover = function(){
    if(ev2_anim==0)
    {ev2img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev2_anim = 1 ;
    ev2img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev2.onmouseout = function(){
    if(ev2_anim)
    {ev2img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev2_anim = 0 ;
    ev2img.style["transform"] = "scale(1)" ;
    }
   
}


ev3.onmouseover = function(){
    if(ev3_anim==0)
    {ev3img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev3_anim = 1 ;
    ev3img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev3.onmouseout = function(){
    if(ev3_anim)
    {ev3img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev3_anim = 0 ;
    ev3img.style["transform"] = "scale(1)" ;
    }
   
}


ev4.onmouseover = function(){
    if(ev4_anim==0)
    {ev4img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev4_anim = 1 ;
    ev4img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev4.onmouseout = function(){
    if(ev4_anim)
    {ev4img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev4_anim = 0 ;
    ev4img.style["transform"] = "scale(1)" ;
    }
   
}



ev5.onmouseover = function(){
    if(ev5_anim==0)
    {ev5img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev5_anim = 1 ;
    ev5img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev5.onmouseout = function(){
    if(ev5_anim)
    {ev5img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev5_anim = 0 ;
    ev5img.style["transform"] = "scale(1)" ;
    }
   
}

ev6.onmouseover = function(){
    if(ev6_anim==0)
    {ev6img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev6_anim = 1 ;
    ev6img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev6.onmouseout = function(){
    if(ev6_anim)
    {ev6img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev6_anim = 0 ;
    ev6img.style["transform"] = "scale(1)" ;
    }
   
}

ev7.onmouseover = function(){
    if(ev7_anim==0)
    {ev7img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev7_anim = 1 ;
    ev7img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev7.onmouseout = function(){
    if(ev7_anim)
    {ev7img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev7_anim = 0 ;
    ev7img.style["transform"] = "scale(1)" ;
    }
   
}


ev8.onmouseover = function(){
    if(ev8_anim==0)
    {ev8img.animate(
       zoomin,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev8_anim = 1 ;
    ev8img.style["transform"] = "scale(1.5)" ;
    }
    
}
ev8.onmouseout = function(){
    if(ev8_anim)
    {ev8img.animate(
       zoomout,
       {
           duration: 1300,
           easing: 'ease-in-out'
       }
    );
    ev8_anim = 0 ;
    ev8img.style["transform"] = "scale(1)" ;
    }
   
}

}



