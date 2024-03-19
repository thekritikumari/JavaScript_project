let ex=document.querySelector(".ex");
let game=document.querySelector(".game");
let rule=document.querySelector(".rule");


ex.addEventListener("click", ()=>{
    game.style.display="none";
});
rule.addEventListener("click",()=>{
    game.style.display="block";
});

let bcgTriangle = document.querySelectorAll(".strline");
let gameUser = document.querySelectorAll(".human");
let computer=document.querySelectorAll(".computer");
let score=document.querySelector(".pickedScore");
let showresult=document.querySelector(".result");
let winresult=document.querySelector(".win");
let playagain=document.querySelector(".playagain");
let outercircle=document.querySelector(".outerCircle");
let computerscore=document.querySelector(".pcScore");
let yourscore=document.querySelector(".yourScore");
let nextbutton=document.querySelector(".next");
let againbutton=document.querySelector(".again");
let winImg=document.querySelector(".winImg");
let maindisplay=document.querySelector(".main");

let myscore=JSON.parse(localStorage.getItem("myscore"));
let systemscore=JSON.parse(localStorage.getItem("systemscore"));



var randomValue = Math.floor(Math.random()*3);
if(myscore){
    yourscore.innerText=myscore;
}
if(systemscore){
    computerscore.innerText=systemscore;
}

nextbutton.addEventListener("click",()=>{
    winresult.innerText="HURRAY!!";
    winresult.style.fontSize="85px";
    winresult.style.marginLeft="-7vw";
    againbutton.innerText="YOU WON THE GAME";
    againbutton.style.fontSize="42px";
    againbutton.style.marginTop="94px";
    againbutton.style.marginLeft="-100px";
    playagain.style.marginTop="186px";
    winImg.style.display="block";
    showresult.style.opacity="1";
    maindisplay.style.display="none";
})



playagain.addEventListener("click",()=>{
    window.location.reload();
})

gameUser.forEach((element,index) =>{
    element.addEventListener("click", ()=>{

        // console.log(element);
        gameUser.forEach(item => {
            item.style.display = "none";
          });
          bcgTriangle.forEach(item=>{
            item.style.display="none";
          });
        element.style.display = "block";
        element.style.marginLeft= "20vw";
        element.style.marginTop= "56vh";
        
        setTimeout(()=>{
            score.style.opacity="1";
        },700);
        setTimeout(()=>{
            computer[randomValue].style.display="block";
            computer[randomValue].style.marginLeft="71vw";
            computer[randomValue].style.marginTop="56vh";  
        },1500);
        setTimeout(()=>{
            showresult.style.opacity="1";
            if(index==0 && randomValue==1 || index==1 && randomValue==2 || index==2 && randomValue==0){
                winresult.innerText="YOU WON";
                outercircle.style.opacity="1";
                rule.style.marginLeft="78vw";
                nextbutton.style.display="block";



                count=myscore;
                count++;
                yourscore.innerText=count;
                localStorage.setItem("myscore", JSON.stringify(count));

                
            }else if(index==randomValue){
                winresult.innerText="TIE-UP";
                winresult.style.marginLeft="27px";
                playagain.innerText="REPLAY";
                againbutton.style.display="none";
                
            }else{
                winresult.innerText="YOU LOST";
                outercircle.style.opacity="1";
                outercircle.style.marginLeft="64.5vw";
                

                sum=systemscore;
                sum++;
                computerscore.innerText=sum;
                localStorage.setItem("systemscore", JSON.stringify(sum));
            }
            

        },2000);
    });
});