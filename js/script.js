
//Eventlistener som hanterar knapptryckningar på modals, och ändrar innehållet i modalen beroende på vilken som trycks 
document.addEventListener("click", function(event) {
    const btn = event.target.closest(".btn");
    if (btn) {
        if (btn.id === "whoAmIButton") {;
            document.getElementById("modalBodyId").innerHTML = modalContent.whoAmIButton;
            document.getElementById("modalBodyId").style.width = "";
        } else if (btn.id === "portfolioButton") {
            document.getElementById("modalBodyId").innerHTML = modalContent.portfolioButton;
            document.getElementById("modalBodyId").style.minWidth = "20rem";
        } else if (btn.id === "qualificationButton") {
            document.getElementById("modalBodyId").innerHTML = modalContent.qualificationButton;
            document.getElementById("modalBodyId").style.minWidth = "20rem";
        }
    }
});

// Innehåll för modaler i JSON format (hade kunna köra in detta direkt i koden ovanför, men ser lite mer clean ut att separera dem)
const modalContent = {
    whoAmIButton: 
    "<center><h2>I'm Joel. Hi :) 👋</h2><p></center>" +
    "37 years old (soon 38), married, and proud dad of a 1.5-year-old boy. I’ve always" + 
    " been drawn to technology – I built my very first computer when I was 13, and" + 
    " ever since then I’ve spent a big part of my life in front of screens; exploring," + 
    " learning, and creating." + 
    " Today, that curiosity has grown into a strong drive to become a professional software developer." +
    "<br> When I’m not coding, you’ll usually find me enjoying time with family and friends," + 
    " or diving into my hobbies:" +
    "<br><br>" +
    "<ul>" +
        "<li>Board games</li>" +
        "<li>Computer games</li>" +
        "<li>Reading</li>" +
        "<li>Board games</li>" +
        "<li>Writing</li>" +
        "<li>Chess</li>" +
        "<li>Board games</li>" +
    "</ul>" +
    
    "Oh, did I mention board games?" +
    "<br><br>One of my dreams has always been to create my own world – whether as a book, a game, or a roleplaying adventure. That creative spark is something I carry with me into programming as well." +
    "<br>I see programming as both a craft and a puzzle, and I’m excited to keep building my skills and turning my passion into a career." +
    "</p>",
    portfolioButton: "<h2><center>Portfolio</center></h2><p>I'm working on it ok?</p>",
    qualificationButton: 
    "<center><h2>Qualifications</h2></center>" +
    "<p>Skills and education:</p>" +
    "<ul>" +
        "<li>Java</li>" +
        "<li>Spring Framework</li>" +
        "<li>Python</li>" +
        "<li>JavaScript (ES6+)</li>" +
        "<li>HTML5 & CSS3</li>" +
        "<li>Agile</li>" +
        "<li>Git & GitHub Flow</li>" +
        "<li>Docker</li>" +
        "<li>SQL & Databases</li>" +
    "</ul>",

};



// Funktion som hanterar layout baserat på fönsterbredd
function checkLayout() {
    const flavor = document.getElementById("flavorText");
    if (!flavor) {
        return; 
    }
    const width = window.innerWidth;

   
    if (width < 510) {
        flavor.innerHTML = "";
    } else if (width < 735) {
        flavor.innerHTML = "<i> - Coffee, code, and creativity. </i>";
    } else {
        flavor.innerHTML = "<i> - Aspiring software developer, fueled by coffee, code, and creativity. </i>";
    }

   
    const stack = width < 735;
    document.querySelectorAll(".fixaLayout").forEach(el => {
        el.classList.toggle("row", stack);
        el.classList.toggle("col", !stack);
    });
}

//ser till att funktionen körs när DOM har laddat färdigt (med tanke på defer i html koden så behövs inte domcontentloaded)
checkLayout();
//kollar aktivt efter förändringar i fönstrets storlek och anpassar layouten efter storlek
window.addEventListener("resize", checkLayout);

