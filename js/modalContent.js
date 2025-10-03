// ==================== MODAL CONTENT ====================
const modalContent = {
  whoAmIButton:
    "<h2>I'm Joel. Hi :) 👋</h2>" +
    "<p>" +
    "37 years old (soon 38), married, and proud dad of a 1.5-year-old boy. I've always " +
    "been drawn to technology – I built my very first computer when I was 13, and " +
    "ever since then I've spent a big part of my life in front of screens; exploring, " +
    "learning, and creating. " +
    "Today, that curiosity has grown into a strong drive to become a professional software developer." +
    "</p>" +
    "<p>When I'm not coding, you'll usually find me enjoying time with family and friends, " +
    "or diving into my hobbies:</p>" +
    "<ul class='hobby-list'>" +
    "<li>Board Games</li>" +
    "<li>Computer games</li>" +
    "<li>Reading</li>" +
    "<li><i>Board games</i></li>" +
    "<li>Writing</li>" +
    "<li>Chess</li>" +
    "<li><strong>Board games</strong></li>" +
    "</ul>" +
    "<p>One of my dreams has always been to create my own world – whether as a book, a game, or a roleplaying adventure. " +
    "That creative spark is something I carry with me into programming as well. " +
    "I see programming as both a craft and a puzzle, and I'm excited to keep building my skills and turning my passion into a career.</p>",

  portfolioButton:
    "<p class='portfolio-text'><em>I'm working on it, ok? 😅</em></p>" +
    "<p>Check back soon for exciting projects showcasing my journey in software development!</p>",

  qualificationButton:
    "<p class='skills-header'>Skills and Education:</p>" +
    "<ul class='skills-list'>" +
    "<li>☕ <strong>Java</strong></li>" +
    "<li>🍃 <strong>Spring Framework</strong></li>" +
    "<li>🐍 <strong>Python</strong></li>" +
    "<li>⚡ <strong>JavaScript (ES6+)</strong></li>" +
    "<li>🎨 <strong>HTML5 & CSS3</strong></li>" +
    "<li>🔄 <strong>Agile Methodologies</strong></li>" +
    "<li>📦 <strong>Git & GitHub Flow</strong></li>" +
    "<li>🐳 <strong>Docker</strong></li>" +
    "<li>🗄️ <strong>SQL & Databases</strong></li>" +
    "</ul>",
};

// ==================== MODAL EVENT LISTENER ====================
document.addEventListener("click", function (event) {
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
