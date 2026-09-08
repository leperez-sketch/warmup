const canvas = document.getElementById('tugCanvas');
const ctx = canvas.getContext('2d');

let ropeOffset = 0;
let animationFrame = 0;

const teamBlueCharacters = [
  { skin: '#8d5524', hat: 'hijab', clothes: '#2563eb', xOffset: -180 },
  { skin: '#f1c27d', hat: 'songkok', clothes: '#1d4ed8', xOffset: -120 },
  { skin: '#c68642', hat: 'cap', clothes: '#3b82f6', xOffset: -60 }
];

const teamRedCharacters = [
  { skin: '#e0ac69', hat: 'songkok', clothes: '#dc2626', xOffset: 60 },
  { skin: '#ffdbac', hat: 'none', clothes: '#b91c1c', xOffset: 120 },
  { skin: '#512888', hat: 'headband', clothes: '#ef4444', xOffset: 180 }
];

let audioCtx = null;
let isPlayingMusic = false;
let musicInterval = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

function playNote(freq, duration) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

function startUpbeatMusic() {
  const notes = [261.63, 329.63, 392.00, 523.25, 392.00, 329.63];
  let noteIndex = 0;
  musicInterval = setInterval(() => {
    playNote(notes[noteIndex], 0.2);
    noteIndex = (noteIndex + 1) % notes.length;
  }, 250);
}

function toggleAudio() {
  initAudio();
  const btn = document.getElementById('musicToggleBtn');
  if (isPlayingMusic) {
    clearInterval(musicInterval);
    isPlayingMusic = false;
    btn.innerText = "🎵 Música: OFF";
    btn.style.background = "#64748b";
  } else {
    startUpbeatMusic();
    isPlayingMusic = true;
    btn.innerText = "🎵 Música: ON";
    btn.style.background = "#10b981";
  }
}

function drawCharacter(char, centerX, sway) {
  const x = centerX + char.xOffset;
  const y = 200 + Math.sin(animationFrame * 0.1 + char.xOffset) * 3;

  ctx.fillStyle = char.clothes;
  ctx.beginPath();
  ctx.ellipse(x, y + 30, 16, 28, Math.PI / 12 * (char.xOffset < 0 ? -1 : 1), 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = char.skin;
  ctx.beginPath();
  ctx.arc(x, y - 10, 14, 0, Math.PI * 2);
  ctx.fill();

  if (char.hat === 'hijab') {
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(x, y - 10, 16, Math.PI, Math.PI * 2);
    ctx.fill();
  } else if (char.hat === 'songkok') {
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(x - 12, y - 26, 24, 12);
  }

  ctx.strokeStyle = char.skin;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(x, y + 10);
  ctx.lineTo(x + (char.xOffset < 0 ? 15 : -15), y + 25);
  ctx.stroke();
}

function animate() {
  animationFrame++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2 + ropeOffset;

  ctx.strokeStyle = '#334155';
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = '#d97706';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(centerX - 220, 225);
  ctx.lineTo(centerX + 220, 225);
  ctx.stroke();

  ctx.fillStyle = '#ef4444';
  ctx.beginPath();
  ctx.moveTo(centerX, 225);
  ctx.lineTo(centerX, 195);
  ctx.lineTo(centerX + 15, 205);
  ctx.lineTo(centerX, 215);
  ctx.fill();

  const sway = Math.sin(animationFrame * 0.1) * 2;
  teamBlueCharacters.forEach(c => drawCharacter(c, centerX, sway));
  teamRedCharacters.forEach(c => drawCharacter(c, centerX, sway));

  if (ropeOffset > 0) ropeOffset -= 0.1;
  if (ropeOffset < 0) ropeOffset += 0.1;

  requestAnimationFrame(animate);
}

function selectAnswer(team, option) {
  initAudio();
  if (team === 'blue') {
    ropeOffset -= 25;
    playNote(587.33, 0.15);
  } else {
    ropeOffset += 25;
    playNote(523.25, 0.15);
  }
}

animate();
