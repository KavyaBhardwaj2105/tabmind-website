(function () {
  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Live-ticking demo timer in the hero browser mockup — mirrors the real
  // extension's timer pill so the hero literally shows the product working.
  var timerEl = document.getElementById('demoTimer');
  if (timerEl) {
    var start = Date.now();
    function tick() {
      var elapsed = Math.floor((Date.now() - start) / 1000);
      var m = String(Math.floor(elapsed / 60)).padStart(2, '0');
      var s = String(elapsed % 60).padStart(2, '0');
      timerEl.textContent = m + ':' + s;
    }
    tick();
    setInterval(tick, 1000);
  }

  // Small inline-edit demo on the mock reason pill, echoing real behavior.
  var demoPill = document.getElementById('demoReasonPill');
  var demoText = document.getElementById('demoReasonText');
  if (demoPill && demoText) {
    demoPill.style.cursor = 'pointer';
    demoPill.addEventListener('click', function () {
      if (demoPill.querySelector('input')) return;
      var current = demoText.textContent;
      demoPill.innerHTML = '';
      var input = document.createElement('input');
      input.type = 'text';
      input.value = current;
      input.maxLength = 60;
      input.style.cssText =
        'background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.4);' +
        'border-radius:6px;color:#fff;font:inherit;padding:3px 7px;width:180px;outline:none;';
      demoPill.appendChild(input);
      input.focus();
      input.select();

      function commit() {
        var val = input.value.trim() || current;
        demoPill.innerHTML = '';
        var span = document.createElement('span');
        span.id = 'demoReasonText';
        span.textContent = val;
        var icon = document.createElement('span');
        icon.className = 'pill-edit-icon';
        icon.textContent = '\u270E';
        demoPill.appendChild(span);
        demoPill.appendChild(icon);
        demoText = span;
      }
      input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') commit();
        if (e.key === 'Escape') { input.value = current; commit(); }
      });
      input.addEventListener('blur', commit);
    });
  }

  // Gentle scroll-reveal for feature cards / steps — respects reduced motion.
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll('.feature, .step');
    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { io.observe(el); });
  }
})();
