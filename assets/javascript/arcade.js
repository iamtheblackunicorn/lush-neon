function openNav() {
  let myUlElement = document.getElementById('nav');
  let myUlElementStyle = window.getComputedStyle(myUlElement, null).getPropertyValue('display');
  document.getElementById('nav').style.display = "block";
}
function closeNav() {
  let myUlElement = document.getElementById('nav');
  let myUlElementStyle = window.getComputedStyle(myUlElement, null).getPropertyValue('display');
  document.getElementById('nav').style.display = "none";
}
function modHeadingTwo(){
  let headingTwo = document.getElementsByTagName("h2");
  for(itemTwo of headingTwo){
    itemTwo.innerHTML = "// " + itemTwo.innerHTML;
  }
  let headingThree = document.getElementsByTagName("h3");
  for(itemThree of headingThree){
    itemThree.innerHTML = "// " + itemThree.innerHTML;
  }
  let headingFour = document.getElementsByTagName("h4");
  for(itemFour of headingFour){
    itemFour.innerHTML = "// " + itemFour.innerHTML;
  }
  let headingFive = document.getElementsByTagName("h5");
  for(itemFive of headingFive){
    itemFive.innerHTML = "// " + itemFive.innerHTML;
  }
  let spanSubtitle = document.getElementById("sub");
  spanSubtitle.innerHTML = "// " + spanSubtitle.innerHTML;
}
modHeadingTwo();
