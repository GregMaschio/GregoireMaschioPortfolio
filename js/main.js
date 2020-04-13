$(document).ready(function(){
    $(".progress-bar").each(function(){
        console.log(this);

      var percentage = parseInt($("p",this).html());
      if(percentage > 0){
        $(this).animate({'width':''+percentage+'%'}, 800);
      }else{
        $(this).css({'color':'black', 'background':'none'}, 800);
      }
    })
    
    //Cette section de code sert à faire le horizontal scrolling de mes projets. J'ai cherché pendant des heures mais impossible de trouver comment empêcher la page de remonter verticalement quand je scroll horizontalement. Tanpis.
    let projets = document.querySelectorAll('#Projets')[0];
    console.log(projets);
    let checkActive = false;

    projets.addEventListener('mouseenter',e=>{
      console.log("IN");
      checkActive = true;
    });
    projets.addEventListener('mouseleave',e=>{
      console.log("OUT");
      checkActive = false;
    });

    window.addEventListener('wheel', function(e) {
      e.preventDefault;
      if (e.deltaY > 0 && checkActive === true) projets.scrollLeft += 100;
      else if(checkActive === true){projets.scrollLeft -= 100}; 
    });
})