let menu= document.querySelector(".menu")
let togBtn= document.querySelector("#toggler")
togBtn.addEventListener("click",function() {
    menu.classList.toggle("active");
});




/* progress bar logic */
const cirProgress = document.querySelectorAll(".progress");  // target all progress classes

Array.from(cirProgress).forEach(item => {
    const proVal = item.getAttribute("data-value");  // read from data-value
    console.log('proVal =', proVal) // print values in console

    const inCircle = item.querySelector(".inner-circle");
    const pro = item.querySelector(".pro-val");

    let startVal = 0; // starting value
    let endVal = Number(proVal); // ending value
    let speed = 50;  // speed  of timer

    // timer
    const progress = setInterval(() => {
      startVal++;  // increment the start value by 1
      pro.textContent = `${startVal}%`; //  '${startVal}%'display the start value in circle
      pro.style.color='red'; //value color

      // adding background colors to each progress colors
      item.style.background=`conic-gradient(antiquewhite ${startVal * 3.6}deg,deepskyblue 0deg)`;

      if(startVal ===endVal) {
        clearInterval(progress);
      }
    },speed);
});


// to display current year///

document.querySelector(".yr").innerText = new Date().getFullYear();



//
