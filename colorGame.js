var numSquares=6;
var colors=generateRandomColor(numSquares);
var answer=pickColor();
var main=document.querySelector("#main");
var msg=document.querySelector("#msg");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var squares=document.querySelectorAll(".square");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");
main.textContent=answer;

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquares=3;
   colors=generateRandomColor(numSquares);
   answer=pickColor();
   main.textContent=answer;
   for(var i=0;i<squares.length;i++){
       if(colors[i]){
           squares[i].style.backgroundColor=colors[i];
       }
       else{
           squares[i].style.display="none";
       }
   }
   msg.textContent="";
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColor(numSquares);
    answer=pickColor();
    main.textContent=answer;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
    msg.textContent="";
});

reset.addEventListener("click",function(){
    colors=generateRandomColor(numSquares);
    answer=pickColor();
    main.textContent=answer;
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        reset.textContent="NEW COLORS";
    }
    h1.style.backgroundColor="rgb(32, 128, 218)";
    msg.textContent="";
});

for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;
        if(clickedcolor===answer){
            msg.textContent="Correct!!";
            changeAll(clickedcolor);
            h1.style.backgroundColor=answer;
            reset.textContent="PLAY AGAIN?"
            msg.textContent="Correct!!";
        }
        else{
            this.style.backgroundColor="#232323";
            msg.textContent="TRY AGAIN!!";
        }
    });
}

function changeAll(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
} 

function pickColor(){
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomColor())
    }
    return arr;
}

function randomColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}