
(() => {
  "use strict";

  /* ========================================
     SETTINGS
  ======================================== */

  const settings = {
    shuffleQuestions: true,
    shuffleAnswers: true,
    showReview: true,
    requireAnswer: true
  };
  
  
    /* ========================================
     QUESTION TYEPES
     -Text
     { question: "Je suis un groupe de cellules ayant une forme et une fonction commune.",
       correctAnswer: "Tissu",
       type: "text" }
     -Text-multiple
     { question: "Nommez les 4 couches du tube digestif",
       correctAnswer: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Séreuse"],
       type: "text-multiple" }
     -Radio
     { question: "Je suis le tissu de revêtement, j’absorbe, je secrète et j’offre une protection physique.",
       choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
       correctAnswer: "Épithélial",
       type: "radio" }
     -Checkboxes
     { question: "Which are signs of dysphagia?",
       choices: ["Coughing while eating","Wet voice after swallowing","Increased appetite","Difficulty swallowing"],
       correctAnswer: [0, 1, 3],
       type: "checkboxes" }
     -Dragdrop      
     { question: "Match the defense mechanisms.",
       type: "dragdrop",
       pairs: [{
            prompt: "Redirecting emotions",
            answer: "Displacement"
            },
          {
            prompt: "Attributing feelings to others",
            answer: "Projection"
          }
        ]
      }
  ======================================== */

  /* ========================================
     QUESTION BANK
  ======================================== */  
  
const quizBanks = {
    corpsHumain181: {
        title: "Corps humain chapitre 8 - Test 1",
        description: "Premier test du chapitre 8",
        questions: [{
                question: "Je suis un groupe de cellules ayant une forme et une fonction commune.",
                correctAnswer: "Tissu",
                type: "text"
            },
            {
                question: "Je forme des replis qui s'insèrent entre les organes. Elle est formée de la couche séreuse",
                correctAnswer: "Péritoine",
                type: "text"
            },
            {
                question: "Nommez les 4 types de tissus",
                correctAnswer: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                type: "text-multiple"
            },
            {
                question: "Nommez les 6 fonctions du système digestif",
                correctAnswer: ["Ingestion", "Sécrétion", "Brassage et propulsion", "Digestion", "Absorption", "Défécation"],
                type: "text-multiple"
            },
            {
                question: "Nommez les 4 couches du tube digestif",
                correctAnswer: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Séreuse"],
                type: "text-multiple"
            },
        ]
    },
    corpsHumain182: {
        title: "Corps humain chapitre 8 - Test 2",
        description: "Deuxième test du chapitre 8",
        questions: [{
                question: "Je suis le tissu de revêtement, j’absorbe, je secrète et j’offre une protection physique.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Épithélial",
                type: "radio"
            }, {
                question: "Je suis avasculaire et j’ai une bonne capacite de regeneration.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Épithélial",
                type: "radio"
            },
            {
                question: "Mes fonctions sont de soutenir, de proteger, d’offrir une liaison entre les organes et de mettre en réserve.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Conjonctif",
                type: "radio"
            },
            {
                question: "Je suis le tissu le plus abondant et j’ai généralement bonne capacité de régénération.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Conjonctif",
                type: "radio"
            },
            {
                question: "Je produis de la chaleur, je génère le mouvement et je maintien la posture.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Musculaire",
                type: "radio"
            },
            {
                question: "Mes formes sont squelettiques, lisses et cardiaques. J’ai une faible capacite de régénération.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Musculaire",
                type: "radio"
            },
            {
                question: "Mes fonctions sont de recevoir les stimulus extérieurs, de les analyser et de transmettre une réponse.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Nerveux",
                type: "radio"
            },
            {
                question: "Je suis formé de neurones et de gliocytes. J’ai une faible/aucune capacite de régénération.",
                choices: ["Épithélial", "Conjonctif", "Musculaire", "Nerveux"],
                correctAnswer: "Nerveux",
                type: "radio"
            },
            {
                question: "Ma fonction est de sécréter et d’absorber.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Muqueuse",
                type: "radio"
            },
            {
                question: "Ma fonction est de fixer la muqueuse et la musculeuse.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Sous-muqueuse",
                type: "radio"
            },
            {
                question: "Je suis fait de tissus conjonctif et nerveux.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Sous-muqueuse",
                type: "radio"
            },
            {
                question: "Je contient les gros vaisseaux sanguins et lymphatiques et contrôle les sécrétions.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Sous-muqueuse",
                type: "radio"
            },
            {
                question: "Ma fonction est le mouvement.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Musculeuse",
                type: "radio"
            },
            {
                question: "Je suis fait de tissus musculaire et nerveux.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Musculeuse",
                type: "radio"
            },
            {
                question: "Je suis formé de deux couches sauf sauf dans l’estomac.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Musculeuse",
                type: "radio"
            },
            {
                question: "Je fournis une barrière protectrice du tube digestif.",
                choices: ["Muqueuse", "Sous-muqueuse", "Musculeuse", "Sereuse"],
                correctAnswer: "Sereuse",
                type: "radio"
            },
            {
                question: "Je rattache l’intestin grêle à la paroi abdominale postérieure.",
                choices: ["Mésentère", "Péritoine viscéral", "Péritoine pariétal"],
                correctAnswer: "Mésentère",
                type: "radio"
            },
            {
                question: "Je tapisse l'extérieur des organes.",
                choices: ["Mésentère", "Péritoine viscéral", "Péritoine pariétal"],
                correctAnswer: "Péritoine viscéral",
                type: "radio"
            },
            {
                question: "Je tapisse la face interne des parois de l'abdomen.",
                choices: ["Mésentère", "Péritoine viscéral", "Péritoine pariétal"],
                correctAnswer: "Péritoine pariétal",
                type: "radio"
            },

        ]
    },
  corpsHumain191:{
     title: "Corps humain chapitre 9 - Test 1",
        description: "Premier test du chapitre 9",
    questions:[
{
  question: "Je réduis les aliments en plus petites particules.",
  correctAnswer: "Digestion mécanique",
  type: "text"
},
{
  question: "Je dégrade les grosses molécules en plus petites molécules.",
  correctAnswer: "Digestion chimique",
  type: "text"
},
{
  question: "Je suis une protéine qui catalyse une réaction chimique (catabolisme et anabolisme).",
  correctAnswer: "Enzyme",
  type: "text"
},
{
  question: "J'augmente la vitesse d'une réaction chimique et je suis spécifique pour une à deux molécules.",
  correctAnswer: "Enzyme",
  type: "text"
},
{
  question: "Je suis un liquide sécrété par une glande ou une muqueuse, contenant souvent des enzymes et d'autres substances.",
  correctAnswer: "Suc",
  type: "text"
},
{
  question: "Je suis un organe ou un groupe de cellules qui produit et libère des substances à la surface du corps ou dans une cavité naturelle.",
  correctAnswer: "Glande exocrine",
  type: "text"
},
{
  question: "Je suis un organe ou un groupe de cellules qui produit des hormones et les rejette directement dans la circulation sanguine, sans l'intermédiaire de canaux.",
  correctAnswer: "Glande endocrine",
  type: "text"
},
{
  question: "Je suis la nourriture mastiquée et imprégnée de salive.",
  correctAnswer: "Bol alimentaire",
  type: "text"
},
{
  question: "Je suis un liquide épais composé de nourriture mastiquée et de suc gastrique.",
  correctAnswer: "Chyme",
  type: "text"
},
{
  question: "Nommez les 3 glandes salivaires majeures.",
  correctAnswer: [
    "Glande salivaire parotide",
    "Glande salivaire sublinguale",
    "Glande salivaire submandibulaire"
  ],
  type: "text-multiple"
},
{
  question: "Nommez l'action de broyer, diviser et écraser les aliments solides dans la bouche.",
  correctAnswer: "Mastication",
  type: "text"
},
{
  question: "Nommez l'ensemble des contractions musculaires involontaires dans le système digestif faisant avancer la nourriture.",
  correctAnswer: "Péristaltisme",
  type: "text"
},
{
  question: "Je suis le pigment jaune provenant de la dégradation des érythrocytes.",
  correctAnswer: "Bilirubine",
  type: "text"
},
{
  question: "Je facilite l'absorption de la vitamine B12.",
  correctAnswer: "Facteur intrinsèque",
  type: "text"
},
{
  question: "Je brasse et mélange le chyme aux sucs gastriques, j'optimise la digestion et l'absorption.",
  correctAnswer: "Segmentation",
  type: "text"
}
]
  },
  corpsHumain192:{
    title: "Corps humain chapitre 9 - Test 2",
        description: "Deuxième test du chapitre 9",
    questions:[
{
  question: "Décrire la composition de la salive.",
  correctAnswer: [
    "Eau",
    "Mucus",
    "Tampon bicarbonate" || "Ion bicarbonate",
    "Amylase salivaire"
  ],
  type: "text-multiple"
},
{
  question: "Décrire la composition du suc gastrique.",
  correctAnswer: [
    "Eau",
    "HCl",
    "Pepsinogène",
    "Lipase gastrique",
    "Mucus",
    "Facteur intrinsèque"
  ],
  type: "text-multiple"
},
{
  question: "Décrire la composition du suc intestinal.",
  correctAnswer: [
    "Maltase",
    "Sucrase",
    "Lactase",
    "Peptidase",
    "Entérokinase"
  ],
  type: "text-multiple"
},
{
  question: "Décrire la composition du suc pancréatique.",
  correctAnswer: [
    "Eau",
    "Tampon bicarbonate" || "Ion bicarbonate",
    "Amylase pancréatique",
    "Lipase pancréatique",
    "Protéases pancréatiques actives" || "Protéase pancréatique inactive"
  ],
  type: "text-multiple"
},
{
  question: "Décrire la composition de la bile.",
  correctAnswer: [
    "Sels biliaires",
    "Tampon bicarbonate" || "Ion bicarbonate",
    "Bilirubine",
    "Cholestérol",
    "Eau"
  ],
  type: "text-multiple"
},
{
  question: "Nommez les fonctions de l'estomac.",
  correctAnswer: [
    "Sécrétion",
    "Digestion mécanique",
    "Digestion chimique",
    "Motilité",
    "Absorption"
  ],
  type: "text-multiple"
},
{
  question: "Nommez les fonctions de l'intestin.",
  correctAnswer: [
    "Digestion mécanique",
    "Digestion chimique",
    "Sécrétion",
    "Motilité",
    "Absorption"
  ],
  type: "text-multiple"
},
{
  question: "Nommez les fonctions du foie.",
  correctAnswer: [
    "Sécrétion",
    "Métabolisme",
    "Faire des réserves",
    "Traitement des substances toxiques",
    "Activation de la vitamine D"
  ],
  type: "text-multiple"
},
{
  question: "Nommez les fonctions du gros intestin.",
  correctAnswer: [
    "Sécrétion",
    "Absorption",
    "Digestion chimique",
    "Motilité",
    "Formation et stockage des fèces",
    "Défécation"
  ],
  type: "text-multiple"
},
{
  question: "Je dissous la nourriture et nettoie la cavité orale.",
  choices: [
    "Eau",
    "Mucus",
    "Tampon bicarbonate (HCO₃⁻)"
  ],
  correctAnswer: "Eau",
  type: "radio"
},
{
  question: "Je lubrifie pour faciliter le passage de la masse et protège contre l'acidité.",
  choices: [
    "Eau",
    "Mucus",
    "Tampon bicarbonate (HCO₃⁻)"
  ],
  correctAnswer: "Mucus",
  type: "radio"
},
{
  question: "Je neutralise l'acidité des nutriments.",
  choices: [
    "Eau",
    "Mucus",
    "Tampon bicarbonate (HCO₃⁻)"
  ],
  correctAnswer: "Tampon bicarbonate (HCO₃⁻)",
  type: "radio"
}

]
  },
  corpsHumain193:{
    title: "Corps humain chapitre 9 - Test 3",
        description: "Troisième test du chapitre 9",
    questions:[
{
  question: "Nommez le A.",
  correctAnswer: "Conduit hépatique doit",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le B.",
  correctAnswer: "Conduit cystique",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le C.",
  correctAnswer: "Vésicule biliaire",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le D.",
  correctAnswer: "Duodénum",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le E.",
  correctAnswer: "Ampoule hépatopancréatique",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le F.",
  correctAnswer: "Conduit hépatique gauche",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le G.",
  correctAnswer: "Conduit hépatique commun",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le H.",
  correctAnswer: "Conduit cholédoque",
  type: "text",
  image: "/images/chapitre9.png",
},{
  question: "Nommez le I.",
  correctAnswer: "Conduit pancréatique",
  type: "text",
  image: "/images/chapitre9.png",
},

]
  },

  math: {
    title: "Mathematics",
    description: "Test your multiplication skills.",
    questions: [
      {
        question: "What is 2*5?",
        choices: [2, 5, 10, 15, 20],
        correctAnswer: 2,
        type: "radio"
      }
    ]
  },

  psychology: {
    title: "Psychology",
    description: "Defense mechanisms and behavior.",
    questions: [
      {
        question: "Which defense mechanism redirects emotions?",
        choices: [
          "Repression",
          "Projection",
          "Displacement",
          "Denial"
        ],
        correctAnswer: 2,
        type: "radio"
      },
      {
        question: "Match the defense mechanisms.",
        type: "dragdrop",
        pairs: [
          {
            prompt: "Redirecting emotions",
            answer: "Displacement"
          },
          {
            prompt: "Attributing feelings to others",
            answer: "Projection"
          }
        ]
      }
    ]
  },

  nursing: {
    title: "Nursing",
    description: "Patient care and clinical knowledge.",
    questions: [

{
  question: "La digestion {{mécanique}} réduit les aliments en petites particules, tandis que la digestion {{chimique}} dégrade les molécules.",
  type: "fill-blank"
},
{
  question: "La nourriture mastiquée et mélangée à la salive forme le {{bol alimentaire}}.",
  type: "fill-blank"
},
{
  question: "La salive contient un {{tampon bicarbonate|ions bicarbonate}}.",
  type: "fill-blank"
}

    ]
  }
};


  /* ========================================
     DOM ELEMENTS
  ======================================== */

  const quiz = document.getElementById("quiz");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const restartBtn = document.getElementById("start");

  if (!quiz || !nextBtn || !prevBtn || !restartBtn) {
    console.error("Missing quiz HTML elements.");
    return;
  }

/* ========================================
   TOP NAVIGATION
======================================== */

const topNavigation = document.getElementById(
  "quiz-top-navigation"
);

const backToQuizzesTop = document.getElementById(
  "back-to-quizzes-top"
);

backToQuizzesTop.addEventListener("click", () => {
  const confirmed = window.confirm(
    "Return to quiz selection? Your current progress will be lost."
  );

  if (confirmed) {
    renderQuizSelection();
  }
});

  
/* ========================================
   STATE
======================================== */

  
// Currently selected quiz
let selectedQuizId = null;

// Question bank for the selected quiz
let questionBank = [];

// Current quiz questions
let questions = [];

// Current question index
let currentQuestion = 0;

// Student answers
let selections = [];

// Tracks submitted questions
let submitted = [];

// Tracks quiz completion
let completed = false;

// Quiz selection menu elements
const quizSelection = document.getElementById("quiz-selection");
const quizList = document.getElementById("quiz-list");


  /* ========================================
     HELPERS
  ======================================== */

  function shuffleArray(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  }

  function createElement(tag, className = "", text) {
    const element = document.createElement(tag);

    if (className) element.className = className;

    if (text !== undefined) {
      element.textContent = String(text);
    }

    return element;
  }

  
/* ========================================
   QUESTION IMAGE
======================================== */

function renderQuestionImage(question) {
  if (!question.image) return null;

  const wrapper = createElement("div", "question-image-wrapper");

  const img = document.createElement("img");

  img.src = question.image;
  img.alt = question.imageAlt || question.question;
  img.className = "question-image";
  img.loading = "lazy";

  img.addEventListener("error", () => {
    wrapper.textContent = "Unable to load question image.";
    wrapper.classList.add("question-image-error");
  });

  wrapper.appendChild(img);

  return wrapper;
}

  
function prepareQuestions() {
  let prepared = questionBank.map((question) => {
  const imageData = {
  image: question.image || null,
  imageAlt: question.imageAlt || question.question
};
if (question.type === "fill-blank") {
  const parts = [];
  const correctAnswers = [];

  const regex = /\{\{(.*?)\}\}/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(question.question)) !== null) {
    parts.push(question.question.slice(lastIndex, match.index));

    correctAnswers.push(
      match[1].split("|").map(answer => answer.trim())
    );

    lastIndex = regex.lastIndex;
  }

  parts.push(question.question.slice(lastIndex));

  return {
    ...imageData,
    question: question.question,
    type: "fill-blank",
    parts,
    correctAnswers
  };
}

    if (question.type === "text-multiple") {
  return {
    ...imageData,
    question: question.question,
    type: "text-multiple",
    correctAnswers: question.correctAnswer.map(String)
  };
}
if (question.type === "text") {
  return {
    ...imageData,
    question: question.question,
    type: "text",
    correctAnswers: (
      Array.isArray(question.correctAnswer)
        ? question.correctAnswer
        : [question.correctAnswer]
    ).map(String)
  };
}
    if (question.type === "dragdrop") {
      return {
        ...imageData,
        question: question.question,
        type: "dragdrop",
        pairs: question.pairs.map((pair, index) => ({
          ...pair,
          id: index
        }))
      };
    }

    const correctAnswers = Array.isArray(question.correctAnswer)
      ? question.correctAnswer
      : [question.correctAnswer];

    const choices = question.choices.map((text, index) => ({
      text,
      isCorrect:
  correctAnswers.includes(index) ||
  correctAnswers.includes(text)
    }));

    return {
      ...imageData,
      question: question.question,
      type: question.type || "radio",
      choices: settings.shuffleAnswers
        ? shuffleArray(choices)
        : choices
    };
  });

  return settings.shuffleQuestions
    ? shuffleArray(prepared)
    : prepared;
}

/* ========================================
   FILL IN THE BLANKS VALIDATION
======================================== */

function isFillBlankCorrect(question, answers) {
  if (!Array.isArray(answers)) return false;

  return (
    answers.length === question.correctAnswers.length &&
    question.correctAnswers.every((accepted, index) =>
      accepted.some(
        answer =>
          normalizeAnswer(answer) ===
          normalizeAnswer(answers[index] ?? "")
      )
    )
  );
}


  function isMultiSelect(question) {
    return question.type === "checkboxes";
  }

  function getCorrectIndexes(question) {
    return question.choices
      .map((choice, index) => choice.isCorrect ? index : -1)
      .filter(index => index !== -1);
  }

  function isAnswerCorrect(question, selectedIndexes) {
    if (question.type === "dragdrop") {
  return question.pairs.every(
    (pair, index) => selectedIndexes[index] === pair.id
  );
}
    const correctIndexes = getCorrectIndexes(question);

    return (
      selectedIndexes.length === correctIndexes.length &&
      selectedIndexes.every(index => correctIndexes.includes(index))
    );
  }
  
  
function renderQuizSelection() {
  selectedQuizId = null;
  completed = false;
  topNavigation.style.display = "none";

  quiz.replaceChildren();
  quiz.style.display = "none";

  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  restartBtn.style.display = "none";

  quizSelection.style.display = "block";
  quizList.replaceChildren();

  Object.entries(quizBanks).forEach(([id, bank]) => {
    const card = document.createElement("button");

    card.type = "button";
    card.className = "quiz-selection-card";

    const title = document.createElement("strong");
    title.textContent = bank.title;

    const description = document.createElement("span");
    description.textContent = bank.description;

    const count = document.createElement("small");
    count.textContent = `${bank.questions.length} questions`;

    card.append(title, description, count);

    card.addEventListener("click", () => {
      selectedQuizId = id;
      quizSelection.style.display = "none";
      quiz.style.display = "block";

      initializeQuiz();
    });

    quizList.appendChild(card);
  });
}


  /* ========================================
     INITIALIZE
  ======================================== */


function initializeQuiz() {
  if (!selectedQuizId || !quizBanks[selectedQuizId]) {
    renderQuizSelection();
    return;
  }

  const bank = quizBanks[selectedQuizId];

  // Load the selected quiz's questions
  questionBank = bank.questions;

  questions = prepareQuestions();

  currentQuestion = 0;

selections = questions.map(question => {
  if (question.type === "text") {
    return "";
  }

  if (
    question.type === "text-multiple" ||
    question.type === "fill-blank"
  ) {
    return question.correctAnswers.map(() => "");
  }

  return [];
});

  submitted = questions.map(() => false);
  completed = false;

  quizSelection.style.display = "none";
  quiz.style.display = "block";
  topNavigation.style.display = "flex";

  renderQuiz();
}


  /* ========================================
     RENDER QUESTION
  ======================================== */

  function renderQuestion() {
    const question = questions[currentQuestion];
    const container = createElement("div");
    container.id = "question";

    const heading = createElement(
      "h2",
      "",
      `Question ${currentQuestion + 1}:`
    );
    const questionText = createElement(
      "p",
      "",
      question.question
    );
    container.append(heading, questionText);
    const questionImage = renderQuestionImage(question);

if (questionImage) {
  container.appendChild(questionImage);
}
    
if (question.type === "fill-blank") {
  // The sentence is rendered with input fields below.
  questionText.remove();

  container.appendChild(renderFillBlankQuestion(question));

  const message = createElement("p");
  message.id = "quiz-message";
  message.setAttribute("role", "status");
  message.style.display = "none";

  container.appendChild(message);

  return container;
}

if (question.type === "text-multiple") {
  container.appendChild(renderTextMultipleQuestion(question));

  const message = createElement("p");
  message.id = "quiz-message";
  message.setAttribute("role", "status");
  message.style.display = "none";

  container.appendChild(message);

  return container;
}
    
    if (question.type === "text") {
  container.appendChild(renderTextQuestion(question));

  const message = createElement("p");
  message.id = "quiz-message";
  message.setAttribute("role", "status");
  message.style.display = "none";

  container.appendChild(message);

  return container;
}
if (question.type === "dragdrop") {
  container.appendChild(renderDragDrop(question));

  const checkBtn = createElement(
    "button",
    "button check-answer-btn",
    "Check Answer"
  );

  checkBtn.type = "button";
  checkBtn.id = "check-answer";

  checkBtn.addEventListener("click", () => {
    const answers = selections[currentQuestion];

    const complete = question.pairs.every(
      (_, index) => answers[index] != null
    );

    if (!complete) {
      alert("Please complete all matches.");
      return;
    }

    submitted[currentQuestion] = true;
    renderQuiz();
  });

  if (!submitted[currentQuestion]) {
    container.appendChild(checkBtn);
  }

  return container;
}


    // container.append(heading, questionText);

    const answerList = createElement("ul", "answer-list");
    
function renderDragDrop(question) {
  const container = createElement("div", "dragdrop");
  const bank = createElement("div", "drag-bank");
  const targets = createElement("div", "drag-targets");

  // One answer per drop zone, stored by its pair index
  if (!Array.isArray(selections[currentQuestion])) {
    selections[currentQuestion] = [];
  }

  const answers = selections[currentQuestion];

  const answerItems = question.pairs.map(pair => ({
    id: pair.id,
    text: pair.answer
  }));

  // Stable shuffle: keep the same order when re-rendering
  if (!question.answerOrder) {
    question.answerOrder = shuffleArray(answerItems);
  }

  function placeAnswer(pairIndex, answerId) {
    if (submitted[currentQuestion]) return;

    // Remove the answer from its previous zone
    answers.forEach((id, index) => {
      if (id === answerId) answers[index] = null;
    });

    answers[pairIndex] = answerId;
    renderQuiz();
  }

  question.answerOrder.forEach(item => {
    if (answers.includes(item.id)) return;

    const chip = createElement("button", "drag-chip", item.text);
    chip.type = "button";
    chip.draggable = !submitted[currentQuestion];

    chip.addEventListener("dragstart", event => {
      event.dataTransfer.setData("text/plain", String(item.id));
    });

    // Click-to-select fallback
    chip.addEventListener("click", () => {
      container.dataset.selected = String(item.id);
      bank.querySelectorAll(".drag-chip").forEach(button => {
        button.classList.remove("selected");
      });
      chip.classList.add("selected");
    });

    bank.appendChild(chip);
  });

  question.pairs.forEach((pair, index) => {
    const row = createElement("div", "drag-row");
    const prompt = createElement("p", "drag-prompt", pair.prompt);
    const zone = createElement("button", "drop-zone");

    zone.type = "button";

    const assignedId = answers[index];
    const assigned = question.pairs.find(p => p.id === assignedId);

    zone.textContent = assigned
      ? assigned.answer
      : "Drop answer here";

    if (submitted[currentQuestion]) {
      const correct = assignedId === pair.id;

      zone.classList.add(
        correct ? "correct-answer" : "wrong-answer"
      );

      zone.textContent += correct ? " ✓" : " ✕";
      zone.disabled = true;
    } else {
      zone.addEventListener("dragover", event => {
        event.preventDefault();
      });

      zone.addEventListener("drop", event => {
        event.preventDefault();

        const id = Number(
          event.dataTransfer.getData("text/plain")
        );

        if (Number.isInteger(id)) {
          placeAnswer(index, id);
        }
      });

      zone.addEventListener("click", () => {
        const selected = container.dataset.selected;

        if (selected !== undefined) {
          placeAnswer(index, Number(selected));
        } else if (assignedId != null) {
          answers[index] = null;
          renderQuiz();
        }
      });
    }

    row.append(prompt, zone);
    targets.appendChild(row);
  });

  container.append(bank, targets);
  return container;
}


    question.choices.forEach((choice, index) => {
      const item = createElement("li", "answer-card");
      const label = createElement("label", "answer-label");

      const input = document.createElement("input");

      input.type = isMultiSelect(question)
        ? "checkbox"
        : "radio";

      input.name = "answer";
      input.value = String(index);

      input.checked = selections[currentQuestion].includes(index);
      input.disabled = submitted[currentQuestion];

      const answerText = createElement(
        "span",
        "answer-text",
        choice.text
      );

      label.append(input, answerText);
      item.appendChild(label);
      answerList.appendChild(item);
    });

    container.appendChild(answerList);

    const message = createElement("p");
    message.id = "quiz-message";
    message.setAttribute("role", "status");
    message.setAttribute("aria-live", "polite");
    message.style.display = "none";

    container.appendChild(message);

    if (isMultiSelect(question) && !submitted[currentQuestion]) {
      const checkBtn = createElement(
        "button",
        "button check-answer-btn",
        "Check Answer"
      );

      checkBtn.type = "button";
      checkBtn.id = "check-answer";

      checkBtn.addEventListener("click", submitAnswer);

      container.appendChild(checkBtn);
    }

    return container;
  }
  
  
/* ========================================
   TEXT ANSWER QUESTIONS
======================================== */

function normalizeAnswer(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .replace(/\s+/g, " ")
    .toLowerCase();
}

function isTextAnswerCorrect(question, answer) {
  const normalized = normalizeAnswer(answer);

  return question.correctAnswers.some(
    accepted => normalizeAnswer(accepted) === normalized
  );
}

/* ========================================
   MULTIPLE TEXT ANSWER VALIDATION
======================================== */

function isTextMultipleCorrect(question, answers) {
  if (!Array.isArray(answers)) return false;

  const expected = question.correctAnswers.map(normalizeAnswer);
  const provided = answers.map(normalizeAnswer);

  // The student must provide all required answers.
  if (
    provided.length !== expected.length ||
    provided.some(answer => !answer)
  ) {
    return false;
  }

  // Answer order does not matter.
  // Duplicate answers cannot count twice.
  const remaining = [...expected];

  for (const answer of provided) {
    const index = remaining.indexOf(answer);

    if (index === -1) return false;

    remaining.splice(index, 1);
  }

  return remaining.length === 0;
}

function renderTextQuestion(question) {
  const container = createElement("div", "text-question");

  const input = document.createElement("input");
  input.type = "text";
  input.className = "text-answer-input";
  input.placeholder = "Type your answer...";
  input.autocomplete = "off";

  const saved = selections[currentQuestion];

  input.value = typeof saved === "string" ? saved : "";
  input.disabled = submitted[currentQuestion];

  const feedback = createElement("div", "text-feedback");

  input.addEventListener("input", () => {
    selections[currentQuestion] = input.value;
  });

  container.append(input, feedback);

  if (submitted[currentQuestion]) {
    const correct = isTextAnswerCorrect(question, input.value);

    input.classList.add(
      correct ? "correct-answer" : "wrong-answer"
    );

    feedback.classList.add(
      correct ? "correct-text" : "wrong-text"
    );

    feedback.textContent = correct
      ? "✓ Correct!"
      : `✕ Incorrect. Correct answer: ${question.correctAnswers[0]}`;

  } else {
    const checkBtn = createElement(
      "button",
      "button check-answer-btn",
      "Check Answer"
    );

    checkBtn.type = "button";
    checkBtn.id = "check-answer";

    checkBtn.addEventListener("click", () => {
      const answer = input.value.trim();

      if (!answer) {
        showMessage("Please enter an answer.");
        return;
      }

      selections[currentQuestion] = answer;
      submitted[currentQuestion] = true;
      renderQuiz();
    });

    container.appendChild(checkBtn);
  }

  return container;
}


/* ========================================
   MULTIPLE TEXT ANSWER QUESTIONS
======================================== */

function renderTextMultipleQuestion(question) {
  const container = createElement("div", "text-question");

  const answers = selections[currentQuestion];
  const locked = submitted[currentQuestion];

  const instructions = createElement(
    "p",
    "",
    `Enter all ${question.correctAnswers.length} answers.`
  );

  container.appendChild(instructions);

  question.correctAnswers.forEach((_, index) => {
    const input = document.createElement("input");

    input.type = "text";
    input.className = "text-answer-input";
    input.placeholder = `Answer ${index + 1}`;
    input.autocomplete = "off";

    input.value = answers[index] || "";
    input.disabled = locked;
    input.style.marginBottom = "12px";

    input.addEventListener("input", () => {
      answers[index] = input.value;
    });

    container.appendChild(input);
  });

  const feedback = createElement("div", "text-feedback");

  if (locked) {
    const correct = isTextMultipleCorrect(question, answers);

    feedback.classList.add(
      correct ? "correct-text" : "wrong-text"
    );

    feedback.textContent = correct
      ? "✓ Correct! +1 point"
      : `✕ Incorrect. Correct answers: ${question.correctAnswers.join(", ")}`;

   
const remainingAnswers = question.correctAnswers.map(
  answer => normalizeAnswer(answer)
);

container.querySelectorAll("input").forEach((input) => {
  const studentAnswer = normalizeAnswer(input.value);

  // Find this answer anywhere in the correct answer list
  const matchIndex = remainingAnswers.indexOf(studentAnswer);

  if (studentAnswer !== "" && matchIndex !== -1) {
    // Correct answer: GREEN
    input.classList.add("correct-answer");

    // Prevent duplicate answers from counting twice
    remainingAnswers.splice(matchIndex, 1);
  } else {
    // Incorrect or duplicate answer: RED
    input.classList.add("wrong-answer");
  }
});

  } else {
    const checkBtn = createElement(
      "button",
      "button check-answer-btn",
      "Check Answer"
    );

    checkBtn.type = "button";
    checkBtn.id = "check-answer";

    checkBtn.addEventListener("click", () => {
      if (answers.some(answer => !answer.trim())) {
        showMessage("Please complete all answers.");
        return;
      }

      submitted[currentQuestion] = true;
      renderQuiz();
    });

    container.appendChild(checkBtn);
  }

  container.appendChild(feedback);

  return container;
}
  
/* ========================================
   FILL IN THE BLANKS QUESTIONS
======================================== */

function renderFillBlankQuestion(question) {
  const container = createElement("div", "fill-blank-question");
  const sentence = createElement("div", "fill-blank-sentence");

  const answers = selections[currentQuestion];
  const locked = submitted[currentQuestion];

  question.parts.forEach((part, index) => {
    sentence.appendChild(
      document.createTextNode(part)
    );

    if (index < question.correctAnswers.length) {
      const input = document.createElement("input");

      input.type = "text";
      input.className = "fill-blank-input";
      input.placeholder = `Blank ${index + 1}`;
      input.autocomplete = "off";

      input.value = answers[index] || "";
      input.disabled = locked;

      input.addEventListener("input", () => {
        answers[index] = input.value;
      });

      if (locked) {
        const correct = question.correctAnswers[index].some(
          accepted =>
            normalizeAnswer(accepted) ===
            normalizeAnswer(answers[index] ?? "")
        );

        input.classList.add(
          correct ? "correct-answer" : "wrong-answer"
        );
      }

      sentence.appendChild(input);
    }
  });

  container.appendChild(sentence);

  const feedback = createElement("div", "text-feedback");

  if (locked) {
    const correct = isFillBlankCorrect(question, answers);

    feedback.classList.add(
      correct ? "correct-text" : "wrong-text"
    );

    feedback.textContent = correct
      ? "✓ Correct! +1 point"
      : "✕ Incorrect. 0 points.";

    if (!correct) {
      const correctText = createElement(
        "p",
        "",
        "Correct answers: " +
          question.correctAnswers
            .map(group => group.join(" / "))
            .join(", ")
      );

      feedback.appendChild(correctText);
    }
  } else {
    const checkBtn = createElement(
      "button",
      "button check-answer-btn",
      "Check Answer"
    );

    checkBtn.type = "button";
    checkBtn.id = "check-answer";

    checkBtn.addEventListener("click", () => {
      if (answers.some(answer => !answer.trim())) {
        showMessage("Please complete all blanks.");
        return;
      }

      submitted[currentQuestion] = true;
      renderQuiz();
    });

    container.appendChild(checkBtn);
  }

  container.appendChild(feedback);

  return container;
}

  /* ========================================
     ANSWER SELECTION
  ======================================== */

  quiz.addEventListener("change", (event) => {
    const input = event.target;

    if (!input.matches('input[name="answer"]')) return;
    if (submitted[currentQuestion]) return;

    const question = questions[currentQuestion];
    const index = Number(input.value);

    if (isMultiSelect(question)) {
      if (input.checked) {
        if (!selections[currentQuestion].includes(index)) {
          selections[currentQuestion].push(index);
        }
      } else {
        selections[currentQuestion] =
          selections[currentQuestion].filter(i => i !== index);
      }
    } else {
      selections[currentQuestion] = [index];
      submitAnswer();
    }

    const message = document.getElementById("quiz-message");
    if (message) message.style.display = "none";
  });

  /* ========================================
     ENTIRE CARD CLICKABLE
  ======================================== */

  quiz.addEventListener("click", (event) => {
    const card = event.target.closest(".answer-card");

    if (!card || !quiz.contains(card)) return;
    if (event.target.closest("label")) return;

    const input = card.querySelector("input");

    if (input && !input.disabled) {
      input.click();
    }
  });

  /* ========================================
     SUBMIT ANSWER
  ======================================== */

  function submitAnswer() {
    if (submitted[currentQuestion]) return;

    const selected = selections[currentQuestion];

    if (settings.requireAnswer && selected.length === 0) {
      showMessage("Please select an answer.");
      return;
    }

    submitted[currentQuestion] = true;

    showAnswerFeedback();
    updateNavigation();
  }

  /* ========================================
     FEEDBACK
  ======================================== */

  function showAnswerFeedback() {
    const question = questions[currentQuestion];
    const selected = selections[currentQuestion];

    const cards = quiz.querySelectorAll(".answer-card");

    cards.forEach((card, index) => {
      const choice = question.choices[index];
      const input = card.querySelector("input");

      input.disabled = true;

      if (choice.isCorrect) {
        card.classList.add("correct-answer");
        addFeedbackIcon(card, "✓");
      }

      if (selected.includes(index) && !choice.isCorrect) {
        card.classList.add("wrong-answer");
        addFeedbackIcon(card, "✕");
      }
    });
  }

  function addFeedbackIcon(card, symbol) {
    const existing = card.querySelector(".feedback-icon");

    if (existing) existing.remove();

    const icon = createElement(
      "span",
      "feedback-icon",
      symbol
    );

    icon.setAttribute("aria-hidden", "true");

    card.querySelector(".answer-label").appendChild(icon);
  }

  /* ========================================
     VALIDATION MESSAGE
  ======================================== */

  function showMessage(text) {
    const message = document.getElementById("quiz-message");

    if (!message) return;

    message.textContent = text;
    message.style.display = "block";
    message.style.color = "#b42318";
    message.style.fontSize = "14px";
    message.style.margin = "20px 0";
  }

  /* ========================================
     NAVIGATION
  ======================================== */

  function updateNavigation() {
    if (completed) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
      restartBtn.style.display = "inline-flex";
      return;
    }

    nextBtn.style.display = "inline-flex";

    nextBtn.textContent =
      currentQuestion === questions.length - 1
        ? "Finish Quiz"
        : "Next";

    prevBtn.style.display =
      currentQuestion > 0 ? "inline-flex" : "none";

    restartBtn.style.display = "none";
  }


function nextQuestion() {
  if (completed) return;

  if (!submitted[currentQuestion]) {
    showMessage("Please check your answer before continuing.");
    return;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
  } else {
    completed = true;
  }

  renderQuiz();
}


  function previousQuestion() {
    if (currentQuestion === 0) return;

    currentQuestion--;
    renderQuiz();
  }

  /* ========================================
     RENDER QUIZ
  ======================================== */


function renderQuiz() {
  quiz.replaceChildren();

  if (completed) {
    renderResults();
  } else {
    const question = questions[currentQuestion];

    if (!question) {
      console.error("Question not found:", currentQuestion);
      return;
    }

    quiz.appendChild(renderQuestion());

    // Restore feedback for previously answered questions
if (
  submitted[currentQuestion] &&
  ![
    "dragdrop",
    "text",
    "text-multiple",
    "fill-blank"
  ].includes(question.type)
) {
  showAnswerFeedback();
}
  }

  updateNavigation();
}


  /* ========================================
     SCORE
  ======================================== */


function calculateScore() {
  return questions.reduce((score, question, index) => {
    const selected = selections[index] || [];
if (question.type === "text") {
  return score + (
    isTextAnswerCorrect(question, selections[index] ?? "")
      ? 1
      : 0
  );
}
    if (question.type === "text-multiple") {
  const correct = isTextMultipleCorrect(
    question,
    selections[index]
  );

  return score + (correct ? 1 : 0);
}
    
if (question.type === "fill-blank") {
  const correct = isFillBlankCorrect(
    question,
    selections[index]
  );

  return score + (correct ? 1 : 0);
}

    if (question.type === "dragdrop") {
      const correct = question.pairs.every(
        (pair, i) => selected[i] === pair.id
      );

      return score + (correct ? 1 : 0);
    }

    const correctIndexes = question.choices
      .map((choice, i) => choice.isCorrect ? i : -1)
      .filter(i => i !== -1);

    const correct =
      selected.length === correctIndexes.length &&
      selected.every(i => correctIndexes.includes(i));

    return score + (correct ? 1 : 0);
  }, 0);
}


  /* ========================================
     RESULTS
  ======================================== */



function renderResults() {
  const score = calculateScore();
  const total = questions.length;

  const percentage = total > 0
    ? Math.round((score / total) * 100)
    : 0;

  const incorrect = total - score;

  const results = document.createElement("div");
  results.className = "quiz-results";

  /* ========================================
     FINAL GRADE
  ======================================== */

  const title = document.createElement("h2");
  title.textContent = "Quiz Complete!";

  const grade = document.createElement("div");
  grade.className = "grade-percentage";
  grade.textContent = `${percentage}%`;

  const scoreText = document.createElement("p");
  scoreText.className = "grade-summary";
  scoreText.textContent =
    `You answered ${score} out of ${total} questions correctly.`;

  /* ========================================
     PROGRESS BAR
  ======================================== */

  const progress = document.createElement("div");
  progress.className = "grade-progress";

  const progressFill = document.createElement("div");
  progressFill.className = "grade-progress-fill";
  progressFill.style.width = `${percentage}%`;

  progress.appendChild(progressFill);

  /* ========================================
     CORRECT / INCORRECT STATISTICS
  ======================================== */

  const stats = document.createElement("div");
  stats.className = "grade-stats";

  const correctStat = document.createElement("div");
  correctStat.className = "grade-stat";

  correctStat.innerHTML = `
    <strong>${score}</strong>
    <span>Correct answers</span>
  `;

  const incorrectStat = document.createElement("div");
  incorrectStat.className = "grade-stat";

  incorrectStat.innerHTML = `
    <strong>${incorrect}</strong>
    <span>Incorrect answers</span>
  `;

  stats.append(correctStat, incorrectStat);

  results.append(
    title,
    grade,
    progress,
    stats,
    scoreText
  );

  /* ========================================
     ANSWER REVIEW
  ======================================== */

  if (settings.showReview) {
    const reviewSection = createElement(
      "div",
      "quiz-review"
    );

    const reviewTitle = createElement(
      "h3",
      "",
      "Review Your Answers"
    );

    reviewSection.appendChild(reviewTitle);

    questions.forEach((question, index) => {
      const review = createElement(
        "div",
        "review-item"
      );

      const questionTitle = createElement(
        "h4",
        "",
        `${index + 1}. ${question.question}`
      );

      review.appendChild(questionTitle);
      
      
/* ========================================
   FILL IN THE BLANKS REVIEW
======================================== */

if (question.type === "fill-blank") {
  const answers = selections[index] || [];
  const correct = isFillBlankCorrect(question, answers);

  review.appendChild(
    createElement(
      "p",
      correct ? "review-correct" : "review-wrong",
      correct ? "✓ Correct" : "✕ Incorrect"
    )
  );

  question.correctAnswers.forEach((accepted, i) => {
    const answer = answers[i] || "";

    const blankCorrect = accepted.some(
      value =>
        normalizeAnswer(value) === normalizeAnswer(answer)
    );

    review.appendChild(
      createElement(
        "p",
        blankCorrect ? "review-correct" : "review-wrong",
        `Blank ${i + 1}: ${answer || "Not answered"}`
      )
    );

    if (!blankCorrect) {
      review.appendChild(
        createElement(
          "p",
          "",
          `Correct answer: ${accepted.join(" / ")}`
        )
      );
    }
  });

  reviewSection.appendChild(review);
  return;
}

      
/* ========================================
   MULTIPLE TEXT ANSWER REVIEW
======================================== */

if (question.type === "text-multiple") {
  const answers = selections[index] || [];

  const correct = isTextMultipleCorrect(
    question,
    answers
  );

  const status = createElement(
    "p",
    correct ? "review-correct" : "review-wrong",
    correct ? "✓ Correct" : "✕ Incorrect"
  );

  const yourAnswers = createElement(
    "p",
    "",
    `Your answers: ${answers.join(", ") || "Not answered"}`
  );

  review.append(status, yourAnswers);

  if (!correct) {
    const correctAnswers = createElement(
      "p",
      "",
      `Correct answers: ${question.correctAnswers.join(", ")}`
    );

    review.appendChild(correctAnswers);
  }

  reviewSection.appendChild(review);
  return;
}


      /* ========================================
         TEXT QUESTIONS
      ======================================== */

      if (question.type === "text") {
        const answer = selections[index] ?? "";

        const correct = isTextAnswerCorrect(
          question,
          answer
        );

        const status = createElement(
          "p",
          correct ? "review-correct" : "review-wrong",
          correct ? "✓ Correct" : "✕ Incorrect"
        );

        const yourAnswer = createElement(
          "p",
          "",
          `Your answer: ${answer || "Not answered"}`
        );

        review.append(status, yourAnswer);

        if (!correct) {
          review.appendChild(
            createElement(
              "p",
              "",
              `Correct answer: ${question.correctAnswers[0]}`
            )
          );
        }

        reviewSection.appendChild(review);
        return;
      }

      /* ========================================
         DRAG AND DROP QUESTIONS
      ======================================== */

      if (question.type === "dragdrop") {
        const selected = selections[index] || [];

        const correct = question.pairs.every(
          (pair, i) => selected[i] === pair.id
        );

        review.appendChild(
          createElement(
            "p",
            correct ? "review-correct" : "review-wrong",
            correct ? "✓ Correct" : "✕ Incorrect"
          )
        );

        question.pairs.forEach((pair, i) => {
          const selectedId = selected[i];

          const selectedPair = question.pairs.find(
            p => p.id === selectedId
          );

          const matchCorrect = selectedId === pair.id;

          const match = createElement(
            "div",
            "review-match"
          );

          match.appendChild(
            createElement(
              "strong",
              "",
              pair.prompt
            )
          );

          match.appendChild(
            createElement(
              "p",
              matchCorrect
                ? "review-correct"
                : "review-wrong",
              `Your answer: ${
                selectedPair?.answer ?? "Not answered"
              }`
            )
          );

          if (!matchCorrect) {
            match.appendChild(
              createElement(
                "p",
                "",
                `Correct answer: ${pair.answer}`
              )
            );
          }

          review.appendChild(match);
        });

        reviewSection.appendChild(review);
        return;
      }

      /* ========================================
         RADIO / CHECKBOXES / TRUEFALSE
      ======================================== */

      const selected = selections[index] || [];

      const correct = isAnswerCorrect(
        question,
        selected
      );

      const selectedTexts = selected.map(
        i => question.choices[i]?.text
      ).filter(value => value !== undefined);

      const correctTexts = question.choices
        .filter(choice => choice.isCorrect)
        .map(choice => choice.text);

      review.appendChild(
        createElement(
          "p",
          correct ? "review-correct" : "review-wrong",
          correct ? "✓ Correct" : "✕ Incorrect"
        )
      );

      review.appendChild(
        createElement(
          "p",
          "",
          `Your answer: ${
            selectedTexts.join(", ") || "Not answered"
          }`
        )
      );

      if (!correct) {
        review.appendChild(
          createElement(
            "p",
            "",
            `Correct answer: ${correctTexts.join(", ")}`
          )
        );
      }

      reviewSection.appendChild(review);
    });

    results.appendChild(reviewSection);
  }

  /* ========================================
     BACK TO QUIZZES BUTTON
  ======================================== */

  const backButton = document.createElement("button");

  backButton.type = "button";
  backButton.className = "back-to-quizzes";
  backButton.textContent = "Back to Quizzes";

  backButton.addEventListener("click", () => {
    renderQuizSelection();
  });

  results.appendChild(backButton);

  /* ========================================
     DISPLAY RESULTS
  ======================================== */

  quiz.appendChild(results);
}



  /* ========================================
     BUTTON EVENTS
  ======================================== */

  nextBtn.addEventListener("click", (event) => {
    event.preventDefault();
    nextQuestion();
  });

  prevBtn.addEventListener("click", (event) => {
    event.preventDefault();
    previousQuestion();
  });

  restartBtn.addEventListener("click", (event) => {
    event.preventDefault();
    initializeQuiz();
  });
  
  
/* ========================================
   ENTER KEY - CHECK ANSWER OR NEXT
======================================== */

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  // Ignore Enter when Shift is pressed
  if (event.shiftKey || event.repeat) return;

  // Only activate while taking a quiz
  if (!selectedQuizId || completed) return;

  // Ignore Enter if a dialog is open
  if (document.querySelector("dialog[open]")) return;

  // Don't interfere with other buttons or links
  if (
    event.target.closest("button, a, select, textarea")
  ) {
    return;
  }

  event.preventDefault();

  const question = questions[currentQuestion];

  if (!question) return;

  // If already submitted, go to next question
  if (submitted[currentQuestion]) {
    nextQuestion();
    return;
  }

  // TEXT QUESTIONS
  if (
    question.type === "text" ||
    question.type === "text-multiple" ||
    question.type === "fill-blank"
  ) {
    const checkBtn = document.getElementById("check-answer");

    if (checkBtn) {
      checkBtn.click();
    }

    return;
  }

  // DRAG AND DROP QUESTIONS
  if (question.type === "dragdrop") {
    const checkBtn = document.getElementById("check-answer");

    if (checkBtn) {
      checkBtn.click();
    }

    return;
  }

  // CHECKBOX QUESTIONS
  if (question.type === "checkboxes") {
    submitAnswer();
    return;
  }

  // RADIO QUESTIONS
  if (question.type === "radio") {
    if (selections[currentQuestion].length > 0) {
      submitAnswer();
    } else {
      showMessage("Please select an answer.");
    }

    return;
  }
});


  /* ========================================
     START QUIZ
  ======================================== */

  renderQuizSelection();
})();

