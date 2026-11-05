const intro = document.getElementById("intro");
const site = document.getElementById("site");
const enterButton = document.getElementById("enterButton");
const audio = document.getElementById("siteAudio");
const soundToggle = document.getElementById("soundToggle");
const soundLabel = document.getElementById("soundLabel");
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const backToTop = document.getElementById("backToTop");
const workOpenButton = document.getElementById("workOpenButton");
const workDetails = document.getElementById("workDetails");

// Example: "media/music.mp3" — leave empty until you add your song.
const AUDIO_FILE = "media/music.mp3";

document.getElementById("year").textContent = new Date().getFullYear();

function closeMobileMenu() {
  mobileNav?.classList.remove("open");
  menuToggle?.classList.remove("active");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Open navigation");
}

function updateSoundState(isPlaying) {
  soundLabel.textContent = isPlaying ? "SOUND ON" : "SOUND OFF";
  soundToggle.classList.toggle("muted", !isPlaying);
  soundToggle.setAttribute("aria-label", isPlaying ? "Mute music" : "Play music");
}

enterButton.addEventListener("click", async () => {
  intro.classList.add("leaving");
  window.setTimeout(() => {
    intro.hidden = true;
    site.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, 350);

  if (AUDIO_FILE) {
    audio.src = AUDIO_FILE;
    try {
      await audio.play();
      updateSoundState(true);
    } catch {
      updateSoundState(false);
    }
  } else {
    updateSoundState(false);
  }
});

soundToggle.addEventListener("click", async () => {
  if (!audio.src) return;
  if (audio.paused) {
    try {
      await audio.play();
      updateSoundState(true);
    } catch {
      updateSoundState(false);
    }
  } else {
    audio.pause();
    updateSoundState(false);
  }
});

menuToggle?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("open");
  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

mobileNav?.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMobileMenu));
window.addEventListener("resize", () => { if (window.innerWidth > 640) closeMobileMenu(); });
window.addEventListener("scroll", () => backToTop?.classList.toggle("visible", window.scrollY > 500), { passive: true });
backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

workOpenButton?.addEventListener("click", () => {
  const isOpen = !workDetails.hidden;
  workDetails.hidden = isOpen;
  workOpenButton.setAttribute("aria-expanded", String(!isOpen));
  workOpenButton.querySelector("span").textContent = isOpen ? "EXPLORE MY WORK" : "CLOSE MY WORK";
  workOpenButton.querySelector("b").textContent = isOpen ? "＋" : "−";
  if (!isOpen) workDetails.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelectorAll(".work-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const selected = tab.dataset.tab;
    document.querySelectorAll(".work-tab").forEach(item => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".work-panel").forEach(panel => {
      const active = panel.dataset.panel === selected;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
  });
});

// Empty project links are placeholders until you add your own URLs.
document.querySelectorAll('a[href="#"]').forEach(link => {
  link.addEventListener("click", event => event.preventDefault());
});
