var prodOne = document.getElementById('prodOne');
var prodTwo = document.getElementById('prodTwo');
var prodThree = document.getElementById('prodThree');
var prodFour = document.getElementById('prodFour');

function prodFunHoverON(targetID,source) {
  targetID.addEventListener('mouseenter',(e)=>{
    e.target.style.opacity = '0';
    e.target.style.filter = 'blur(0.5vw)';
    setTimeout(function () {
      e.target.src = source;
      e.target.style.opacity = '1';
      e.target.style.filter = 'blur(0vw)';
    }, 150);
  });
}

function prodFunHoverOff(targetID,source) {
  targetID.addEventListener('mouseleave',(e)=>{
    e.target.style.opacity = '0';
    e.target.style.filter = 'blur(0.5vw)';
    setTimeout(function () {
      e.target.src = source;
      e.target.style.opacity = '1';
      e.target.style.filter = 'blur(0vw)';
    }, 150);
  });
}
  // prodOne
prodFunHoverON(prodOne,'assets/images/prodOneHover.png');
prodFunHoverOff(prodOne,'assets/images/prodOne.png');
  // prodTwo
prodFunHoverON(prodTwo,'assets/images/prodTwoHover.png');
prodFunHoverOff(prodTwo,'assets/images/prodTwo.png');
  // prodThree
prodFunHoverON(prodThree,'assets/images/prodThreeHover.png');
prodFunHoverOff(prodThree,'assets/images/prodThree.png');
  // prodFour
prodFunHoverON(prodFour,'assets/images/prodFourHover.png');
prodFunHoverOff(prodFour,'assets/images/prodFour.png');
