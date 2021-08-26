function $(el){
      return document.querySelector(el)
    }
    var nav = $('#nav');
    function navopen(){
      if(nav.style.height == '0px'){
          nav.style.transition = '2s'
          nav.style.height = '30%'
          nav.style.padding = '20px'
      }else{
          nav.style.transition = '2s'
          nav.style.height = '0px'
          nav.style.padding = '0px'
      }
    }