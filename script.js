// Target: May 16, 2026, 4:30 PM (local time)
const TARGET = new Date(2026, 4, 16, 16, 30, 0).getTime();

const els = {
  d: document.getElementById('d'),
  h: document.getElementById('h'),
  m: document.getElementById('m'),
  s: document.getElementById('s'),
  countdown: document.getElementById('countdown'),
  revealed: document.getElementById('revealed'),
};

function pad(n) { return String(n).padStart(2, '0'); }

function tick() {
  const now = Date.now();
  const diff = TARGET - now;

  if (diff <= 0) {
    if (els.countdown) els.countdown.hidden = true;
    if (els.revealed) els.revealed.hidden = false;
    return;
  }

  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);

  if (els.d) els.d.textContent = pad(days);
  if (els.h) els.h.textContent = pad(hours);
  if (els.m) els.m.textContent = pad(mins);
  if (els.s) els.s.textContent = pad(secs);
}

if (els.countdown) {
  tick();
  setInterval(tick, 1000);
}

const form = document.getElementById('loginForm');
if (form) {
  const notice = document.getElementById('notice');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    notice.textContent = "The portrait stays shut. Ask Daksh for the key.";
    notice.classList.add('show');
  });
}