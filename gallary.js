


for(var i=0;i<91;i++){
    var newDiv = document.createElement('div');
    newDiv.classList.add('default');
   
    var img=document.createElement('img')
    img.src='./static/fwdyuciphotos/'+(i+1)+'.jpg';
    img.classList.add('img')
    
    newDiv.append(img);
    
    


    document.querySelector('.mentors').appendChild(newDiv)
}
for(var j=0;j<40;j++){
    var newdiv=document.querySelectorAll(".default")[j]
    
    var k=j;
    newdiv.setAttribute("onmouseover","{func('" + k + "')}")
    newdiv.setAttribute("onmouseleave","{func2('" + k + "')}")
}
