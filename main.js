let unhappy = document.getElementById("unhappy");
let neutral = document.getElementById("neutral");
let satisfied = document.getElementById("satisfied");
let send = document.getElementById("send");
let main = document.getElementById("main");
let eyes = document.getElementById("eyes");
let unhappyup = document.getElementById("upun");
let neutralup = document.getElementById("netup");
let satisfiedup = document.getElementById("satup");


unhappy.addEventListener('click',()=>{
    send.innerHTML="Thanks for feedback";
    main.style.backgroundColor="red";
    eyes.style.display="none";
    unhappyup.style.display="block";
    neutralup.style.display="none";
    satisfiedup.style.display="none";
    
});
neutral.addEventListener('click',()=>{
    send.innerHTML="Thanks for feedback";
    main.style.backgroundColor="blue";
    eyes.style.display="none";
    unhappyup.style.display="none";
    neutralup.style.display="block";
    satisfiedup.style.display="none";
    
});
satisfied.addEventListener('click',()=>{
    send.innerHTML="Thanks for feedback";
    main.style.backgroundColor="green";
    eyes.style.display="none";
    unhappyup.style.display="none";
    neutralup.style.display="none";
    satisfiedup.style.display="block";
    
})