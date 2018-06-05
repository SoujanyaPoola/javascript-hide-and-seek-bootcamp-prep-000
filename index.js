/*function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}
 function increaseRankBy(n){
   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
   for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = parseInt(lis[i].innerHTML)+(n) ;
 }
 }*/
 function deepestChild(){
   const div = document.getElementById("grand-node").querySelectorAll("div") ;
   var test ;
   for(let i = 0; i < div.length-1; i++){
     test = div[i].querySelector("div");
   }
   return test;
   
 }
 
 function getFirstSelector(selector){
   return document.querySelector(selector);
 }
 
 function nestedTarget(){
   return document.getElementById("nested").querySelector(".target");
 }
 
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}


 
 
 
 
 
 