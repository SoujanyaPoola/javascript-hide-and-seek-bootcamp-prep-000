
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
  
  for (let i = 0; i < rankedLists.length;  i++) {
    let children = rankedLists[i].children

    for (let j = 0; j < children.length;  j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}


 
 
 
 
 
 