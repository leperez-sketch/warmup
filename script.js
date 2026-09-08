// BANCO DE PREGUNTAS POR NIVEL
const questionBank = {
  A1: [
    { q: "¿Cómo se dice 'Gato' en inglés?", options: ["Dog", "Cat", "Bird", "Fish"], answer: 1 },
    { q: "Choose the correct pronoun: '___ is reading a book.'", options: ["They", "He", "We", "I"], answer: 1 },
    { q: "What color is the sky?", options: ["Red", "Green", "Blue", "Yellow"], answer: 2 },
    { q: "Select the correct plural form of 'Child':", options: ["Childs", "Children", "Childrens", "Childes"], answer: 1 },
    { q: "Fill in the blank: 'I ___ a student.'", options: ["is", "are", "am", "be"], answer: 2 },
    { q: "What is the opposite of 'Big'?", options: ["Small", "Tall", "Long", "Fast"], answer: 0 }
  ],
  A2: [
    { q: "Which tense is: 'I will go to London tomorrow'?", options: ["Present Simple", "Future Simple", "Past Simple", "Present Continuous"], answer: 1 },
    { q: "Choose the correct sentence:", options: ["There are two cats", "There is two cats", "There be two cats", "There two cats"], answer: 0 },
    { q: "Yesterday, she ___ to the supermarket.", options: ["go", "goes", "went", "going"], answer: 2 },
    { q: "Fill in the blank: 'He is taller ___ his brother.'", options: ["that", "then", "than", "as"], answer: 2 },
    { q: "Which word is an adverb?", options: ["Quick", "Quickly", "Quickness", "Quicker"], answer: 1 },
    { q: "Choose the correct comparative: 'Good -> ___'", options: ["Gooder", "More good", "Better", "Best"], answer: 2 }
  ],
  B1: [
    { q: "If it rains, we ___ at home.", options: ["would stay", "will stay", "stayed", "had stayed"], answer: 1 },
    { q: "Choose the correct passive form: 'The letter ___ by John.'", options: ["was written", "wrote", "was write", "is writing"], answer: 0 },
    { q: "She has been working here ___ 2018.", options: ["for", "since", "from", "during"], answer: 1 },
    { q: "By the time we arrived, the movie ___.", options: ["already started", "has already started", "had already started", "starts"], answer: 2 },
    { q: "Which modal verb expresses strong necessity?", options: ["Might", "Could", "Must", "Should"], answer: 2 },
    { q: "Choose the correct phrasal verb: 'Don't ___ up on your dreams!'", options: ["give", "take", "turn", "keep"], answer: 0 }
  ]
};

// ESTADO DEL JUEGO
let selectedLevel = 'ALL';
let currentBlueIndex = 0;
let currentRedIndex = 0;
let scoreBlue = 0;
let scoreRed = 0;
let activeBluePool = [];
let activeRedPool = [];

let ropeOffset = 0;
let targetRopeOffset = 0;
let animationFrame = 0;
let gameTimer = 120;
let timerInterval = null;

// CANVAS SETUP
const canvas = document.getElementById('tugCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;

// PERSONAJES MULTICULTURALES
const blueCharacters = [
  { name: 'Aisha', skin: '#8d5524', outfit: '#2563eb', hair: '#1e293b', style: 'hijab', xOffset: -220 },
  { name: 'Budi', skin: '#f1c27d', outfit: '#1d4ed8', hair: '#0f172a', style: 'songkok', xOffset: -150 },
  { name: 'Kofi', skin: '#452209', outfit: '#3b82f6', hair: '#0f172a', style: 'fade_cap', xOffset: -80 }
];

const redCharacters = [
  { name: 'Mei', skin: '#ffd1a4', outfit: '#dc2626', hair: '#1e1b4b', style: 'pigtails', xOffset: 80 },
  { name: 'Ravi', skin: '#c68642', outfit: '#b91c1c', hair: '#1e293b', style: 'turban', xOffset: 150 },
  { name: 'Mateo', skin: '#e0ac69', outfit: '#ef4444', hair: '#292524', style: 'curly', xOffset: 220 }
];

// WEB AUDIO SYNTHESIZER
let audioCtx = null;
let isAudioPlaying = false;
let musicLoopInterval = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playSynthNote(freq, type = 'triangle', duration = 0.2, volume = 0.1) {
  if (!audioCtx || !isAudioPlaying) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch(e) {}
}

function startUpbeatMusicLoop() {
  const melody = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23, 392.00, 523.25];
  const bassline = [130.81, 130.81, 174.61, 196.00];
  let step = 0;

  musicLoopInterval = setInterval(() => {
    if (!isAudioPlaying) return;
    playSynthNote(melody[step % melody.length], 'sine', 0.2, 0.08);
    if (step % 2 === 0) {
      playSynthNote(bassline[(step / 2) % bassline.length], 'triangle', 0.35, 0.12);
    }
    step++;
  }, 220);
}

function toggleAudio() {
  initAudio();
  const btn = document.getElementById('musicToggleBtn');
  if (isAudioPlaying) {
    isAudioPlaying = false;
    clearInterval(musicLoopInterval);
    btn.innerText = "🎵 Música: OFF";
    btn.style.background = "#475569";
  } else {
    isAudioPlaying = true;
    startUpbeatMusicLoop();
    btn.innerText = "🎵 Música: ON";
    btn.style.background = "#10b981";
  }
}

// NAVEGACIÓN Y SELECCIÓN DE NIVEL
function selectLevel(lvl, btnElement) {
  selectedLevel = lvl;
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  btnElement.classList.add('active');
}

function showHomeScreen() {
  clearInterval(timerInterval);
  const homeScreen = document.getElementById('home-screen');
  const gameScreen = document.getElementById('game-screen');
  const winnerModal = document.getElementById('winner-modal');

  homeScreen.classList.add('active');
  homeScreen.classList.remove('hidden');
  
  gameScreen.classList.remove('active');
  gameScreen.classList.add('hidden');
  
  winnerModal.classList.add('hidden');
}

function startGame() {
  initAudio();
  const homeScreen = document.getElementById('home-screen');
  const gameScreen = document.getElementById('game-screen');
  const winnerModal = document.getElementById('winner-modal');

  // Alternar visualización usando clases active y hidden
  homeScreen.classList.remove('active');
  homeScreen.classList.add('hidden');

  gameScreen.classList.add('active');
  gameScreen.classList.remove('hidden');

  winnerModal.classList.add('hidden');

  document.getElementById('level-indicator').innerText = `Nivel: ${selectedLevel}`;

  if (selectedLevel === 'ALL') {
    activeBluePool = [...questionBank.A1, ...questionBank.A2, ...questionBank.B1].sort(() => Math.random() - 0.5);
    activeRedPool = [...questionBank.A1, ...questionBank.A2, ...questionBank.B1].sort(() => Math.random() - 0.5);
  } else {
    activeBluePool = [...questionBank[selectedLevel]].sort(() => Math.random() - 0.5);
    activeRedPool = [...questionBank[selectedLevel]].sort(() => Math.random() - 0.5);
  }

  currentBlueIndex = 0;
  currentRedIndex = 0;
  scoreBlue = 0;
  scoreRed = 0;
  ropeOffset = 0;
  targetRopeOffset = 0;

  updateScoresUI();
  loadQuestion('blue');
  loadQuestion('red');

  gameTimer = 120;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    gameTimer--;
    const m = String(Math.floor(gameTimer / 60)).padStart(2, '0');
    const s = String(gameTimer % 60).padStart(2, '0');
    document.getElementById('timer').innerText = `${m}:${s}`;

    if (gameTimer <= 0) {
      endGame();
    }
  }, 1000);
}

function updateScoresUI() {
  document.getElementById('score-blue').innerText = scoreBlue;
  document.getElementById('score-red').innerText = scoreRed;
  document.getElementById('summary-blue').innerText = scoreBlue;
  document.getElementById('summary-red').innerText = scoreRed;
}

// CARGA DE PREGUNTAS
function loadQuestion(team) {
  const isBlue = team === 'blue';
  const pool = isBlue ? activeBluePool : activeRedPool;
  const index = isBlue ? currentBlueIndex : currentRedIndex;

  if (index >= pool.length) {
    if (isBlue) currentBlueIndex = 0; else currentRedIndex = 0;
  }

  const qData = pool[isBlue ? currentBlueIndex : currentRedIndex];
  const prefix = isBlue ? 'blue' : 'red';
  
  document.getElementById(`${prefix}-q-text`).innerText = qData.q;
  document.getElementById(`${prefix}-q-count`).innerText = `Pregunta ${(isBlue ? currentBlueIndex : currentRedIndex) + 1}`;

  const optionsContainer = document.getElementById(`options-${prefix}`);
  optionsContainer.innerHTML = '';

  qData.options.forEach((optText, optIdx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.innerText = `${String.fromCharCode(65 + optIdx)}. ${optText}`;
    btn.onclick = () => handleAnswer(team, optIdx, qData.answer, btn);
    optionsContainer.appendChild(btn);
  });
}

function handleAnswer(team, selectedIdx, correctIdx, btn) {
  const isCorrect = selectedIdx === correctIdx;
  const isBlue = team === 'blue';
  const prefix = isBlue ? 'blue' : 'red';

  const buttons = document.querySelectorAll(`#options-${prefix} .opt-btn`);
  buttons.forEach(b => b.style.pointerEvents = 'none');

  if (isCorrect) {
    btn.classList.add('correct');
    playSynthNote(587.33, 'sine', 0.3, 0.2);

    if (isBlue) {
      scoreBlue++;
      targetRopeOffset -= 30;
      document.getElementById('feedback-banner').innerText = "¡Blue Knights tiró con fuerza! 💪";
    } else {
      scoreRed++;
      targetRopeOffset += 30;
      document.getElementById('feedback-banner').innerText = "¡Red Dragons tiró con fuerza! 🔥";
    }

    updateScoresUI();

    setTimeout(() => {
      if (isBlue) currentBlueIndex++; else currentRedIndex++;
      loadQuestion(team);
    }, 800);

  } else {
    btn.classList.add('incorrect');
    playSynthNote(180, 'sawtooth', 0.25, 0.15);
    document.getElementById('feedback-banner').innerText = "¡Respuesta incorrecta! Intenta la siguiente...";

    setTimeout(() => {
      if (isBlue) currentBlueIndex++; else currentRedIndex++;
      loadQuestion(team);
    }, 1000);
  }
}

// DIBUJO DE PERSONAJES
function drawDetailedCharacter(char, centerX, isBlue) {
  if (!ctx) return;
  const x = centerX + char.xOffset;
  const pullStrain = Math.sin(animationFrame * 0.15) * 3;
  const leanAngle = isBlue ? -0.22 : 0.22;
  const y = 200 + Math.sin(animationFrame * 0.1 + char.xOffset) * 2;

  ctx.save();
  ctx.translate(x + pullStrain, y);

  ctx.fillStyle = 'rgba(0,0,0,0.3)';
  ctx.beginPath();
  ctx.ellipse(0, 50, 18, 6, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#1e293b';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.moveTo(-6, 25);
  ctx.lineTo(-14, 48);
  ctx.moveTo(6, 25);
  ctx.lineTo(14, 48);
  ctx.stroke();

  ctx.rotate(leanAngle);

  ctx.fillStyle = char.outfit;
  ctx.beginPath();
  if (ctx.roundRect) {
    ctx.roundRect(-14, -10, 28, 36, 8);
  } else {
    ctx.rect(-14, -10, 28, 36);
  }
  ctx.fill();

  ctx.fillStyle = char.skin;
  ctx.fillRect(-5, -16, 10, 8);

  ctx.fillStyle = char.skin;
  ctx.beginPath();
  ctx.arc(0, -26, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#0f172a';
  ctx.fillRect(isBlue ? 2 : -6, -28, 4, 3);
  ctx.fillRect(isBlue ? -6 : 2, -28, 4, 3);
  ctx.strokeStyle = '#0f172a';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(-7, -32); ctx.lineTo(-2, -30);
  ctx.moveTo(2, -30); ctx.lineTo(7, -32);
  ctx.stroke();

  ctx.fillStyle = char.hair;
  if (char.style === 'hijab') {
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(0, -26, 16, Math.PI * 0.8, Math.PI * 2.2);
    ctx.fill();
  } else if (char.style === 'songkok') {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-12, -42, 24, 13);
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(-12, -31, 24, 2);
  } else if (char.style === 'fade_cap') {
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(0, -28, 14, Math.PI, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(isBlue ? 0 : -16, -32, 16, 4);
  } else if (char.style === 'pigtails') {
    ctx.fillStyle = char.hair;
    ctx.beginPath();
    ctx.arc(0, -28, 14, Math.PI, Math.PI * 2);
    ctx.arc(-14, -28, 6, 0, Math.PI * 2);
    ctx.arc(14, -28, 6, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.style === 'turban') {
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(0, -30, 16, 0, Math.PI * 2);
    ctx.fill();
  } else if (char.style === 'curly') {
    ctx.fillStyle = char.hair;
    ctx.beginPath();
    ctx.arc(-8, -32, 8, 0, Math.PI * 2);
    ctx.arc(8, -32, 8, 0, Math.PI * 2);
    ctx.arc(0, -36, 8, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.strokeStyle = char.skin;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(isBlue ? 12 : -12, 10);
  ctx.stroke();

  ctx.restore();
}

function animateStage() {
  if (!ctx) return;
  animationFrame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ropeOffset += (targetRopeOffset - ropeOffset) * 0.1;
  const centerX = canvas.width / 2 + ropeOffset;

  ctx.fillStyle = '#1e293b';
  ctx.fillRect(0, 245, canvas.width, 95);
  ctx.fillStyle = '#334155';
  ctx.fillRect(0, 245, canvas.width, 4);

  ctx.strokeStyle = '#38bdf8';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 8]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(centerX - 280, 215);
  ctx.lineTo(centerX + 280, 215);
  ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.moveTo(centerX, 215);
  ctx.lineTo(centerX, 180);
  ctx.lineTo(centerX + 20, 192);
  ctx.lineTo(centerX, 204);
  ctx.fill();

  blueCharacters.forEach(c => drawDetailedCharacter(c, centerX, true));
  redCharacters.forEach(c => drawDetailedCharacter(c, centerX, false));

  requestAnimationFrame(animateStage);
}

function endGame() {
  clearInterval(timerInterval);
  const modal = document.getElementById('winner-modal');
  const title = document.getElementById('winner-title');
  const details = document.getElementById('winner-details');

  modal.classList.remove('hidden');

  if (scoreBlue > scoreRed) {
    title.innerText = "🏆 ¡VICTORIA DE BLUE KNIGHTS!";
    title.style.color = "#60a5fa";
  } else if (scoreRed > scoreBlue) {
    title.innerText = "🏆 ¡VICTORIA DE RED DRAGONS!";
    title.style.color = "#f87171";
  } else {
    title.innerText = "🤝 ¡EMPATE EXTRAORDINARIO!";
    title.style.color = "#f59e0b";
  }

  details.innerText = `Puntaje Final: Blue Knights ${scoreBlue} - ${scoreRed} Red Dragons`;
}

if (ctx) {
  animateStage();
}