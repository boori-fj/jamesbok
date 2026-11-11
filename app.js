(function () {
  const R = window.RECIPES || [];
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- formatting ---------- */
  const FRACS = [[0, ""], [1 / 8, "⅛"], [1 / 4, "¼"], [1 / 3, "⅓"], [1 / 2, "½"], [2 / 3, "⅔"], [3 / 4, "¾"], [1, ""]];
  function frac(n) {
    let whole = Math.floor(n + 1e-9);
    const rest = n - whole;
    let best = FRACS[0];
    for (const f of FRACS) if (Math.abs(f[0] - rest) < Math.abs(best[0] - rest)) best = f;
    if (best[0] === 1) { whole += 1; best = FRACS[0]; }
    if (!whole && !best[1]) return "0";
    return (whole || "") + best[1];
  }
  const PLURAL = { cup: "cups", can: "cans", clove: "cloves", package: "packages", block: "blocks", head: "heads", slice: "slices", scoop: "scoops", stalk: "stalks", bunch: "bunches", sheet: "sheets", packet: "packets", bag: "bags", jar: "jars" };
  function qty(it, k) {
    if (it.q == null) return { text: it.t || "", soft: true };
    let a = it.q * k;
    let b = it.q2 != null ? it.q2 * k : null;
    let u = it.u;
    // When scaled, keep amounts in a sensible unit: 6 tsp → 2 tbsp, ⅛ cup → 2 tbsp, ¼ tbsp → ¾ tsp.
    if (k !== 1) {
      if (u === "tsp" && a >= 3 && Number.isInteger((a / 3) * 4)) { a /= 3; b = b && b / 3; u = "tbsp"; }
      else if (u === "cup" && a < 0.25) { a *= 16; b = b && b * 16; u = "tbsp"; }
      else if (u === "tbsp" && a < 0.5) { a *= 3; b = b && b * 3; u = "tsp"; }
    }
    let text = frac(a) + (b != null ? "–" + frac(b) : "");
    if (u) text += " " + ((b || a) > 1 && PLURAL[u] ? PLURAL[u] : u);
    return { text, soft: false };
  }
  function name(it, k) {
    if (Array.isArray(it.i)) return it.q != null && it.q * k <= 1 ? it.i[0] : it.i[1];
    return it.i;
  }
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  function date(iso) {
    const [y, m, d] = iso.split("-").map(Number);
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  }
  const reelUrl = (id) => `https://www.instagram.com/p/${id}/`;
  const allItems = (r) => r.groups.flatMap((g) => g.items);
  // The line under every recipe title: difficulty, then how long until it's ready.
  const metaLine = (r) => `<div class="meta"><span>${esc(r.level)}</span><span>${esc(r.time)}</span></div>`;

  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(toast._t);
    toast._t = setTimeout(() => t.classList.remove("show"), 1800);
  }

  // One shopping-list line per ingredient, e.g. "- 2 cups cooked rice, chilled".
  function listLines(r, k) {
    const lines = [];
    r.groups.forEach((g) => {
      if (g.name) lines.push(g.name.toUpperCase());
      g.items.forEach((it) => {
        const q = qty(it, k);
        lines.push(`- ${q.soft ? name(it, k) + (q.text ? ", " + q.text : "") : q.text + " " + name(it, k)}${it.n ? ", " + it.n : ""}`);
      });
    });
    return lines;
  }
  async function copyText(text, done) {
    try { await navigator.clipboard.writeText(text); toast(done); }
    catch { toast("Couldn't copy. Try selecting the text instead."); }
  }

  /* ---------- index ---------- */
  function renderIndex() {
    const list = $("#list");
    const filter = $("#filter");
    const search = $("#search");
    const count = $("#count");
    let tag = "All";

    // Dropdown of tags, most-used first, with how many recipes each has.
    const counts = {};
    R.forEach((r) => r.tags.forEach((t) => (counts[t] = (counts[t] || 0) + 1)));
    const tags = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    filter.innerHTML =
      `<option value="All">All recipes (${R.length})</option>` +
      tags.map((t) => `<option value="${esc(t)}">${esc(t)} (${counts[t]})</option>`).join("");

    // The grid shows a page of recipes at a time; "Show more" adds the next page.
    const PAGE = 24;
    const moreWrap = $("#more-wrap");
    const more = $("#more");
    let limit = PAGE;

    function draw() {
      const q = search.value.trim().toLowerCase();
      const shown = R.filter((r) => {
        if (tag !== "All" && !r.tags.includes(tag)) return false;
        if (!q) return true;
        const hay = [r.title, r.intro, ...r.tags, ...allItems(r).map((it) => [].concat(it.i).join(" "))].join(" ").toLowerCase();
        return hay.includes(q);
      });

      const filtered = tag !== "All" || q;
      count.textContent = filtered ? `${shown.length} of ${R.length} recipes` : `${R.length} recipes`;
      const left = shown.length - limit;
      if (moreWrap) {
        moreWrap.hidden = left <= 0;
        more.textContent = `Show more recipes (${left} more)`;
      }
      if (!shown.length) {
        list.innerHTML = `<li class="empty">Nothing matches “${esc(search.value)}”. Try an ingredient, like salmon or gochujang.</li>`;
        return;
      }
      list.innerHTML = shown
        .slice(0, limit)
        .map((r) => {
          return `<li class="card"><a href="recipe.html?r=${encodeURIComponent(r.slug)}">
            <div class="card-photo">${r.photo ? `<img src="${esc(r.photo)}" alt="" width="1080" height="1350" loading="lazy">` : ""}</div>
            <p class="label">${r.tags.slice(0, 2).map(esc).join(" · ")}</p>
            <h3>${esc(r.title)}</h3>
            ${metaLine(r)}
          </a></li>`;
        })
        .join("");
    }

    // Newest recipe: a small card in the corner of the hero.
    const feature = $("#feature");
    const latest = R[0];
    if (feature && latest) {
      feature.innerHTML = `<a class="newest" href="recipe.html?r=${encodeURIComponent(latest.slug)}">
        ${latest.photo ? `<img src="${esc(latest.photo)}" alt="" width="1080" height="1350">` : ""}
        <span><small>Newest recipe</small><b>${esc(latest.title)}</b>${metaLine(latest)}</span>
      </a>`;
    }

    filter.addEventListener("change", () => {
      tag = filter.value;
      limit = PAGE;
      draw();
    });
    search.addEventListener("input", () => {
      limit = PAGE;
      draw();
    });
    if (more) {
      more.addEventListener("click", () => {
        limit += PAGE;
        draw();
        // Move keyboard focus to the first newly shown card.
        const next = list.children[limit - PAGE];
        if (next) next.querySelector("a")?.focus({ preventScroll: true });
      });
    }
    draw();
  }

  /* ---------- meal plan for the week ---------- */
  function renderPlan() {
    const box = $("#plan-list");
    if (!box) return;
    const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    // Only proper meals go in the plan: no drinks, snacks, sides or sweets.
    const SKIP = ["Drink", "Snack", "Side", "Sweet", "Breakfast", "Sauce"];
    const pool = R.filter((r) => !r.tags.some((t) => SKIP.includes(t)));
    const KEY = "jb-meal-plan";

    function shuffle(prev) {
      for (let tries = 0; tries < 8; tries++) {
        const a = pool.map((r) => r.slug);
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        const pick = a.slice(0, DAYS.length);
        if (!prev || pick.join() !== prev.join()) return pick;
      }
    }

    // Keep this viewer's plan between visits until they shuffle again.
    let plan = null;
    try { plan = JSON.parse(localStorage.getItem(KEY)); } catch {}
    const valid = Array.isArray(plan) && plan.length === DAYS.length && plan.every((s) => pool.some((r) => r.slug === s));
    if (!valid) plan = shuffle();
    const save = () => { try { localStorage.setItem(KEY, JSON.stringify(plan)); } catch {} };
    save();

    function draw(fresh) {
      box.innerHTML = plan
        .map((slug, i) => {
          const r = R.find((x) => x.slug === slug);
          return `<li class="day"><a href="recipe.html?r=${encodeURIComponent(r.slug)}">
            <span class="day-name">${DAYS[i]}</span>
            <div class="day-photo">${r.photo ? `<img src="${esc(r.photo)}" alt="" width="1080" height="1350" loading="lazy">` : ""}</div>
            <div class="day-text">
              <h3>${esc(r.title)}</h3>
              ${metaLine(r)}
            </div>
          </a></li>`;
        })
        .join("");
      if (fresh) {
        box.classList.remove("fresh");
        void box.offsetWidth; // restart the animation
        box.classList.add("fresh");
      }
    }

    $("#shuffle").addEventListener("click", () => {
      plan = shuffle(plan);
      save();
      draw(true);
    });
    $("#plan-copy").addEventListener("click", () => {
      const lines = ["Meal plan for the week", ""];
      plan.forEach((slug, i) => {
        const r = R.find((x) => x.slug === slug);
        lines.push(`${DAYS[i].toUpperCase()}: ${r.title}`, ...listLines(r, 1), "");
      });
      copyText(lines.join("\n").trim(), "Shopping list for the week copied");
    });
    draw();
  }

  /* ---------- recipe ---------- */
  function renderRecipe() {
    const slug = new URLSearchParams(location.search).get("r");
    const i = R.findIndex((r) => r.slug === slug);
    const main = $("#recipe");
    if (i < 0) {
      main.innerHTML = `<div class="r-head"><div><h1>Recipe not found</h1><p class="r-intro"><a href="index.html">See all recipes</a></p></div></div>`;
      return;
    }
    const r = R[i];
    let k = 1;
    document.title = `${r.title} · James Bok Recipes`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = r.intro;

    const facts = [
      ["Difficulty", r.level],
      ["Ready in", r.time],
      r.serves && ["Serves", r.serves],
      ["Posted", date(r.posted)],
    ].filter(Boolean);

    const newer = R[i - 1], older = R[i + 1];

    main.innerHTML = `
      <header class="r-head">
        <div class="r-head-text">
          <div class="tags">${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
          <h1>${esc(r.title)}</h1>
          <p class="r-intro">${esc(r.intro)}</p>
          <dl class="facts">${facts.map(([a, b]) => `<div><dt>${a}</dt><dd>${esc(b)}</dd></div>`).join("")}</dl>
        </div>
        ${r.photo ? `<figure class="r-photo"><img src="${esc(r.photo)}" alt="${esc(r.alt || r.title)}" width="1080" height="1350"></figure>` : ""}
      </header>

      <div class="r-body">
        <aside class="ingredients">
          <div class="panel">
            <div class="panel-head">
              <h3 class="label">Ingredients</h3>
              <div class="scale" role="group" aria-label="Scale recipe">
                ${[0.5, 1, 2, 3].map((m) => `<button type="button" data-k="${m}" aria-pressed="${m === 1}">${m === 0.5 ? "½" : m}×</button>`).join("")}
              </div>
            </div>
            <div id="groups"></div>
            <div class="panel-foot">
              <button type="button" class="textbtn" id="copy">Copy shopping list</button>
              <button type="button" class="textbtn" id="reset">Clear ticks</button>
            </div>
          </div>
        </aside>

        <section class="method">
          <h3 class="label">Method</h3>
          <ol class="steps">${r.steps.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>
          <p class="hint">Tap a step to mark it done.</p>

          <div class="video">
            <h3 class="label">Watch it</h3>
            <div class="video-grid">
              <div>
                <blockquote class="instagram-media" data-instgrm-permalink="${reelUrl(r.reel)}" data-instgrm-version="14">
                  <a class="embed-fallback" href="${reelUrl(r.reel)}" target="_blank" rel="noopener">Watch the video on Instagram ↗</a>
                </blockquote>
              </div>
              <p>Posted ${date(r.posted)} · <a href="${reelUrl(r.reel)}" target="_blank" rel="noopener">Open in Instagram ↗</a></p>
            </div>
          </div>
        </section>
      </div>

      <nav class="pager" aria-label="More recipes">
        ${older ? `<a class="prev" href="recipe.html?r=${older.slug}"><small class="label">Older</small><span>${esc(older.title)}</span></a>` : "<i></i>"}
        ${newer ? `<a class="next" href="recipe.html?r=${newer.slug}"><small class="label">Newer</small><span>${esc(newer.title)}</span></a>` : "<i></i>"}
      </nav>`;

    const groupsEl = $("#groups");
    const ticked = new Set();
    function drawIngredients() {
      groupsEl.innerHTML = r.groups
        .map((g, gi) => `<div class="group">
          ${g.name ? `<h4>${esc(g.name)}</h4>` : ""}
          <ul class="ing">${g.items
            .map((it, ii) => {
              const id = `${gi}-${ii}`;
              const q = qty(it, k);
              return `<li><label>
                <input type="checkbox" data-id="${id}" ${ticked.has(id) ? "checked" : ""}>
                <span class="q${q.soft ? " soft" : ""}">${esc(q.text)}</span>
                <span>${esc(name(it, k))}${it.n ? `<span class="n">, ${esc(it.n)}</span>` : ""}${it.b ? `<span class="b">${esc(it.b)}</span>` : ""}</span>
              </label></li>`;
            })
            .join("")}</ul>
        </div>`)
        .join("");
    }
    drawIngredients();

    groupsEl.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      if (!id) return;
      e.target.checked ? ticked.add(id) : ticked.delete(id);
    });
    $(".scale").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      k = Number(b.dataset.k);
      $(".scale").querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
      drawIngredients();
    });
    $("#reset").addEventListener("click", () => { ticked.clear(); drawIngredients(); });
    $("#copy").addEventListener("click", async () => {
      const lines = [r.title + (k !== 1 ? ` (${k === 0.5 ? "½" : k}×)` : ""), "", ...listLines(r, k)];
      copyText(lines.join("\n").trim(), "Shopping list copied");
    });
    $(".steps").addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (li) li.classList.toggle("done");
    });

    // Instagram's official embed script turns the blockquote into the reel player.
    const s = document.createElement("script");
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    s.onload = () => window.instgrm && window.instgrm.Embeds.process();
    document.body.appendChild(s);
  }

  /* ---------- header menu (phones and tablets) ---------- */
  function initMenu() {
    const head = $(".site-head");
    const btn = $(".menu-btn");
    if (!head || !btn) return;
    const set = (open) => {
      head.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open);
      btn.textContent = open ? "Close" : "Menu";
    };
    btn.addEventListener("click", () => set(!head.classList.contains("open")));
    head.querySelectorAll(".head-links a").forEach((a) => a.addEventListener("click", () => set(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && head.classList.contains("open")) { set(false); btn.focus(); } });
  }

  /* ---------- newsletter ---------- */
  // The form posts to whatever newsletter service is set in its action="" attribute.
  // Until one is connected, it says so instead of pretending to sign people up.
  function initNewsletter() {
    const form = $("#news-form");
    if (!form) return;
    const input = $("#news-email");
    const note = $("#news-note");
    form.addEventListener("submit", (e) => {
      if (!input.checkValidity()) {
        e.preventDefault();
        note.textContent = "Please enter a valid email address.";
        input.focus();
        return;
      }
      if (!form.getAttribute("action")) {
        e.preventDefault();
        note.textContent = "Sign-ups open soon. Until then, follow @jamesbok on Instagram for new recipes.";
      }
    });
  }

  initMenu();
  initNewsletter();
  if ($("#list")) renderIndex();
  if ($("#plan-list")) renderPlan();
  if ($("#recipe")) renderRecipe();
})();
