/* ==========================
   TYPING ANIMATION
========================== */


const typingText = document.getElementById("typing");


const words = [

    "Software Developer",

    "Cybersecurity Enthusiast",

    "Database Designer",

    "Problem Solver",

    "Technology Innovator"

];


let wordIndex = 0;

let letterIndex = 0;

let deleting = false;



function typingEffect(){


    let currentWord = words[wordIndex];



    if(!deleting){


        typingText.textContent =

        currentWord.substring(0, letterIndex++);



        if(letterIndex > currentWord.length){


            deleting = true;


            setTimeout(typingEffect,1500);


            return;


        }


    }


    else{


        typingText.textContent =

        currentWord.substring(0, letterIndex--);



        if(letterIndex < 0){


            deleting = false;


            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex = 0;

            }


        }


    }



    setTimeout(typingEffect,100);


}


typingEffect();









/* ==========================
 DARK / LIGHT MODE
========================== */


const themeButton =

document.getElementById("theme-toggle");



themeButton.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");



    if(document.body.classList.contains("light-mode")){


        themeButton.innerHTML="☀️";


    }

    else{


        themeButton.innerHTML="🌙";


    }


});









/* ==========================
 PROJECT FILTERING
========================== */



function filterProjects(category){


    const projects =

    document.querySelectorAll(".project-card");



    projects.forEach(project=>{


        if(category === "all"){


            project.style.display="block";


        }


        else if(project.classList.contains(category)){


            project.style.display="block";


        }


        else{


            project.style.display="none";


        }



    });


}









/* ==========================
 SCROLL ANIMATION
========================== */


const sections =

document.querySelectorAll(".section");




window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        const position =

        section.getBoundingClientRect().top;



        const screenHeight =

        window.innerHeight / 1.3;



        if(position < screenHeight){


            section.style.opacity="1";


            section.style.transform="translateY(0)";


        }



    });


});








/* ==========================
 ACTIVE NAVIGATION
========================== */


const navLinks =

document.querySelectorAll(".nav-links a");




window.addEventListener("scroll",()=>{


    let current="";



    sections.forEach(section=>{


        const sectionTop =

        section.offsetTop - 150;



        if(window.scrollY >= sectionTop){


            current = section.id;


        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");



        if(link.getAttribute("href")
        === "#" + current){


            link.classList.add("active");


        }



    });



});









/* ==========================
 BACK TO TOP BUTTON
========================== */



const topButton =

document.createElement("button");



topButton.innerHTML="↑";



topButton.className="top-button";



document.body.appendChild(topButton);





window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topButton.style.display="block";


    }

    else{


        topButton.style.display="none";


    }


});





topButton.addEventListener("click",()=>{


    window.scrollTo({


        top:0,


        behavior:"smooth"


    });


});









/* ==========================
 DYNAMIC FOOTER YEAR
========================== */


const footer =

document.querySelector("footer p");



const year =

new Date().getFullYear();



footer.innerHTML =

`© ${year} Tshenolo Peele | Virtual CV Portfolio`;