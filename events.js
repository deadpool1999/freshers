window.onload = function(){
var ev1 = document.getElementById('ev1'), ev1_anim=0, ev1img = document.getElementById('ev1img') ;
var ev2 = document.getElementById('ev2'), ev2_anim=0, ev2img = document.getElementById('ev2img') ;
var ev3 = document.getElementById('ev3'), ev3_anim=0, ev3img = document.getElementById('ev3img') ;
var ev4 = document.getElementById('ev4'), ev4_anim=0, ev4img = document.getElementById('ev4img') ;
var ev5 = document.getElementById('ev5'), ev5_anim=0, ev5img = document.getElementById('ev5img') ;
var ev6 = document.getElementById('ev6'), ev6_anim=0, ev6img = document.getElementById('ev6img') ;
var ev7 = document.getElementById('ev7'), ev7_anim=0, ev7img = document.getElementById('ev7img') ;
var ev8 = document.getElementById('ev8'), ev8_anim=0, ev8img = document.getElementById('ev8img') ;
var evclose = document.getElementById('evclose') ;
var ev1txt = document.getElementById('ev1text') ;
var ev1_1 = document.getElementById('ev1_1') ;
var ev1_2 = document.getElementById('ev1_2') ;
var ev1_3 = document.getElementById('ev1_3') ;
var ev2_1 = document.getElementById('ev2_1'), ev2_2 = document.getElementById('ev2_2'), ev2_3 = document.getElementById('ev2_3') ;
var ev3_1 = document.getElementById('ev3_1'), ev3_2 = document.getElementById('ev3_2'), ev3_3 = document.getElementById('ev3_3') ; 
var ev4_1 = document.getElementById('ev4_1'), ev4_2 = document.getElementById('ev4_2'), ev4_3 = document.getElementById('ev4_3') ;
var ev5_1 = document.getElementById('ev5_1'), ev5_2 = document.getElementById('ev5_2'), ev5_3 = document.getElementById('ev5_3') ;
var ev6_1 = document.getElementById('ev6_1'), ev6_2 = document.getElementById('ev6_2'), ev6_3 = document.getElementById('ev6_3') ;
var ev7_1 = document.getElementById('ev7_1'), ev7_2 = document.getElementById('ev7_2'), ev7_3 = document.getElementById('ev7_3') ;
var ev8_1 = document.getElementById('ev8_1'), ev8_2 = document.getElementById('ev8_2'), ev8_3 = document.getElementById('ev8_3') ;
var ev=document.querySelectorAll('.ev') ;

//TweenMax.to(".ev", 1, {opacity:1,scale:1,y:0,rotation:0, delay:1.6}) ;
var stagger = [
    {
        opacity:0,
        transform : "scale(1.5) rotate(360deg)"
    },
    {
        opacity:1,
        transform: "scale(1) rotate(0deg)"
    }
];



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

for(var i=0;i<ev.length;i++){
    
        ev[i].animate(stagger,
            {
                duration:2000,
                delay:200*i,
                easing:'ease-in-out'
            }   
        );                
}
setTimeout(function(){
    for(var i=0;i<ev.length;i++){
    
        ev[i].style.opacity = 1 ;                
    }
    
},1600);






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
ev1.onmouseleave = function(){
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
ev2.onmouseleave = function(){
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
ev3.onmouseleave = function(){
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
ev4.onmouseleave = function(){
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
ev5.onmouseleave = function(){
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
ev6.onmouseleave = function(){
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
ev7.onmouseleave = function(){
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
ev8.onmouseleave = function(){
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

ev1_1.onmouseover = function(){
    ev1_1.style["background"] = "white" ;
}
ev1_1.onmouseout = function(){
    ev1_1.style["background"] = "transparent" ;
}
ev1_2.onmouseover = function(){
    ev1_2.style["background"] = "white" ;
}
ev1_2.onmouseout = function(){
    ev1_2.style["background"] = "transparent" ;
}
ev1_3.onmouseover = function(){
    ev1_3.style["background"] = "white" ;
}
ev1_3.onmouseout = function(){
    ev1_3.style["background"] = "transparent" ;
}


// ev2
ev2_1.onmouseover = function(){
    ev2_1.style["background"] = "white" ;
}
ev2_1.onmouseout = function(){
    ev2_1.style["background"] = "transparent" ;
}
ev2_2.onmouseover = function(){
    ev2_2.style["background"] = "white" ;
}
ev2_2.onmouseout = function(){
    ev2_2.style["background"] = "transparent" ;
}
ev2_3.onmouseover = function(){
    ev2_3.style["background"] = "white" ;
}
ev2_3.onmouseout = function(){
    ev2_3.style["background"] = "transparent" ;
}
ev2_3.onclick = function(){
    open("https://www.facebook.com/pg/ingenium.iiitbh/??") ;
}
ev2_2.onclick = function(){
    open("https://www.facebook.com/ingenium.iiitbh/videos/1936575779695301/") ;
}
ev2_1.onclick = function(){
    open("https://www.instagram.com/ingenium.iiitbh/") ;
}

// ev3

ev3_1.onmouseover = function(){
    ev3_1.style["background"] = "white" ;
}
ev3_1.onmouseout = function(){
    ev3_1.style["background"] = "transparent" ;
}
ev3_2.onmouseover = function(){
    ev3_2.style["background"] = "white" ;
}
ev3_2.onmouseout = function(){
    ev3_2.style["background"] = "transparent" ;
}
ev3_3.onmouseover = function(){
    ev3_3.style["background"] = "white" ;
}
ev3_3.onmouseout = function(){
    ev3_3.style["background"] = "transparent" ;
}
ev3_3.onclick = function(){
    open("https://www.facebook.com/iiitbbsrSports7/") ;
}
ev3_2.onclick = function(){
    open("https://www.facebook.com/iiitbbsrSports7/videos/413286565878772/") ;
}
ev3_1.onclick = function(){
    open("https://www.instagram.com/krida_iiit/?hl=en") ;
}


// ev4
ev4_1.onmouseover = function(){
    ev4_1.style["background"] = "white" ;
}
ev4_1.onmouseout = function(){
    ev4_1.style["background"] = "transparent" ;
}
ev4_2.onmouseover = function(){
    ev4_2.style["background"] = "white" ;
}
ev4_2.onmouseout = function(){
    ev4_2.style["background"] = "transparent" ;
}
ev4_3.onmouseover = function(){
    ev4_3.style["background"] = "white" ;
}
ev4_3.onmouseout = function(){
    ev4_3.style["background"] = "transparent" ;
}
ev4_3.onclick = function(){
    open("https://www.facebook.com/iiitbh.mun/") ;
}
ev4_2.onclick = function(){
    open("https://iiitbhmun.in/") ;
}
ev4_1.onclick = function(){
    open("https://www.instagram.com/iiitbh_mun/") ;
}




// ev5

ev5_1.onmouseover = function(){
    ev5_1.style["background"] = "white" ;
}
ev5_1.onmouseout = function(){
    ev5_1.style["background"] = "transparent" ;
}
ev5_2.onmouseover = function(){
    ev5_2.style["background"] = "white" ;
}
ev5_2.onmouseout = function(){
    ev5_2.style["background"] = "transparent" ;
}
ev5_3.onmouseover = function(){
    ev5_3.style["background"] = "white" ;
}
ev5_3.onmouseout = function(){
    ev5_3.style["background"] = "transparent" ;
}
ev5_3.onclick = function(){
    open("#") ;
}
ev5_2.onclick = function(){
    open("#") ;
}
ev5_1.onclick = function(){
    open("#") ;
}


// ev6
ev6_1.onmouseover = function(){
    ev6_1.style["background"] = "white" ;
}
ev6_1.onmouseout = function(){
    ev6_1.style["background"] = "transparent" ;
}
ev6_2.onmouseover = function(){
    ev6_2.style["background"] = "white" ;
}
ev6_2.onmouseout = function(){
    ev6_2.style["background"] = "transparent" ;
}
ev6_3.onmouseover = function(){
    ev6_3.style["background"] = "white" ;
}
ev6_3.onmouseout = function(){
    ev6_3.style["background"] = "transparent" ;
}
ev6_3.onclick = function(){
    open("https://www.facebook.com/iiit.fats/") ;
}
ev6_2.onclick = function(){
    open("#") ;
}
ev6_1.onclick = function(){
    open("https://www.instagram.com/aakanksh_iiit/?hl=en") ;
}




// ev7
ev7_1.onmouseover = function(){
    ev7_1.style["background"] = "white" ;
}
ev7_1.onmouseout = function(){
    ev7_1.style["background"] = "transparent" ;
}
ev7_2.onmouseover = function(){
    ev7_2.style["background"] = "white" ;
}
ev7_2.onmouseout = function(){
    ev7_2.style["background"] = "transparent" ;
}
ev7_3.onmouseover = function(){
    ev7_3.style["background"] = "white" ;
}
ev7_3.onmouseout = function(){
    ev7_3.style["background"] = "transparent" ;
}
ev7_1.onclick = function(){
    
    open("https://www.instagram.com/photogeeks.iiit/?hl=en") ;
}
ev7_2.onclick = function(){
    open("https://www.youtube.com/watch?v=GwZr4C2TEjk") ;
}
ev7_3.onclick = function(){
    open("https://www.facebook.com/ThePhotoGeeks/?ref=br_rs") ;
}


// ev8
ev8_1.onmouseover = function(){
    ev8_1.style["background"] = "white" ;
}
ev8_1.onmouseout = function(){
    ev8_1.style["background"] = "transparent" ;
}
ev8_2.onmouseover = function(){
    ev8_2.style["background"] = "white" ;
}
ev8_2.onmouseout = function(){
    ev8_2.style["background"] = "transparent" ;
}
ev8_3.onmouseover = function(){
    ev8_3.style["background"] = "white" ;
}
ev8_3.onmouseout = function(){
    ev8_3.style["background"] = "transparent" ;
}
ev8_3.onclick = function(){
    open("https://www.facebook.com/advaita.iiit") ;
}
ev8_2.onclick = function(){
    open("https://www.youtube.com/channel/UCkULTsUj0_Ukm9DWOtin5yw") ;
}
ev8_1.onclick = function(){
    open("https://www.instagram.com/advaita_iiitbh/?hl=en") ;
}








}



