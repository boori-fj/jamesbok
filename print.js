/* Printable recipe, in two versions:
     - page: a full Letter page with photo, ingredients beside the method, and a QR code to the video
       (the default, so Cmd/Ctrl+P prints this too)
     - card: a 7×5 recipe card, front (ingredients) and back (method) on one sheet with cut lines
   app.js fires "recipe:ready" with the recipe and the current scale whenever the page draws or the
   scale changes; this file rebuilds a hidden #print-sheet from it. Styles are in print.css. */
(function () {
  const h = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let sheet = null;

  function qrSvg(url) {
    if (!window.qrcode) return "";
    const qr = window.qrcode(0, "M");
    qr.addData(url);
    qr.make();
    return qr.createSvgTag({ cellSize: 1, margin: 0, scalable: true });
  }

  function ingredientList(r, k) {
    const J = window.JB;
    return r.groups.map((g) => `
      ${g.name ? `<h3 class="ps-group">${h(g.name)}</h3>` : ""}
      <ul>${g.items.map((it) => {
        const q = J.qty(it, k);
        return `<li><span class="ps-box"></span><span class="ps-q${q.soft ? " soft" : ""}">${h(q.text)}</span><span>${h(J.name(it, k))}${it.n ? `<span class="ps-note">, ${h(it.n)}</span>` : ""}${it.b ? `<span class="ps-brand">${h(it.b)}</span>` : ""}</span></li>`;
      }).join("")}</ul>`).join("");
  }

  function build(r, k) {
    const J = window.JB;
    const video = J.reelUrl(r.reel);
    const qr = qrSvg(video);
    const scaled = k !== 1 ? `<span class="ps-scaled">Scaled ${k === 0.5 ? "½" : k}×</span>` : "";
    const facts = [["Difficulty", r.level], ["Ready in", r.time], r.serves && ["Serves", r.serves]].filter(Boolean);
    const page = location.href.split("#")[0].replace(/^https?:\/\//, "");
    const steps = `<ol>${r.steps.map((s) => `<li>${h(s)}</li>`).join("")}</ol>`;
    const stepChars = r.steps.join("").length;
    const itemCount = r.groups.reduce((n, g) => n + g.items.length, 0);

    if (!sheet) {
      sheet = document.createElement("div");
      sheet.id = "print-sheet";
      sheet.setAttribute("aria-hidden", "true");
      document.body.appendChild(sheet);
    }

    sheet.innerHTML = `
      <article class="ps-page">
        <header class="ps-top">
          <span class="ps-mark">James Bok</span>
          <span class="ps-tags">${r.tags.map(h).join(" · ")}</span>
        </header>
        <div class="ps-head${r.photo ? " has-photo" : ""}">
          <div>
            <h1>${h(r.title)}</h1>
            <p class="ps-intro">${h(r.intro)}</p>
            <dl class="ps-facts">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${h(b)}</dd></div>`).join("")}</dl>
          </div>
          ${r.photo ? `<img class="ps-photo" src="${h(r.photo)}" alt="">` : ""}
        </div>
        <div class="ps-body">
          <section class="ps-ing">
            <h2>Ingredients ${scaled}</h2>
            ${ingredientList(r, k)}
            ${r.est ? `<p class="ps-est">James didn't list amounts for this one, so these are estimated from the video. Taste as you go.</p>` : ""}
          </section>
          <section class="ps-steps">
            <h2>Method</h2>
            ${steps}
          </section>
        </div>
        <footer class="ps-foot">
          <div class="ps-qr">${qr}</div>
          <div class="ps-foot-text">
            <b>Watch James make it</b>
            <span>Scan the code to open the video on Instagram.</span>
            <span class="ps-url">${h(page)}</span>
          </div>
          <div class="ps-posted">Posted ${h(J.date(r.posted))}<br>@jamesbok</div>
        </footer>
      </article>

      <div class="ps-cards">
        <article class="ps-card ps-front${itemCount > 12 ? " two-col" : ""}">
          <div class="pc-side">
            <span class="ps-mark">James Bok</span>
            <h1>${h(r.title)}</h1>
            <p class="pc-facts">${facts.map(([, b]) => h(b)).join(" · ")}</p>
            <div class="pc-qr">${qr}<span>Scan to watch the video</span></div>
          </div>
          <section class="ps-ing">
            <h2>Ingredients ${scaled}</h2>
            ${ingredientList(r, k)}
            ${r.est ? `<p class="ps-est">Amounts estimated from the video.</p>` : ""}
          </section>
        </article>
        <article class="ps-card ps-back${stepChars > 650 ? " two-col" : ""}">
          <header class="pc-back-head"><span class="ps-mark">James Bok</span><b>${h(r.title)}</b></header>
          <section class="ps-steps">
            <h2>Method</h2>
            ${steps}
          </section>
        </article>
      </div>`;
  }

  // Nudge the full page's body type down (10.5pt → 9pt at most) so most recipes fit one Letter page.
  // Longer ones still run onto a second page; steps never split across pages.
  function fitPage() {
    const page = sheet && sheet.querySelector(".ps-page");
    if (!page) return;
    const max = 9.9 * 96 + 1;
    let size = 10.5;
    page.style.fontSize = size + "pt";
    while (page.getBoundingClientRect().height > max && size > 9) {
      size -= 0.25;
      page.style.fontSize = size + "pt";
    }
  }

  // Shrink a card's type until everything fits its 7×5 box (down to 6pt).
  function fit(card) {
    let size = 9;
    card.style.fontSize = size + "pt";
    while (card.scrollHeight > card.clientHeight + 1 && size > 6) {
      size -= 0.25;
      card.style.fontSize = size + "pt";
    }
    return size;
  }
  function fitCards() {
    if (!sheet) return;
    sheet.querySelectorAll(".ps-card").forEach((card) => {
      // A long ingredient list or method gets two columns before the type gets too small.
      if (fit(card) < 7.5 && !card.classList.contains("two-col")) {
        card.classList.add("two-col");
        fit(card);
      }
    });
  }

  function print(card) {
    document.body.classList.toggle("print-card", !!card);
    if (card) fitCards();
    window.print();
  }
  window.addEventListener("afterprint", () => document.body.classList.remove("print-card"));
  window.addEventListener("beforeprint", () => { if (document.body.classList.contains("print-card")) fitCards(); });

  document.addEventListener("recipe:ready", (e) => {
    build(e.detail.r, e.detail.k);
    fitPage();
    fitCards();
  });
  // The photo can finish loading after the first fit, so fit again then.
  window.addEventListener("load", () => fitPage());

  window.JBPrint = { print, fitCards, fitPage };
})();
