//боковой паралакс//

function paralax (event) {
 let layer=document.getElementsByClassName('layer');
 
 for (let i = 0; i <= layer.length; i++) {
  let speed=layer[i].getAttribute('data-speed');
  let X=event.clientX;
  layer[i].style.transform=`translateX(${X*speed/50}px)`;
  
  
 }

}

document.addEventListener('mousemove', paralax);

//анимация по клику//

let trees=document.getElementsByClassName('paralax-container__trees')[0];
let hero=document.getElementsByClassName('paralax-container__hero')[0];
let block=document.getElementsByClassName('paralax-container')[0];
let bats=document.getElementsByClassName('paralax-container__bats')[0];

let switchON=false;

function ON () {
  
    if (switchON==false) {
    trees.style.animationName='trees'
    hero.style.animationName='hero'
    bats.style.animationName='bats'
    switchON=true
  } else {
    trees.style.animationName='none'
    hero.style.animationName='none'
    bats.style.animationName='none'
    switchON=false
  }

  
}



block.addEventListener('click', ON);





