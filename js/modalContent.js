// ==================== MODAL CONTENT ====================
const modalContent = {
  whoAmIButton: 
  "<h2>I'm Joel. Hi :) 👋</h2>" +
  "<p style='text-align: justify;'>" +
  "37 years old (soon 38), married, and proud dad of a 1.5-year-old boy. I've always " + 
  "been drawn to technology – I built my very first computer when I was 13, and " + 
  "ever since then I've spent a big part of my life in front of screens; exploring, " + 
  "learning, and creating. " + 
  "Today, that curiosity has grown into a strong drive to become a professional software developer." +
  "</p>" +
  "<p style='text-align: justify;'>When I'm not coding, you'll usually find me enjoying time with family and friends, " + 
  "or diving into my hobbies:</p>" +
  "<ul style='list-style-type: circle; padding-left: 2rem;'>" +
      "<li><strong>Board games</strong> (yes, I love them!)</li>" +
      "<li>Computer games</li>" +
      "<li>Reading</li>" +
      "<li>Writing</li>" +
      "<li>Chess</li>" +
  "</ul>" +
  "<p style='text-align: justify;'><em>Oh, did I mention board games?</em></p>" +
  "<p style='text-align: justify;'>One of my dreams has always been to create my own world – whether as a book, a game, or a roleplaying adventure. " +
  "That creative spark is something I carry with me into programming as well. " +
  "I see programming as both a craft and a puzzle, and I'm excited to keep building my skills and turning my passion into a career.</p>",
  
  portfolioButton: 

  "<p style='text-align: center; font-size: 1.1rem; color: #666;'><em>I'm working on it, ok? 😅</em></p>" +
  "<p style='text-align: justify; margin-top: 1rem;'>Check back soon for exciting projects showcasing my journey in software development!</p>",
  
  qualificationButton: 

  "<p style='font-weight: 500; color: #555; margin-bottom: 1rem;'>Skills and Education:</p>" +
  "<ul style='list-style-type: none; padding-left: 0;'>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>☕ <strong>Java</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>🍃 <strong>Spring Framework</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>🐍 <strong>Python</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>⚡ <strong>JavaScript (ES6+)</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>🎨 <strong>HTML5 & CSS3</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>🔄 <strong>Agile Methodologies</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>📦 <strong>Git & GitHub Flow</strong></li>" +
      "<li style='padding: 0.5rem 0; border-bottom: 1px solid #eee;'>🐳 <strong>Docker</strong></li>" +
      "<li style='padding: 0.5rem 0;'>🗄️ <strong>SQL & Databases</strong></li>" +
  "</ul>",
};

// ==================== MODAL EVENT LISTENER ====================
document.addEventListener("click", function(event) {
  const btn = event.target.closest(".btn");
  if (btn) {
    const modalTitleEl = document.getElementById("modal-Title-Id");
    const modalBodyEl = document.getElementById("modalBodyId");
    
    if (btn.id === "whoAmIButton") {
      modalTitleEl.textContent = "Who Am I?";
      modalBodyEl.innerHTML = modalContent.whoAmIButton;
    } else if (btn.id === "portfolioButton") {
      modalTitleEl.textContent = "Portfolio";
      modalBodyEl.innerHTML = modalContent.portfolioButton;
    } else if (btn.id === "qualificationButton") {
      modalTitleEl.textContent = "Qualifications";
      modalBodyEl.innerHTML = modalContent.qualificationButton;
    }
  }
});

// ==================== RESIZE ====================
window.addEventListener("resize", function() {
  if (window.innerWidth < 735 && window.innerWidth > 510) {
    document.querySelectorAll(".fixaLayout").forEach(el => {
      el.classList.add("row");
      el.classList.remove("col");
    });
  } else if (window.innerWidth >= 735) {
    document.querySelectorAll(".fixaLayout").forEach(el => {
      el.classList.add("col");
      el.classList.remove("row");
    });
  }
});
