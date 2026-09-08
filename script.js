// Base de Datos de Preguntas EFL por Nivel
const questionsDB = [
    // --- A1 ---
    {
        level: "A1",
        category: "Vocabulario",
        question: "¿Cómo se dice 'Gato' en inglés?",
        options: ["Dog", "Cat", "Bird", "Fish"],
        answer: 1
    },
    {
        level: "A1",
        category: "Corrección",
        question: "Selecciona la oración correcta:",
        options: ["She go to school.", "She goes to school.", "She going to school.", "She be go to school."],
        answer: 1
    },
    {
        level: "A1",
        category: "Traducción ES➔EN",
        question: "Traduce: 'Buenos días'",
        options: ["Good night", "Good afternoon", "Good morning", "Goodbye"],
        answer: 2
    },
    {
        level: "A1",
        category: "Traducción EN➔ES",
        question: "¿Qué significa 'I am hungry'?",
        options: ["Tengo sed", "Tengo frío", "Tengo hambre", "Tengo sueño"],
        answer: 2
    },

    // --- A2 ---
    {
        level: "A2",
        category: "Vocabulario",
        question: "What is the opposite of 'Cheap'?",
        options: ["Expensive", "Fast", "Small", "Easy"],
        answer: 0
    },
    {
        level: "A2",
        category: "Corrección",
        question: "Completa: 'Yesterday, I ___ a great movie.'",
        options: ["watch", "watched", "watching", "watches"],
        answer: 1
    },
    {
        level: "A2",
        category: "Traducción EN➔ES",
        question: "¿Qué significa 'At the library'?",
        options: ["En la librería", "En la biblioteca", "En la escuela", "En el museo"],
        answer: 1
    },
    {
        level: "A2",
        category: "Traducción ES➔EN",
        question: "Traduce: 'Ella es más alta que su hermana.'",
        options: ["She is taller that her sister.", "She is more tall than her sister.", "She is taller than her sister.", "She is tall than her sister."],
        answer: 2
    },

    // --- B1 ---
    {
        level: "B1",
        category: "Vocabulario",
        question: "Select the synonym for 'Reluctant':",
        options: ["Eager", "Unwilling", "Quick", "Happy"],
        answer: 1
    },
    {
        level: "B1",
        category: "Corrección",
        question: "Completa: 'If I ___ more time, I would travel more.'",
        options: ["have", "had", "will have", "would have"],
        answer: 1
    },
    {
        level: "B1",
        category: "Traducción ES➔EN",
        question: "Traduce: 'Estoy acostumbrado a madrugar.'",
        options: ["I used to get up early.", "I am used to getting up early.", "I get used to get up early.", "I am use to get up early."],
        answer: 1
    },
    {
        level: "B1",
        category: "Traducción EN➔ES",
        question: "¿Qué significa 'Although it rained, we enjoyed the trip'?",
        options: ["Porque llovió disfrutamos el viaje", "A pesar de que llovió, disfrutamos el viaje", "Si llueve no disfrutamos el viaje", "Antes de que lloviera disfrutamos el viaje"],
        answer: 1
    },

    // --- B2 ---
    {
        level: "B2",
        category: "Vocabulario",
        question: "What does 'Meticulous' mean?",
        options: ["Careless and fast", "Very careful and precise", "Aggressive", "Unpredictable"],
        answer: 1
    },
    {
        level: "B2",
        category: "Corrección",
        question: "Choose the correct sentence:",
        options: ["Hardly had he arrived when the phone rang.", "Hardly he had arrived when the phone rang.", "Hardly had he arrived than the phone rang.", "Hardly he arrived when the phone rang."],
        answer: 0
    },
    {
        level: "B2",
        category: "Traducción ES➔EN",
        question: "Traduce: 'No vale la pena llorar por la leche derramada.'",
        options: ["It's no use crying over spilled milk.", "Don't cry for milk.", "There's no point to cry milk.", "It isn't worth to cry spilled milk."],
        answer: 0
    },

    // --- C1 ---
    {
        level: "C1",
        category: "Vocabulario",
        question: "Which word is closest in meaning to 'Ubiquitous'?",
        options: ["Rare", "Omnipresent", "Transient", "Obsolete"],
        answer: 1
    },
    {
        level: "C1",
        category: "Corrección",
        question: "Completa: 'Were the manager ___ present, this issue would be resolved instantly.'",
        options: ["to be", "is", "being", "was"],
        answer: 0
    },
    {
        level: "C1",
        category: "Traducción EN➔ES",
        question: "¿Qué significa la expresión 'To play devil's advocate'?",
        options: ["Ser una persona malvada", "Defender una postura contraria para generar debate", "Hacer trampa en un juego", "Resolver un conflicto rápidamente"],
        answer: 1
    }
];

// Estado del Juego
let gameState = {
    selectedLevel: "ALL",
    team1Name: "Equipo Rojo",
    team2Name: "Equipo Azul",
    ropePosition: 50, // 50% es el centro. <50 gana equipo 1, >50 gana equipo 2
    currentTurn: 1,  // 1 = Rojo, 2 = Azul
    team1Score: 0,
    team2Score: 0,
    filteredQuestions: [],
    currentQuestionIndex: 0
};

// Elementos DOM
const setupScreen = document.getElementById('setup-screen');
const gameScreen = document.getElementById('game-screen');
const winnerModal = document.getElementById('winner-modal');

const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');

const levelSelect = document.getElementById('level-select');
const team1Input = document.getElementById('team1-name');
const team2Input = document.getElementById('team2-name');

const displayTeam1 = document.getElementById('display-team1');
const displayTeam2 = document.getElementById('display-team2');
const scoreTeam1 = document.getElementById('score-team1');
scoreTeam1.textContent = "0";
const scoreTeam2 = document.getElementById('score-team2');
scoreTeam2.textContent = "0";

const currentLevelDisplay = document.getElementById('current-level-display');
const turnBanner = document.getElementById('turn-banner');
const currentTurnTeam = document.getElementById('current-turn-team');

const ropeKnot = document.getElementById('rope-knot');
const qCategory = document.getElementById('q-category');
const qLevel = document.getElementById('q-level');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

// Event Listeners
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', resetGame);

function startGame() {
    gameState.selectedLevel = levelSelect.value;
    gameState.team1Name = team1Input.value.trim() || "Equipo Rojo";
    gameState.team2Name = team2Input.value.trim() || "Equipo Azul";
    
    // Filtrar preguntas por nivel
    if (gameState.selectedLevel === "ALL") {
        gameState.filteredQuestions = [...questionsDB];
    } else {
        gameState.filteredQuestions = questionsDB.filter(q => q.level === gameState.selectedLevel);
    }

    // Mezclar preguntas aleatoriamente
    gameState.filteredQuestions.sort(() => Math.random() - 0.5);

    if (gameState.filteredQuestions.length === 0) {
        alert("No hay preguntas disponibles para este nivel.");
        return;
    }

    // Configurar interfaz
    displayTeam1.textContent = gameState.team1Name;
    displayTeam2.textContent = gameState.team2Name;
    currentLevelDisplay.textContent = gameState.selectedLevel;

    setupScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');

    updateTurnUI();
    loadQuestion();
}

function updateTurnUI() {
    if (gameState.currentTurn === 1) {
        currentTurnTeam.textContent = gameState.team1Name;
        turnBanner.className = "turn-banner turn-red";
    } else {
        currentTurnTeam.textContent = gameState.team2Name;
        turnBanner.className = "turn-banner turn-blue";
    }
}

function loadQuestion() {
    if (gameState.currentQuestionIndex >= gameState.filteredQuestions.length) {
        // Volver a mezclar si se acabaron las preguntas
        gameState.currentQuestionIndex = 0;
        gameState.filteredQuestions.sort(() => Math.random() - 0.5);
    }

    const q = gameState.filteredQuestions[gameState.currentQuestionIndex];
    qCategory.textContent = q.category;
    qLevel.textContent = q.level;
    questionText.textContent = q.question;

    optionsContainer.innerHTML = "";
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(index, q.answer, btn);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, correctIndex, selectedBtn) {
    // Deshabilitar todos los botones para evitar doble clic
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    const isCorrect = selectedIndex === correctIndex;

    if (isCorrect) {
        selectedBtn.classList.add('correct');
        // Jalar la cuerda
        if (gameState.currentTurn === 1) {
            gameState.ropePosition -= 10; // Hacia la izquierda (Rojo)
            gameState.team1Score += 10;
        } else {
            gameState.ropePosition += 10; // Hacia la derecha (Azul)
            gameState.team2Score += 10;
        }
    } else {
        selectedBtn.classList.add('incorrect');
        // Muestra cuál era la correcta
        buttons[correctIndex].classList.add('correct');
        // Castigo: la cuerda se mueve ligeramente hacia el oponente
        if (gameState.currentTurn === 1) {
            gameState.ropePosition += 5;
        } else {
            gameState.ropePosition -= 5;
        }
    }

    // Actualizar marcadores y cuerda visual
    scoreTeam1.textContent = gameState.team1Score;
    scoreTeam2.textContent = gameState.team2Score;
    
    // Limitar valores de cuerda
    gameState.ropePosition = Math.max(10, Math.min(90, gameState.ropePosition));
    ropeKnot.style.left = `${gameState.ropePosition}%`;

    // Verificar si alguien ganó (Llegar a <= 15% o >= 85%)
    setTimeout(() => {
        if (gameState.ropePosition <= 15) {
            endGame(gameState.team1Name);
        } else if (gameState.ropePosition >= 85) {
            endGame(gameState.team2Name);
        } else {
            // Siguiente turno
            gameState.currentTurn = gameState.currentTurn === 1 ? 2 : 1;
            gameState.currentQuestionIndex++;
            updateTurnUI();
            loadQuestion();
        }
    }, 1500);
}

function endGame(winnerName) {
    document.getElementById('winner-title').textContent = "🎉 ¡Tenemos un Ganador!";
    document.getElementById('winner-message').textContent = `¡${winnerName} ha ganado la cuerda de inglés!`;
    winnerModal.classList.remove('hidden');
}

function resetGame() {
    gameState.ropePosition = 50;
    gameState.currentTurn = 1;
    gameState.team1Score = 0;
    gameState.team2Score = 0;
    gameState.currentQuestionIndex = 0;

    scoreTeam1.textContent = "0";
    scoreTeam2.textContent = "0";
    ropeKnot.style.left = "50%";

    winnerModal.classList.add('hidden');
    gameScreen.classList.add('hidden');
    setupScreen.classList.remove('hidden');
}
