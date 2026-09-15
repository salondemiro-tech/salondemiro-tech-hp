(function(){
  var h=document.getElementById("hamb"),n=document.getElementById("nav");
  if(!h||!n)return;
  h.addEventListener("click",function(){h.classList.toggle("open");n.classList.toggle("show");});
  n.addEventListener("click",function(e){
    var t=e.target;
    if(t.classList.contains("nl")||t.classList.contains("btn")){
      h.classList.remove("open");n.classList.remove("show");
    }
  });
})();
