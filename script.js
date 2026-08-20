

/*=====================================
        GLOBAL VARIABLES
=====================================*/

const pages = document.querySelectorAll(".page");

const loadingScreen =
document.getElementById("loadingScreen");

const loadingFill =
document.querySelector(".loadingFill");

const bgMusic =
document.getElementById("bgMusic");

const birthdayVideo =
document.getElementById("birthdayVideo");

const bunny =
document.getElementById("bunny");

let currentPage = 0;

let enteredCode = "";


/*=====================================
        SHOW PAGE
=====================================*/

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

    currentPage=index;

}


/*=====================================
        LOADING SCREEN
=====================================*/

let progress=0;

const loadingInterval=setInterval(()=>{

    progress++;

    loadingFill.style.width=

    progress+"%";

    if(progress>=100){

        clearInterval(loadingInterval);

        setTimeout(()=>{

            loadingScreen.style.opacity="0";

            setTimeout(()=>{

                loadingScreen.style.display="none";

                showPage(0);

            },500);

        },300);

    }

},35);


/*=====================================
        BUNNY DANCE
=====================================*/

function bunnyDance(){

    bunny.style.animation="none";

    bunny.offsetHeight;

    bunny.style.animation=

    "happyDance .6s ease 4";

}


/*=====================================
        FLOATING EFFECT
=====================================*/

function createFloating(){

    const items=[

        "💜",

        "✨",

        "🌸"
        

    ];

    const span=

    document.createElement("span");

    span.innerHTML=

    items[Math.floor(

    Math.random()*items.length)];

    span.style.position="fixed";

    span.style.left=

    Math.random()*100+"vw";

    span.style.bottom="-40px";

    span.style.fontSize=

    (18+Math.random()*10)+"px";

    span.style.pointerEvents="none";

    span.style.zIndex="-1";

    span.style.transition="5s linear";

    document.body.appendChild(span);

    requestAnimationFrame(()=>{

        span.style.transform=

        `translateY(-120vh)
        rotate(${360+Math.random()*360}deg)`;

        span.style.opacity="0";

    });

    setTimeout(()=>{

        span.remove();

    },5000);

}

setInterval(createFloating,900);
/*=====================================
        PASSCODE VARIABLES
=====================================*/

const dots =
document.querySelectorAll(".dot");

const numberButtons =
document.querySelectorAll(".num");

const deleteBtn =
document.getElementById("deleteBtn");

const unlockBtn =
document.getElementById("unlockBtn");

const wrongText =
document.getElementById("wrongText");

const PASSCODE = "1101";


/*=====================================
        UPDATE DOTS
=====================================*/

function updateDots(){

    dots.forEach((dot,index)=>{

        if(index<enteredCode.length){

            dot.classList.add("active");

        }else{

            dot.classList.remove("active");

        }

    });

}


/*=====================================
        NUMBER BUTTONS
=====================================*/

numberButtons.forEach(button=>{

    button.addEventListener("click",()=>{

        if(enteredCode.length>=4) return;

        enteredCode+=button.innerText;

        updateDots();

        wrongText.innerText="";

    });

});


/*=====================================
        DELETE BUTTON
=====================================*/

deleteBtn.addEventListener("click",()=>{

    enteredCode=

    enteredCode.slice(0,-1);

    updateDots();

});


/*=====================================
        SHAKE CARD
=====================================*/

function shakeCard(){

    const card=

    document.querySelector("#passcodePage .glassCard");

    card.classList.add("shake");

    setTimeout(()=>{

        card.classList.remove("shake");

    },450);

}


/*=====================================
        UNLOCK BUTTON
=====================================*/

unlockBtn.addEventListener("click",()=>{

    if(enteredCode!==PASSCODE){

        wrongText.innerText=

        "Wrong Passcode (type 1101)";

        enteredCode="";

        updateDots();

        shakeCard();

        return;

    }

    wrongText.innerText="";

    bunnyDance();

    unlockBtn.disabled=true;

    unlockBtn.innerHTML="💋";

    setTimeout(()=>{

        showPage(1);

        bgMusic.currentTime=0;

        bgMusic.play().catch(()=>{});

    },1200);

});


/*=====================================
        HAPPY BIRTHDAY PAGE
=====================================*/

const birthdayNextBtn =
document.getElementById("birthdayNextBtn");

birthdayNextBtn.addEventListener("click",()=>{

    showPage(2);

});
/*=====================================
            CAKE PAGE
=====================================*/

const blowBtn =
document.getElementById("blowBtn");

const flame =
document.getElementById("flame");

const smoke =
document.getElementById("smoke");

const confettiContainer =
document.getElementById("confettiContainer");


blowBtn.addEventListener("click",()=>{

    blowBtn.disabled=true;

    blowBtn.innerText="Wish Made 💜";

    /* Flame Off */

    flame.style.display="none";

    /* Smoke */

    smoke.innerHTML="";

    const puff=document.createElement("div");

    puff.className="smokePuff";

    smoke.appendChild(puff);

    /* Confetti */

    createConfetti();

    setTimeout(()=>{

        showPage(3);

    },2500);

});


/*=====================================
        CONFETTI
=====================================*/

function createConfetti(){

    const colors=[

        "#ff4fd8",
        "#ffffff",
        "#ffd166",
        "#c77dff",
        "#f72585"

    ];

    for(let i=0;i<90;i++){

        const piece=

        document.createElement("div");

        piece.className="confetti";

        piece.style.left=

        Math.random()*100+"%";

        piece.style.background=

        colors[Math.floor(

        Math.random()*colors.length)];

        piece.style.animationDelay=

        Math.random()*0.8+"s";

        confettiContainer.appendChild(piece);

        setTimeout(()=>{

            piece.remove();

        },3500);

    }

}


/*=====================================
            PAYESH PAGE
=====================================*/

const feedBtn =
document.getElementById("feedBtn");

const spoon =
document.getElementById("spoon");

feedBtn.addEventListener("click",()=>{

    feedBtn.disabled=true;

    feedBtn.innerText="done 💜";

    /* Spoon Animation */

    spoon.style.transform=

    "translate(-95px,-80px) rotate(-45deg)";

    setTimeout(()=>{

        spoon.style.transform=

        "translate(-10px,-20px) rotate(-15deg)";

    },900);

    setTimeout(()=>{

        showPage(4);

    },2200);

});
/*=====================================
            FLOWER PAGE
=====================================*/

const flowerBtn =
document.getElementById("flowerBtn");

const bouquet =
document.getElementById("bouquet");

const petalContainer =
document.getElementById("petalContainer");

const sparkleContainer =
document.getElementById("sparkleContainer");

flowerBtn.addEventListener("click",()=>{

    flowerBtn.disabled=true;

    flowerBtn.innerText="For You 💗᪲᪲᪲";

    bouquet.classList.add("pop");

    createPetals();

    createSparkles();

    setTimeout(()=>{

        showPage(5);

    },2200);

});


/*=====================================
            PETALS
=====================================*/

function createPetals(){

    for(let i=0;i<35;i++){

        const petal=document.createElement("img");

        petal.src="images/petals.png";

        petal.className="petal";

        petal.style.left="50%";

        petal.style.top="50%";

        petal.style.setProperty(

        "--x",

        (Math.random()*320-160)+"px");

        petal.style.setProperty(

        "--y",

        (Math.random()*260-130)+"px");

        petalContainer.appendChild(petal);

        setTimeout(()=>{

            petal.remove();

        },1000);

    }

}


/*=====================================
            SPARKLES
=====================================*/

function createSparkles(){

    for(let i=0;i<25;i++){

        const spark=document.createElement("img");

        spark.src="images/sparkle.png";

        spark.className="spark";

        spark.style.left="50%";

        spark.style.top="50%";

        spark.style.setProperty(

        "--x",

        (Math.random()*240-120)+"px");

        spark.style.setProperty(

        "--y",

        (Math.random()*240-120)+"px");

        sparkleContainer.appendChild(spark);

        setTimeout(()=>{

            spark.remove();

        },900);

    }

}


/*=====================================
            BALLOON GAME
=====================================*/

const balloons =
document.querySelectorAll(".balloon");

const balloonMessage =
document.getElementById("balloonMessage");

let poppedCount=0;

const words=[];

balloons.forEach(balloon=>{

    balloon.addEventListener("click",()=>{

        if(balloon.classList.contains("pop")) return;

        balloon.classList.add("pop");

        words.push(balloon.dataset.word);

        poppedCount++;

        balloonMessage.innerText=

        words.join(" ");

        if(poppedCount===4){

            setTimeout(()=>{

                showPage(6);

            },1800);

        }

    });

});
/*=====================================
            PHOTO PAGE
=====================================*/

const photoNextBtn =
document.getElementById("photoNextBtn");

photoNextBtn.addEventListener("click",()=>{

    showPage(7);

    startTyping();

});


/*=====================================
            LETTER PAGE
=====================================*/

const typingText =
document.getElementById("typingText");

const letterPaper =
document.getElementById("letterPaper");

const letterNextBtn =
document.getElementById("letterNextBtn");

/* Replace YOUR NAME with the person's name */

const letterMessage = `

Dear <span class="specialName">Anaf<3</span>

Happiest Birthday!!

Today is all about you and yourself...

I hope your smile never fades.
May every dream come true.
May happiness always stay
with you.


and yeah I don't know if you'll like this surprise of mine or not. It took me about 45 days to make it. You may not like it..


You are very strong and dedicated...I hope you'll reach that peak you wanted to.. u can do it... don't worry.. don't push your luck... don't be upset..it will happen however you want..be faithful on your creator🫶🏻



Thank you for being such
a wonderful person.

Take care of yourself.

Stay healthy.

Stay happy.

Keep shining forever. ✨💜

maybe we can't be together bt i hope we will 🫶🏻

Good bye  :3
`;


/*=====================================
            AUTO TYPING
=====================================*/

function startTyping(){

    typingText.innerHTML="";

    letterNextBtn.style.display="none";

    let i=0;

    const typing=setInterval(()=>{

        typingText.innerHTML=

        letterMessage.substring(0,i);

        letterPaper.scrollTop=

        letterPaper.scrollHeight;

        i++;

        if(i>letterMessage.length){

            clearInterval(typing);

            letterNextBtn.style.display=

            "inline-block";

        }

    },40);

}


/*=====================================
        LETTER -> VIDEO
=====================================*/

letterNextBtn.addEventListener("click",()=>{

    showPage(8);

    /* Stop Birthday Music */

    bgMusic.pause();

    bgMusic.currentTime=0;

    birthdayVideo.play().catch(()=>{});

});


/*=====================================
            VIDEO PAGE
=====================================*/

birthdayVideo.addEventListener("ended",()=>{

    showPage(9);

});


/*=====================================
            FINAL PAGE
=====================================*/

const loveBtn =
document.getElementById("loveBtn");

const ofcBtn =
document.getElementById("ofcBtn");

loveBtn.addEventListener("click",()=>{

    showPage(10);

});

ofcBtn.addEventListener("click",()=>{

    showPage(10);

});


/*=====================================
        GOODBYE PAGE
=====================================*/

const closeBtn =
document.getElementById("closeBtn");

closeBtn.addEventListener("click",()=>{

    alert("Thank You darlin💜");

    window.location.reload();

});


/*=====================================
            FIREBASE
=====================================*/


