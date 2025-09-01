
document.addEventListener("click", function(event) {
    const btn = event.target.closest(".btn");
    if (btn) {
        if (btn.id === "whoAmIButton") {;
            document.getElementById("modalBodyId").innerHTML = modalContent.whoAmIButton;
        } else if (btn.id === "portfolioButton") {
            document.getElementById("modalBodyId").innerHTML = modalContent.portfolioButton;
        } else if (btn.id === "qualificationButton") {
            document.getElementById("modalBodyId").innerHTML = modalContent.qualificationButton;
            document.getElementById("modalBodyId").style.width = "30rem";
        }
    }
});


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
    portfolioButton: "<h2>Portfolio</h2><p>Projekt och länkar...</p>",
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




window.addEventListener("resize", function() {
    if (window.innerWidth < 735 && window.innerWidth > 510) {
        document.getElementById("flavorText").innerHTML = "<i> - Coffee, code, and creativity. </i>";
        document.querySelectorAll(".fixaLayout").forEach(el => {
            el.classList.add("row");
            el.classList.remove("col");
        });
    } else if (window.innerWidth < 510) {
        document.getElementById("flavorText").innerHTML = "";
    }
    
    else if (window.innerWidth >= 735) {
        document.getElementById("flavorText").innerHTML = "<i> - Aspiring software developer, fueled by coffee, code, and creativity. </i>";
        document.querySelectorAll(".fixaLayout").forEach(el => {
            el.classList.add("col");
            el.classList.remove("row");
        });
    }
});

