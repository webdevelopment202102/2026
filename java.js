/*global document, alert, console, remove, checker*/
/* jslint plusplus: true, evil:true*/
//*************************************************************************************************************

var Items = Array.from(document.querySelectorAll('.slidercontainer img'));// 1 - get array 

var  slidescount = Items.length; // 2 - get length

var  currentslide = 1;  // 3 - get number 1

var  slidenumber = document.getElementById('slidernumber'); // 4 - number 1 of 7

var  prevbutton = document.getElementById('prev');// 5 - prev 

var  nextbutton = document.getElementById('next');// 6 - next 







//*************************************************************************************************************

var ulelement = document.createElement('ul');// 7 - creat ul  

ulelement.setAttribute('id', "ulululul");// 8 - set id im the above created ul 

var i;

for (i = 1; i <= slidescount; i = i + 1) { // 9 - loop for the imgs length witch  is 7
    
    var lielement = document.createElement('li');// 10 - loop the imges = craeted li 
    
    lielement.setAttribute('data-index', i);  // 11 - index into the li from 0 to 6
    
    lielement.appendChild(document.createTextNode(i)); // 12 - put dataindex inside the li textnode 
     
    ulelement.appendChild(lielement); // 13 - append the li into the ul 
    
}
var refear = document.getElementById('refear').appendChild(ulelement); // 14 - append the ul into the dive (reafear)









//*************************************************************************************************************

var createdul = document.getElementById('ulululul'); // 15 - get the id of created ul 

var mylists = Array.from(document.querySelectorAll('#ulululul li')); // 16 - get the li insdie the ul

var o;

for (o = 0; o < mylists.length; o++) {  
    
            // 17 - loop for the li - and every click on the li get its dataindex inside the currentslide ++ 
    
    
    mylists[o].onclick = function () {
        
        'use strict';
        
        currentslide = parseInt(this.getAttribute('data-index')); // 18 - parsInt to make the dataindex is number  
        
        checker(); // 19 - the main function 
        
    };
}

checker(); // 19 - the main function even if i did not click












//*************************************************************************************************************

// 20 - every click on next button  if it has disabled do not work -- else get the next picture and main function
nextbutton.onclick = function () {
    'use strict';
    if (nextbutton.classList.contains('disabled')) {
        return false;
    } else {
        currentslide++;
        checker();
    }
};

// 20 - every click on prev button if it has disabled do not work -- else get the prev picture and main function
prevbutton.onclick = function () {
    'use strict';
    if (prevbutton.classList.contains('disabled')) {
        return false;
    } else {
        currentslide--;
        checker();
    }
};









//*************************************************************************************************************

/* 21 - the checker function is makeing 

[a] insdie the slidenumber textcontent = {currentslide ++1 }    +    {slidescount = 7}

[b] remove function 

[c] the first img          = 0   has class active [ opacity 1 ]

[d] the children of the ul = 0   has class active [ disabled ]

[f] if the current slide   = 1            disabled the prevbutton 
[f] if the current slide   = slidescount  disabled the nextbutton 

*/
function checker() {
    'use strict';
    
    slidenumber.textContent =(currentslide) + ' of ' + (slidescount);
    
    remove();
    
    Items[currentslide - 1].classList.add('active');
    
    ulelement.children[currentslide - 1].classList.add('active');
    
    
    
    if (currentslide === 1) {
        prevbutton.classList.add('disabled');
    } else {
        prevbutton.classList.remove('disabled');
    }
    
    
    
    if (currentslide === slidescount) {
        nextbutton.classList.add('disabled');
    } else {
        nextbutton.classList.remove('disabled');
    }
}


// 22 - the remove function is makeing the items{imges}       opacity 0    excapt the one i clicked
// 22 - the remove function is makeing the mylists{li liste}  un active    excapt the one i clicked
function remove() { 
    'use strict';
    Items.forEach(function (items) {
        items.classList.remove('active');
    });
    mylists.forEach(function (lists) {
        lists.classList.remove('active');
    });
}