const ANIMALS = {
  lion: {
    name: "ライオン",
    colors: ["#f6b342", "#e9852f"],
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect width="400" height="400" rx="42" fill="#fff2c9"/>
        <circle cx="200" cy="198" r="122" fill="#d97927"/>
        <circle cx="200" cy="202" r="88" fill="#f7bf54"/>
        <circle cx="164" cy="184" r="13" fill="#243042"/>
        <circle cx="236" cy="184" r="13" fill="#243042"/>
        <path d="M182 222 Q200 238 218 222" fill="none" stroke="#243042" stroke-width="9" stroke-linecap="round"/>
        <path d="M200 197 l-17 22 h34z" fill="#6b3f2a"/>
        <circle cx="139" cy="146" r="30" fill="#ef9f38"/>
        <circle cx="261" cy="146" r="30" fill="#ef9f38"/>
        <path d="M116 256 Q200 315 284 256" fill="none" stroke="#8c4a23" stroke-width="14" stroke-linecap="round"/>
      </svg>`
  },
  koala: {
    name: "コアラ",
    colors: ["#aeb8c2", "#6f7d88"],
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect width="400" height="400" rx="42" fill="#e9f7ff"/>
        <circle cx="116" cy="170" r="62" fill="#9da8b2"/>
        <circle cx="284" cy="170" r="62" fill="#9da8b2"/>
        <circle cx="116" cy="170" r="38" fill="#d7dde3"/>
        <circle cx="284" cy="170" r="38" fill="#d7dde3"/>
        <circle cx="200" cy="210" r="100" fill="#b9c3cc"/>
        <ellipse cx="200" cy="213" rx="32" ry="42" fill="#4c5560"/>
        <circle cx="164" cy="188" r="11" fill="#202a35"/>
        <circle cx="236" cy="188" r="11" fill="#202a35"/>
        <path d="M174 252 Q200 270 226 252" fill="none" stroke="#202a35" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="200" cy="278" rx="54" ry="28" fill="#e6eaee"/>
      </svg>`
  },
  giraffe: {
    name: "キリン",
    colors: ["#f2c14e", "#b97735"],
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect width="400" height="400" rx="42" fill="#eaf9ff"/>
        <path d="M158 332 V176 C158 116 242 116 242 176 V332 Z" fill="#f3c65a"/>
        <ellipse cx="200" cy="162" rx="74" ry="62" fill="#f3c65a"/>
        <path d="M170 92 v43 M230 92 v43" stroke="#9a612d" stroke-width="14" stroke-linecap="round"/>
        <circle cx="170" cy="88" r="15" fill="#9a612d"/>
        <circle cx="230" cy="88" r="15" fill="#9a612d"/>
        <circle cx="171" cy="157" r="10" fill="#243042"/>
        <circle cx="229" cy="157" r="10" fill="#243042"/>
        <ellipse cx="200" cy="193" rx="38" ry="24" fill="#ffe4a2"/>
        <path d="M184 201 Q200 214 216 201" fill="none" stroke="#243042" stroke-width="7" stroke-linecap="round"/>
        <circle cx="180" cy="240" r="18" fill="#b97735"/>
        <circle cx="224" cy="282" r="20" fill="#b97735"/>
        <circle cx="205" cy="121" r="14" fill="#b97735"/>
      </svg>`
  },
  dog: {
    name: "犬",
    colors: ["#d28a55", "#70412c"],
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect width="400" height="400" rx="42" fill="#fff1e8"/>
        <path d="M124 130 C84 158 90 232 132 252 L152 156 Z" fill="#70412c"/>
        <path d="M276 130 C316 158 310 232 268 252 L248 156 Z" fill="#70412c"/>
        <circle cx="200" cy="209" r="99" fill="#d28a55"/>
        <circle cx="164" cy="196" r="12" fill="#243042"/>
        <circle cx="236" cy="196" r="12" fill="#243042"/>
        <ellipse cx="200" cy="232" rx="25" ry="18" fill="#3d2a24"/>
        <path d="M176 257 Q200 276 224 257" fill="none" stroke="#243042" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="200" cy="282" rx="56" ry="28" fill="#ffe0bd"/>
      </svg>`
  },
  cat: {
    name: "猫",
    colors: ["#f0a9b8", "#5d6470"],
    svg: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
        <rect width="400" height="400" rx="42" fill="#f4f0ff"/>
        <path d="M124 128 L142 72 L178 132 Z" fill="#5d6470"/>
        <path d="M276 128 L258 72 L222 132 Z" fill="#5d6470"/>
        <circle cx="200" cy="211" r="102" fill="#838c99"/>
        <path d="M150 135 L166 94 L190 139 Z" fill="#f0a9b8"/>
        <path d="M250 135 L234 94 L210 139 Z" fill="#f0a9b8"/>
        <circle cx="162" cy="196" r="12" fill="#243042"/>
        <circle cx="238" cy="196" r="12" fill="#243042"/>
        <path d="M200 218 l-18 16 h36z" fill="#f0a9b8"/>
        <path d="M176 250 Q200 269 224 250" fill="none" stroke="#243042" stroke-width="8" stroke-linecap="round"/>
        <path d="M116 226 h54 M230 226 h54 M120 252 h52 M228 252 h52" stroke="#5d6470" stroke-width="6" stroke-linecap="round"/>
      </svg>`
  }
};

const COURSES = {
  yasashii: { label: "やさしい", defaultPieces: 4, showGuide: true, showNumbers: true, preview: true, gap: 10, bonus: 4 },
  kantan: { label: "かんたん", defaultPieces: 6, showGuide: true, showNumbers: true, preview: true, gap: 8, bonus: 6 },
  futsu: { label: "ふつう", defaultPieces: 9, showGuide: false, showNumbers: true, preview: true, gap: 7, bonus: 10 },
  muzukashii: { label: "むずかしい", defaultPieces: 12, showGuide: false, showNumbers: false, preview: true, gap: 5, bonus: 14 },
  oni: { label: "鬼", defaultPieces: 16, showGuide: false, showNumbers: false, preview: false, gap: 3, bonus: 24 }
};

const LAYOUTS = {
  4: { cols: 2, rows: 2 },
  6: { cols: 3, rows: 2 },
  9: { cols: 3, rows: 3 },
  12: { cols: 4, rows: 3 },
  16: { cols: 4, rows: 4 }
};

const board = document.querySelector("#board");
const tray = document.querySelector("#tray");
const preview = document.querySelector("#preview");
const messageText = document.querySelector("#messageText");
const starScore = document.querySelector("#starScore");
const progressBar = document.querySelector("#progressBar");
const hintButton = document.querySelector("#hintButton");
const resetButton = document.querySelector("#resetButton");
const animalSelect = document.querySelector("#animalSelect");
const pieceSelect = document.querySelector("#pieceSelect");
const piecePicker = document.querySelector(".piece-picker");
const levelButtons = [...document.querySelectorAll(".level-button")];
const canvas = document.querySelector("#confettiCanvas");
const ctx = canvas.getContext("2d");

let currentCourse = "yasashii";
let currentAnimal = "lion";
let selectedPieceId = null;
let puzzle = [];
let solved = 0;
let score = 0;
let confetti = [];
let animationFrame = null;

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function imageUrl(svg) {
  return `url("data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}")`;
}

function currentPieceCount() {
  if (currentCourse === "yasashii") return 4;
  return Number(pieceSelect.value);
}

function makePuzzle() {
  const course = COURSES[currentCourse];
  const animal = ANIMALS[currentAnimal];
  const pieceCount = currentPieceCount();
  const layout = LAYOUTS[pieceCount];
  const url = imageUrl(animal.svg);

  selectedPieceId = null;
  solved = 0;
  puzzle = Array.from({ length: pieceCount }, (_, index) => {
    const col = index % layout.cols;
    const row = Math.floor(index / layout.cols);
    const posX = layout.cols === 1 ? "0%" : `${(col / (layout.cols - 1)) * 100}%`;
    const posY = layout.rows === 1 ? "0%" : `${(row / (layout.rows - 1)) * 100}%`;
    return {
      id: `piece-${index}`,
      index,
      col,
      row,
      posX,
      posY,
      image: url,
      solved: false
    };
  });

  board.style.setProperty("--cols", layout.cols);
  board.style.setProperty("--rows", layout.rows);
  board.style.setProperty("--gap", `${course.gap}px`);
  board.style.setProperty("--guide-opacity", currentCourse === "yasashii" ? "0.34" : "0.2");
  tray.style.setProperty("--cols", layout.cols);
  tray.style.setProperty("--rows", layout.rows);
  tray.style.setProperty("--piece-aspect", `${layout.rows} / ${layout.cols}`);
  preview.style.backgroundImage = url;
  preview.classList.toggle("is-hidden", !course.preview);
  pieceSelect.disabled = currentCourse === "yasashii";
  piecePicker.classList.toggle("is-locked", currentCourse === "yasashii");

  render();
  const intro = currentCourse === "oni"
    ? `鬼コース！見本なしで${animal.name}を完成させよう。`
    : `${course.label}コース。${animal.name}をピースで作ろう。`;
  setMessage(intro);
}

function render() {
  const course = COURSES[currentCourse];
  board.innerHTML = "";
  tray.innerHTML = "";

  puzzle.forEach((piece) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = `slot ${piece.solved ? "is-filled" : ""} ${course.showGuide && !piece.solved ? "has-guide" : ""}`;
    slot.dataset.target = piece.id;
    slot.style.setProperty("--image", piece.image);
    slot.style.setProperty("--pos-x", piece.posX);
    slot.style.setProperty("--pos-y", piece.posY);
    slot.setAttribute("aria-label", `${piece.index + 1}ばんの場所`);
    slot.addEventListener("click", () => placeSelected(piece.id));
    slot.addEventListener("dragover", (event) => event.preventDefault());
    slot.addEventListener("drop", (event) => {
      event.preventDefault();
      tryPlace(event.dataTransfer.getData("text/plain"), piece.id);
    });

    if (course.showNumbers && !piece.solved) {
      const number = document.createElement("span");
      number.className = "slot-number";
      number.textContent = piece.index + 1;
      slot.append(number);
    }

    board.append(slot);
  });

  shuffle(puzzle.filter((piece) => !piece.solved)).forEach((piece) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `piece ${selectedPieceId === piece.id ? "is-selected" : ""}`;
    button.draggable = true;
    button.dataset.piece = piece.id;
    button.dataset.label = course.showNumbers ? piece.index + 1 : "";
    button.style.setProperty("--image", piece.image);
    button.style.setProperty("--pos-x", piece.posX);
    button.style.setProperty("--pos-y", piece.posY);
    button.setAttribute("aria-label", `${piece.index + 1}ばんのピース`);
    button.addEventListener("click", () => selectPiece(piece.id));
    button.addEventListener("dragstart", (event) => {
      selectedPieceId = piece.id;
      event.dataTransfer.setData("text/plain", piece.id);
    });
    tray.append(button);
  });

  progressBar.style.width = `${(solved / puzzle.length) * 100}%`;
  starScore.textContent = score;
}

function selectPiece(pieceId) {
  selectedPieceId = selectedPieceId === pieceId ? null : pieceId;
  render();
  const piece = puzzle.find((candidate) => candidate.id === pieceId);
  if (piece) setMessage(`${piece.index + 1}ばんピース、どこに入るかな？`);
}

function placeSelected(targetId) {
  if (!selectedPieceId) {
    setMessage("まずピースをひとつ選んでね。");
    return;
  }
  tryPlace(selectedPieceId, targetId);
}

function tryPlace(pieceId, targetId) {
  const target = puzzle.find((piece) => piece.id === targetId);
  if (!target || target.solved) {
    setMessage("そこはもう完成しているよ。");
    return;
  }

  if (pieceId === targetId) {
    target.solved = true;
    solved += 1;
    score += currentCourse === "oni" ? 2 : 1;
    selectedPieceId = null;
    render();
    popSolvedSlot(targetId);
    setMessage(["ぴったり！", "いい組み立て！", "見えてきたね！", "その調子！"][Math.floor(Math.random() * 4)]);

    if (solved === puzzle.length) {
      score += COURSES[currentCourse].bonus;
      starScore.textContent = score;
      progressBar.style.width = "100%";
      setMessage(`${ANIMALS[currentAnimal].name}が完成！次のコースもいけそう。`);
      burstConfetti();
    }
  } else {
    setMessage("おしい！絵のつながりを見てみよう。");
    shakePiece(pieceId);
  }
}

function showHint() {
  const remaining = puzzle.filter((piece) => !piece.solved);
  if (!remaining.length) {
    setMessage("もう完成しているよ。どうぶつやコースを変えてみよう。");
    return;
  }

  const chosen = remaining[Math.floor(Math.random() * remaining.length)];
  selectedPieceId = chosen.id;
  render();
  const slot = board.querySelector(`[data-target="${chosen.id}"]`);
  if (slot) {
    slot.classList.add("is-hint");
    setTimeout(() => slot.classList.remove("is-hint"), 1800);
  }
  setMessage(`${chosen.index + 1}ばんピースは、光っている場所をねらってみよう。`);
}

function setMessage(text) {
  messageText.textContent = text;
  messageText.classList.remove("toast");
  requestAnimationFrame(() => messageText.classList.add("toast"));
}

function popSolvedSlot(targetId) {
  const slot = board.querySelector(`[data-target="${targetId}"]`);
  if (!slot) return;
  slot.classList.add("toast");
  setTimeout(() => slot.classList.remove("toast"), 320);
}

function shakePiece(pieceId) {
  const piece = tray.querySelector(`[data-piece="${pieceId}"]`);
  if (!piece) return;
  piece.animate(
    [
      { transform: "translateX(0)" },
      { transform: "translateX(-7px)" },
      { transform: "translateX(7px)" },
      { transform: "translateX(0)" }
    ],
    { duration: 220, easing: "ease-out" }
  );
}

function resizeCanvas() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function burstConfetti() {
  const colors = ANIMALS[currentAnimal].colors.concat(["#ffd166", "#47c7b7", "#5aa9e6", "#ff6b6b"]);
  confetti = Array.from({ length: 120 }, () => ({
    x: window.innerWidth / 2 + (Math.random() - 0.5) * 180,
    y: window.innerHeight * 0.2 + Math.random() * 90,
    vx: (Math.random() - 0.5) * 8,
    vy: Math.random() * -7 - 3,
    size: Math.random() * 9 + 5,
    spin: Math.random() * Math.PI,
    color: colors[Math.floor(Math.random() * colors.length)],
    life: 90 + Math.random() * 36
  }));

  if (!animationFrame) animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confetti = confetti.filter((piece) => piece.life > 0);
  confetti.forEach((piece) => {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.18;
    piece.spin += 0.16;
    piece.life -= 1;

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.spin);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.72);
    ctx.restore();
  });

  if (confetti.length) {
    animationFrame = requestAnimationFrame(animateConfetti);
  } else {
    animationFrame = null;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCourse = button.dataset.level;
    if (currentCourse !== "yasashii") pieceSelect.value = COURSES[currentCourse].defaultPieces;
    levelButtons.forEach((candidate) => candidate.classList.toggle("is-active", candidate === button));
    makePuzzle();
  });
});

animalSelect.addEventListener("change", () => {
  currentAnimal = animalSelect.value;
  makePuzzle();
});

pieceSelect.addEventListener("change", makePuzzle);
hintButton.addEventListener("click", showHint);
resetButton.addEventListener("click", makePuzzle);
window.addEventListener("resize", resizeCanvas);

pieceSelect.value = "4";
resizeCanvas();
makePuzzle();
