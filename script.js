/* ============================================================
   Graduation Invitation · interactivity
   - Background music toggle (muted by default)
   - Down-arrow smooth scroll to location
   ============================================================ */
(function () {
  "use strict";

  const audio = document.getElementById("bgAudio");
  const musicBtn = document.getElementById("musicBtn");
  const scrollBtn = document.getElementById("scrollBtn");
  const locationSection = document.querySelector(".location");

  /* -------- Music toggle -------- */
  let isPlaying = false;

  function enableAudio() {
    if (!audio) return;
    isPlaying = true;
    audio.muted = false;
    musicBtn.classList.add("is-playing");
    musicBtn.setAttribute("aria-pressed", "true");
    musicBtn.setAttribute("aria-label", "Tắt nhạc nền");

    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {
        // Autoplay blocked: revert UI so the user can try again.
        isPlaying = false;
        audio.muted = true;
        musicBtn.classList.remove("is-playing");
        musicBtn.setAttribute("aria-pressed", "false");
        musicBtn.setAttribute("aria-label", "Bật nhạc nền");
      });
    }
  }

  function disableAudio() {
    if (!audio) return;
    isPlaying = false;
    audio.pause();
    audio.muted = true;
    musicBtn.classList.remove("is-playing");
    musicBtn.setAttribute("aria-pressed", "false");
    musicBtn.setAttribute("aria-label", "Bật nhạc nền");
  }

  if (musicBtn) {
    musicBtn.addEventListener("click", function () {
      if (isPlaying) {
        disableAudio();
      } else {
        enableAudio();
      }
    });
  }

  /* -------- Down-arrow smooth scroll -------- */
  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      const target = locationSection || document.body;
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
})();
