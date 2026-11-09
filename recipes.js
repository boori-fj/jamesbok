/*
  Recipe data. Newest first.
  To add a recipe, copy one object and edit it.
  photo: a 4:5 image (1080×1350) in this folder, named after the slug. alt: one line describing it.

  Ingredient fields:
    q   number (scales with the ½× / 2× buttons). Leave out for "to taste" items.
    q2  upper end of a range, e.g. q: 24, q2: 32 → "24–32"
    u   unit: tsp, tbsp, cup, lb, oz, can, clove (cup/can/clove pluralise themselves)
    i   ingredient name, or ["egg", "eggs"] when it needs a plural
    n   prep note shown after the name ("whisked", "minced")
    t   text used instead of a quantity ("to taste", "as needed")
    b   brand used in the video
*/
window.RECIPES = [
  {
    slug: "salmon-fried-rice",
    title: "High-Protein Salmon Fried Rice",
    posted: "2026-11-06",
    reel: "DfabOa3prl8",
    photo: "salmon-fried-rice.jpg",
    alt: "James holding out a plate of salmon fried rice topped with green onion",
    serves: "3–4",
    time: "15 min",
    tags: ["Rice", "High protein", "Quick"],
    intro:
      "A 15-minute dinner made with two cans of wild salmon and cold leftover rice. Easy to double when you're feeding a crowd.",
    groups: [
      {
        items: [
          { q: 2, u: "can", i: "wild pink salmon", b: "Wild Planet" },
          { q: 2, u: "cup", i: "cooked rice", n: "chilled, or fully cooked frozen rice" },
          { q: 2, i: ["egg", "eggs"], n: "whisked" },
          { q: 3, i: ["green onion", "green onions"], n: "chopped, whites and greens kept apart" },
          { q: 1.5, u: "tbsp", i: "soy sauce", n: "or to taste" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 2, u: "tsp", i: "neutral oil" },
          { t: "to taste", i: "black pepper" },
        ],
      },
      {
        name: "Optional",
        items: [{ t: "a handful", i: "shelled edamame", n: "added in the video" }],
      },
    ],
    steps: [
      "Heat a little of the neutral oil in a nonstick pan over medium heat. Pour in the eggs and scramble them softly until just set, then slide them onto a plate.",
      "Add the rest of the oil and the green onion whites. Stir until they smell fragrant.",
      "Add the rice and break up any clumps. Fry until it's hot all the way through. If you're using edamame, add it now.",
      "Add the salmon, breaking it into flakes with your spatula, then put the eggs back in.",
      "Season with the soy sauce, sesame oil and black pepper, and toss until everything is evenly coated.",
      "Take it off the heat, stir in the green onion greens and serve.",
    ],
  },

  {
    slug: "sticky-toffee-pie-chia-pudding",
    title: "Sticky Toffee Pie Chia Pudding",
    posted: "2026-11-02",
    reel: "DfQMgg9p7VN",
    photo: "sticky-toffee-pie-chia-pudding.jpg",
    alt: "A jar of chia pudding topped with chopped dates and Sweet Thins crumbs, seen from above",
    serves: "4",
    time: "Chill until set",
    tags: ["Sweet", "Meal prep", "High protein"],
    intro:
      "Five ingredients. Blended dates give it a caramel sweetness, and crushed Honey Cinnamon Sweet Thins stand in for the pie crust. Thick, high in protein and fiber, and it keeps for meal prep.",
    groups: [
      {
        items: [
          { q: 8, i: ["Medjool date", "Medjool dates"], n: "pitted" },
          { q: 1.5, u: "cup", i: "plain Greek yogurt" },
          { q: 0.75, u: "cup", i: "milk of choice" },
          { q: 0.5, u: "cup", i: "chia seeds" },
          { q: 24, q2: 32, i: "Honey Cinnamon Sweet Thins", b: "Simple Mills" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "vanilla extract" },
          { q: 0.25, u: "tsp", i: "cinnamon" },
          { t: "a pinch", i: "sea salt" },
        ],
      },
    ],
    steps: [
      "Pit the dates and blend them with the milk until smooth.",
      "Pour the date milk into a container. Add the Greek yogurt and chia seeds, plus the vanilla, cinnamon and salt if you're using them, and stir well.",
      "Cover and refrigerate until thick and spoonable, a few hours or overnight.",
      "Crush the Sweet Thins into coarse crumbs.",
      "Layer it in jars or glasses: crumbs on the bottom, then pudding, then more crumbs on top.",
    ],
  },

  {
    slug: "peanut-cucumber-salad",
    title: "Peanut Cucumber Salad",
    posted: "2026-11-01",
    reel: "DfNVIsUJ-Wp",
    photo: "peanut-cucumber-salad.jpg",
    alt: "James holding a glass bowl of cucumber salad in peanut sauce, a slice raised on chopsticks",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "Savory, tangy, creamy and a little spicy. Salting the cucumbers first pulls out their water, so the peanut sauce stays thick.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 5, i: ["mini cucumber", "mini cucumbers"] },
          { q: 0.5, u: "tsp", i: "salt", b: "Osmo" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1.5, u: "tbsp", i: "peanut butter" },
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 1, u: "tsp", i: "honey", b: "Manukora" },
          { q: 2, u: "clove", i: "garlic", n: "minced", b: "Dorot" },
          { q: 0.5, u: "tbsp", i: "chili oil", b: "Momofuku" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Slice the cucumbers into rounds.",
      "Toss them with the salt in a bowl and set aside while you make the sauce. They'll release a good amount of water.",
      "Whisk the peanut butter, soy sauce, rice vinegar, honey, garlic, chili oil, sesame oil and sesame seeds together until smooth.",
      "Drain the liquid from the cucumbers.",
      "Pour the sauce over the cucumbers, toss to coat and serve.",
    ],
  },

  {
    slug: "spicy-creamy-shrimp-pasta",
    title: "Spicy Creamy Shrimp Pasta",
    posted: "2026-10-27",
    reel: "DfAtQclJDs7",
    photo: "spicy-creamy-shrimp-pasta.jpg",
    alt: "A white bowl of penne and shrimp in a creamy gochujang sauce with grated Parmesan",
    tags: ["Pasta", "High protein", "Spicy"],
    intro:
      "Creamy pasta with a Korean twist. Gochujang brings the heat and blended cottage cheese makes the sauce, so it's high in protein without any cream.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "shrimp", n: "peeled" },
          { q: 8, u: "oz", i: "pasta", n: "penne in the video" },
          { q: 0.5, u: "tbsp", i: "olive oil" },
          { q: 0.5, u: "tbsp", i: "butter" },
          { q: 3, u: "clove", i: "garlic", n: "minced" },
          { q: 1.5, u: "tbsp", i: "gochujang" },
          { q: 0.75, u: "cup", i: "cottage cheese" },
          { q: 0.25, u: "cup", i: "milk" },
          { q: 0.25, u: "cup", i: "Parmesan", n: "freshly grated" },
          { t: "as needed", i: "pasta water" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Cook the pasta in salted water. Scoop out a cup of the pasta water before you drain it.",
      "Blend the cottage cheese and milk until completely smooth.",
      "Season the shrimp with salt and pepper. Sear them in the olive oil until pink, then set them aside.",
      "In the same pan, melt the butter, add the garlic and cook briefly, then stir in the gochujang.",
      "Pour in the blended cottage cheese and stir it into a smooth, pink sauce.",
      "Add the pasta and Parmesan, loosening the sauce with splashes of pasta water until it coats the pasta.",
      "Put the shrimp back in, toss, and season with salt and pepper.",
    ],
  },

  {
    slug: "soy-honey-garlic-chicken",
    title: "Soy Honey Garlic Chicken",
    posted: "2026-10-25",
    reel: "De7gGJIp2gx",
    photo: "soy-honey-garlic-chicken.jpg",
    alt: "James eating a piece of soy honey garlic chicken, with the plate in front of him",
    time: "15 min in the air fryer",
    tags: ["Chicken", "Air fryer", "High protein"],
    intro:
      "Five ingredients, one bowl and 15 minutes in the air fryer.",
    groups: [
      {
        items: [
          { q: 1.5, u: "lb", i: "chicken thighs", n: "boneless" },
          { q: 2, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 3, u: "clove", i: "garlic", n: "minced", b: "Dorot" },
          { q: 1, u: "tsp", i: "sesame oil" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "to taste", i: "black pepper" },
          { t: "to finish", i: "green onion", n: "sliced" },
          { t: "to finish", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Trim any excess fat from the chicken thighs.",
      "In a bowl, mix the soy sauce, honey, garlic and sesame oil, plus black pepper if you like.",
      "Add the chicken and toss until every piece is coated.",
      "Air fry at 400°F for 15 minutes, flipping halfway through.",
      "Slice and finish with green onion and sesame seeds.",
    ],
  },
];
