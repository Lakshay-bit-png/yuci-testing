let items2 = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    let active2 = 0;
    function loadShow(){
        let stt = 0;
        items2[active2].style.transform = `none`;
        items2[active2].style.zIndex = 1;
        items2[active2].style.filter = 'none';
        items2[active2].style.opacity = 1;
        for(var i = active2 + 1; i < items2.length; i++){
            stt++;
            items2[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items2[i].style.zIndex = -stt;
            items2[i].style.filter = 'blur(5px)';
            items2[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for(var i = active2 - 1; i >= 0; i--){
            stt++;
            items2[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items2[i].style.zIndex = -stt;
            items2[i].style.filter = 'blur(5px)';
            items2[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();
    next.onclick = function(){
        active2 = active2 + 1 < items2.length ? active2 + 1 : active2;
        loadShow();
    }
    prev.onclick = function(){
        active2 = active2 - 1 >= 0 ? active2 - 1 : active2;
        loadShow();
    }
    $('input').on('change', function() {
      $('body').toggleClass('blue');
    });
    


