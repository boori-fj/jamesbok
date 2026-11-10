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

  {
    slug: "celery-salad",
    title: "Crunchy Celery Salad",
    posted: "2026-10-19",
    reel: "DesJeC2Jg7Y",
    photo: "celery-salad.jpg",
    alt: "James holding a glass bowl of celery salad with olives, walnuts and Parmesan",
    tags: ["Salad", "No cook"],
    intro:
      "Crunchy, savory and mostly celery. Olives and walnuts bring salt and crunch, and a lemony Parmesan dressing pulls it together.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 3, u: "cup", i: "celery", n: "thinly sliced" },
          { q: 1, u: "cup", i: "cucumbers", n: "sliced" },
          { q: 0.25, u: "cup", i: "red onion", n: "thinly sliced" },
          { q: 0.5, u: "cup", i: "olives" },
          { q: 0.5, u: "cup", i: "walnuts" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, q2: 2, u: "tsp", i: "honey", b: "Manukora" },
          { q: 1, u: "tbsp", i: "parsley", n: "chopped, or as much as you like" },
          { q: 1, u: "clove", i: "garlic", n: "minced", b: "Dorot" },
          { q: 0.25, u: "cup", i: "Parmesan", n: "grated" },
        ],
      },
    ],
    steps: [
      "Halve the celery stalks lengthwise, then slice them thinly on an angle.",
      "Slice the cucumbers and thinly slice the red onion.",
      "Put the celery, cucumber, onion, olives and walnuts in a large bowl.",
      "In a small bowl, whisk the lemon juice, olive oil, Dijon, honey, parsley, garlic and Parmesan.",
      "Pour the dressing over the salad and toss well.",
    ],
  },

  {
    slug: "korean-spicy-chicken",
    title: "Korean Spicy Chicken",
    posted: "2026-10-14",
    reel: "Dee_e4vpkBs",
    photo: "korean-spicy-chicken.jpg",
    alt: "A plate of gochujang chicken with rice and greens in front of James",
    tags: ["Chicken", "Spicy", "Meal prep"],
    intro:
      "An easy meal prep: sticky gochujang chicken served over rice with cucumber, kimchi, scallions and seaweed.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "chicken breast or thighs", n: "diced" },
          { q: 1, u: "tbsp", i: "gochujang" },
          { q: 1, u: "tbsp", i: "low-sodium soy sauce" },
          { q: 1, u: "tbsp", i: "honey" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "rice vinegar" },
          { q: 1, u: "clove", i: "garlic", n: "grated" },
        ],
      },
      {
        name: "To serve",
        items: [
          { t: "", i: "rice" },
          { t: "", i: "cucumber" },
          { t: "", i: "kimchi" },
          { t: "", i: "scallions" },
          { t: "", i: "seaweed" },
        ],
      },
    ],
    steps: [
      "Dice the chicken into bite-size pieces.",
      "In a bowl, mix the gochujang, soy sauce, honey, sesame oil, rice vinegar and garlic.",
      "Add the chicken and toss until every piece is coated.",
      "Cook in a pan over medium-high heat, stirring, until the chicken is cooked through and the sauce turns sticky.",
      "Serve over rice with cucumber, kimchi, scallions and seaweed.",
    ],
  },

  {
    slug: "lighter-boxed-cake",
    title: "Lighter Boxed Cake with Maple Yogurt Frosting",
    posted: "2026-10-13",
    reel: "DecpiMsSM9T",
    photo: "lighter-boxed-cake.jpg",
    alt: "A slice of frosted cake topped with walnuts, held up on a cake stand",
    tags: ["Sweet", "Baking"],
    intro:
      "A few simple swaps make a boxed cake less indulgent without losing the moist, fluffy texture: milk, olive oil and applesauce in the batter, and a Greek yogurt maple frosting on top.",
    groups: [
      {
        name: "Cake",
        items: [
          { q: 1, i: ["box cake mix", "boxes cake mix"] },
          { q: 1, u: "cup", i: "milk" },
          { q: 2, u: "tbsp", i: "olive oil" },
          { q: 2, u: "tbsp", i: "unsweetened applesauce" },
          { q: 3, i: ["egg", "eggs"] },
          { q: 1, u: "tsp", i: "vanilla extract", n: "optional" },
          { t: "a pinch", i: "salt", n: "optional" },
        ],
      },
      {
        name: "Greek yogurt maple frosting",
        items: [
          { q: 0.5, u: "cup", i: "thick plain Greek yogurt" },
          { q: 2, u: "tbsp", i: "cream cheese", n: "softened" },
          { q: 1, u: "tbsp", i: "pure maple syrup" },
          { q: 0.5, u: "tsp", i: "vanilla extract" },
          { t: "a pinch", i: "salt" },
        ],
      },
      {
        name: "Optional",
        items: [{ t: "a handful", i: "chopped walnuts", n: "added in the video" }],
      },
    ],
    steps: [
      "Heat the oven as the cake mix box says, and grease or line your pan.",
      "Whisk the cake mix with the milk, olive oil, applesauce and eggs, plus the vanilla and salt if you're using them.",
      "Pour the batter into the pan and bake as directed on the box, until a toothpick comes out clean.",
      "Let the cake cool completely, then turn it out of the pan.",
      "Stir the yogurt, cream cheese, maple syrup, vanilla and salt together until smooth.",
      "Spread the frosting over the cooled cake, scatter walnuts on top if you like, and slice.",
    ],
  },

  {
    slug: "garlic-oyster-sauce-celery",
    title: "Garlic Oyster Sauce Celery",
    posted: "2026-10-10",
    reel: "DeUz2MEvI5-",
    photo: "garlic-oyster-sauce-celery.jpg",
    alt: "A plate of stir-fried celery with sesame seeds, James lifting a piece with chopsticks",
    tags: ["Side", "Quick"],
    intro:
      "The best way to use up leftover celery: a quick stir-fry with garlic and oyster sauce.",
    groups: [
      {
        items: [
          { q: 2.5, u: "cup", i: "celery", n: "sliced on an angle" },
          { q: 2, u: "clove", i: "garlic", n: "minced", b: "Dorot" },
          { q: 1, u: "tbsp", i: "oyster sauce", b: "Lee Kum Kee" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, i: ["green onion", "green onions"], n: "sliced" },
          { q: 0.5, u: "tbsp", i: "sesame seeds", n: "optional" },
        ],
      },
    ],
    steps: [
      "Cut the celery into bite-size pieces on an angle.",
      "Stir-fry the celery and garlic in a hot pan with a little oil until the celery turns bright green but still has some crunch.",
      "Add the oyster sauce and toss to coat.",
      "Take the pan off the heat and finish with the sesame oil, green onion and sesame seeds.",
    ],
  },

  {
    slug: "peanut-tuna-salad",
    title: "Asian Peanut Tuna Salad",
    posted: "2026-10-08",
    reel: "DePxNaLSuR9",
    photo: "peanut-tuna-salad.jpg",
    alt: "A glass bowl of peanut tuna salad topped with sliced almonds",
    tags: ["Salad", "High protein", "No cook"],
    intro:
      "High in protein and fiber, with omega-3s from the tuna. Apple and carrot keep it crunchy and a little sweet against the peanut dressing.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 2, u: "can", i: "tuna", n: "no need to drain this brand", b: "Wild Planet" },
          { q: 1, u: "cup", i: "purple cabbage", n: "shredded" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 0.5, u: "cup", i: "carrot", n: "grated" },
          { q: 2, i: ["green onion", "green onions"], n: "sliced" },
          { q: 1, i: ["apple", "apples"], n: "diced" },
          { t: "to top", i: "sliced almonds and sesame seeds", n: "optional" },
        ],
      },
      {
        name: "Peanut dressing",
        items: [
          { q: 2, u: "tbsp", i: "peanut butter" },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 0.5, i: ["lime", "limes"], n: "juiced" },
          { q: 0.5, u: "tbsp", i: "honey" },
          { q: 1, u: "clove", i: "garlic" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
          { q: 1, u: "tsp", i: "sesame oil" },
        ],
      },
    ],
    steps: [
      "Add the tuna to a large bowl. Wild Planet has no added liquid, so there's nothing to drain.",
      "Shred the cabbage, dice the cucumber, grate the carrot, slice the green onions, and peel and dice the apple. Add it all to the bowl.",
      "Whisk the peanut butter, soy sauce, lime juice, honey, garlic, rice vinegar and sesame oil until smooth.",
      "Pour the dressing over the salad and mix well.",
      "Top with sliced almonds and sesame seeds.",
    ],
  },

  {
    slug: "sweet-spicy-crispy-tofu",
    title: "Sweet and Spicy Crispy Tofu",
    posted: "2026-10-05",
    reel: "DeH74sBJTij",
    photo: "sweet-spicy-crispy-tofu.jpg",
    alt: "A plate of crispy tofu cubes coated in red sauce, with the sauce bottle behind",
    time: "15 min in the air fryer",
    tags: ["Air fryer", "High protein", "Spicy"],
    intro:
      "Four ingredients and no deep frying. Cornstarch and the air fryer make the tofu crisp, then it's tossed in a sweet and spicy sauce made with gochujang, soy and garlic.",
    groups: [
      {
        items: [
          { q: 1, i: ["block extra-firm tofu", "blocks extra-firm tofu"], n: "about 14–16 oz" },
          { q: 1, u: "tbsp", i: "olive oil" },
          { q: 2, u: "tbsp", i: "cornstarch" },
          { q: 3, u: "tbsp", i: "Sweet & Spicy Sauce", b: "Momofuku" },
          { t: "to finish", i: "green onion and sesame seeds", n: "optional" },
        ],
      },
    ],
    steps: [
      "Pat the tofu dry with paper towels, pressing out as much water as you can.",
      "Cut it into bite-size cubes.",
      "Toss the cubes with the olive oil, then with the cornstarch until evenly coated.",
      "Spread them on a lined tray and air fry at 400°F for 15 minutes, tossing halfway through.",
      "Toss the crispy tofu in the sauce and top with green onion and sesame seeds.",
    ],
  },

  {
    slug: "chipotle-chicken-salad",
    title: "Chipotle Chicken Salad",
    posted: "2026-10-01",
    reel: "Dd91E8apgGj",
    photo: "chipotle-chicken-salad.jpg",
    alt: "James holding a glass bowl of chipotle chicken salad",
    tags: ["Chicken", "Salad", "Spicy"],
    intro:
      "Protein, fiber and some heat. Chipotle and Greek yogurt make a smoky dressing, with celery and red onion for crunch.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 2, i: ["chicken breast", "chicken breasts"], n: "cooked and shredded" },
          { q: 1, u: "cup", i: "celery", n: "diced" },
          { q: 0.25, u: "cup", i: "red onion", n: "diced" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 2, i: ["chipotle pepper in adobo", "chipotle peppers in adobo"], n: "chopped", b: "La Costeña" },
          { q: 1, u: "tbsp", i: "adobo sauce", n: "from the can" },
          { q: 0.75, u: "cup", i: "Greek yogurt", b: "Stonyfield" },
          { q: 1, u: "clove", i: "garlic", b: "Dorot" },
          { q: 0.5, i: ["lime", "limes"], n: "juiced" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
      {
        name: "To serve",
        items: [{ t: "", i: "blue corn tortilla chips", b: "Siete" }],
      },
    ],
    steps: [
      "Shred the cooked chicken with two forks.",
      "Dice the celery and red onion and add them to the chicken.",
      "Chop the chipotle peppers and mix them with the adobo sauce, Greek yogurt, garlic, lime juice, salt and pepper.",
      "Stir the sauce into the chicken until everything is coated.",
      "Serve with blue corn tortilla chips.",
    ],
  },

  {
    slug: "spinach-artichoke-dip",
    title: "High-Protein Spinach Artichoke Dip",
    posted: "2026-09-29",
    reel: "Dd4p8P7pOYn",
    photo: "spinach-artichoke-dip.jpg",
    alt: "A glass bowl of spinach artichoke dip with a box of almond flour crackers behind",
    tags: ["Snack", "High protein", "No cook"],
    intro:
      "Creamy, high in protein and one of the easiest dips to make. Blended cottage cheese and Greek yogurt are the base, and there's no baking.",
    groups: [
      {
        items: [
          { q: 10, u: "oz", i: "frozen spinach", n: "thawed" },
          { q: 1, u: "can", i: "artichoke hearts", n: "drained and chopped" },
          { q: 1, u: "cup", i: "cottage cheese", n: "blended until smooth" },
          { q: 0.5, u: "cup", i: "plain Greek yogurt" },
          { q: 3, u: "clove", i: "garlic", n: "minced" },
          { q: 1 / 3, u: "cup", i: "Parmesan" },
          { q: 1, i: ["green onion", "green onions"], n: "sliced" },
          { t: "to taste", i: "salt and pepper" },
          { t: "optional", i: "lemon or jalapeño" },
        ],
      },
      {
        name: "To serve",
        items: [{ t: "", i: "almond flour crackers", b: "Simple Mills" }],
      },
    ],
    steps: [
      "Squeeze as much water as you can out of the thawed spinach.",
      "Drain and chop the artichoke hearts.",
      "Blend the cottage cheese until completely smooth.",
      "Stir the cottage cheese, yogurt, spinach, artichokes, garlic, Parmesan and green onion together. Season with salt and pepper, plus lemon or jalapeño if you like.",
      "Serve with crackers for dipping.",
    ],
  },

  {
    slug: "high-protein-turkey-sandwich",
    title: "High-Protein Turkey Sandwich",
    posted: "2026-09-25",
    reel: "DdtziLORBOp",
    photo: "high-protein-turkey-sandwich.jpg",
    alt: "A tall turkey sandwich cut in half and stacked on a plate by a window",
    serves: "1",
    tags: ["High protein", "Quick"],
    intro:
      "Turkey, turkey bacon and a sriracha cottage cheese spread add up to more than 50 grams of protein in one sandwich.",
    groups: [
      {
        items: [
          { q: 2, i: ["slice whole wheat bread", "slices whole wheat bread"], b: "One Mighty Mill Mighty Wheat" },
          { q: 0.25, u: "cup", i: "cottage cheese" },
          { q: 1, q2: 2, u: "tsp", i: "sriracha" },
          { t: "a small handful", i: "spinach" },
          { q: 2, i: ["slice tomato", "slices tomato"] },
          { q: 4, u: "oz", i: "turkey breast" },
          { q: 2, i: ["slice turkey bacon", "slices turkey bacon"], n: "cooked" },
          { q: 2, i: ["dill pickle", "dill pickles"], n: "sliced lengthwise" },
          { t: "a few thin slices", i: "red onion" },
          { q: 1, u: "tsp", i: "red wine vinegar" },
        ],
      },
    ],
    steps: [
      "Toast the bread and cook the turkey bacon until crisp.",
      "Mix the cottage cheese with the sriracha.",
      "Toss the spinach with the red wine vinegar.",
      "On one slice of bread, layer the spinach, tomato, turkey, pickles, turkey bacon and onion.",
      "Spread the sriracha cottage cheese on the other slice, close the sandwich and cut it in half.",
    ],
  },

  {
    slug: "pumpkin-banana-bread",
    title: "Chocolate Chip Pumpkin Banana Bread",
    posted: "2026-09-23",
    reel: "DdpPtJlxii3",
    photo: "pumpkin-banana-bread.jpg",
    alt: "James behind a sliced loaf of chocolate chip pumpkin banana bread",
    time: "45 min at 350°F",
    tags: ["Sweet", "Baking"],
    intro:
      "No butter or oil, sweetened with bananas and a little maple, and full of fiber from the oats. Chocolate and pumpkin seeds go on top.",
    groups: [
      {
        name: "Bread",
        items: [
          { q: 2, i: ["banana", "bananas"], n: "ripe" },
          { q: 0.5, u: "cup", i: "pumpkin purée" },
          { q: 2, i: ["egg", "eggs"], b: "Pete and Gerry's" },
          { q: 2, u: "tbsp", i: "maple syrup", b: "Stonewall Kitchen" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { q: 1.5, u: "cup", i: "oats", n: "blended into flour", b: "Bob's Red Mill" },
          { q: 1.5, u: "tsp", i: "cinnamon", b: "The Spice House" },
          { q: 2, u: "tsp", i: "baking powder" },
          { q: 0.5, u: "tsp", i: "baking soda" },
          { t: "a pinch", i: "salt", n: "optional" },
        ],
      },
      {
        name: "Topping",
        items: [
          { q: 1 / 3, u: "cup", i: "chocolate", n: "chopped", b: "Tony's Chocolonely" },
          { q: 0.25, u: "cup", i: "pumpkin seeds", b: "Top Seedz" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment.",
      "Mash the bananas in a large bowl, then whisk in the pumpkin, eggs, maple syrup and vanilla.",
      "Blend the oats into a fine flour. Add it to the bowl with the cinnamon, baking powder, baking soda and salt, and stir until just combined.",
      "Fold about half of the chopped chocolate into the batter.",
      "Pour it into the pan and scatter the pumpkin seeds and the rest of the chocolate on top.",
      "Bake for 45 minutes, until a toothpick comes out clean. Let it cool before slicing.",
    ],
  },

  {
    slug: "crunchy-apple-salad",
    title: "Crunchy Apple Salad",
    posted: "2026-09-21",
    reel: "DdkHBqTxTUg",
    photo: "crunchy-apple-salad.jpg",
    alt: "James holding a metal bowl of diced apple, celery and cucumber salad",
    tags: ["Salad", "No cook"],
    intro:
      "High in fiber and very crunchy. Dates add sweetness, and a lemony Parmesan dressing keeps it bright.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 2, i: ["apple", "apples"], n: "diced" },
          { q: 2, u: "cup", i: "celery", n: "diced" },
          { q: 1, u: "cup", i: "cucumber", n: "diced", b: "Sunset" },
          { q: 4, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 0.5, u: "cup", i: "walnuts" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 0.5, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 1, u: "clove", i: "garlic", n: "grated", b: "Dorot" },
          { q: 0.25, u: "cup", i: "Parmesan", n: "grated" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Dice the apples, celery and cucumber into small, even pieces.",
      "Pit and chop the dates.",
      "Combine everything with the walnuts in a large bowl.",
      "Whisk the lemon juice, olive oil, garlic, Parmesan, salt and pepper.",
      "Pour the dressing over the salad and toss.",
    ],
  },

  {
    slug: "korean-bean-sprouts",
    title: "Korean Bean Sprouts",
    posted: "2026-09-18",
    reel: "DdcTrUdJTyO",
    photo: "korean-bean-sprouts.jpg",
    alt: "James holding a glass bowl of seasoned bean sprouts",
    tags: ["Side", "Quick"],
    intro:
      "My favorite Korean side dish growing up, kongnamul muchim. It takes a few minutes and has a good amount of protein too.",
    groups: [
      {
        items: [
          { q: 12, u: "oz", i: "bean sprouts", n: "one 340 g pack" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 0.5, u: "tsp", i: "salt" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "sesame seeds" },
          { q: 1, u: "tsp", i: "gochugaru", n: "optional" },
        ],
      },
    ],
    steps: [
      "Bring a large pot of water to a boil. Add the bean sprouts, cover and cook for a few minutes until just tender.",
      "Drain, rinse under cold water and gently squeeze out the extra water.",
      "Put the sprouts in a bowl with the salt, green onion, garlic, sesame oil, sesame seeds and gochugaru.",
      "Mix well with your hands so every sprout is seasoned.",
    ],
  },

  {
    slug: "blueberry-crumble-chia-pudding",
    title: "Blueberry Crumble Chia Pudding",
    posted: "2026-09-15",
    reel: "DdUkCeZJ-lS",
    photo: "blueberry-crumble-chia-pudding.jpg",
    alt: "A glass of layered blueberry chia pudding and granola in front of James",
    time: "Chill until set",
    tags: ["Sweet", "Meal prep", "High protein"],
    intro:
      "No refined sugar, high in protein and fiber. Mashed blueberries flavor the pudding and granola gives it the crumble crunch.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "blueberries" },
          { q: 1.5, u: "cup", i: "Greek yogurt", b: "Fage" },
          { q: 0.75, u: "cup", i: "milk", b: "Organic Valley" },
          { q: 0.5, u: "cup", i: "chia seeds", b: "Bob's Red Mill" },
          { t: "as desired", i: "granola", b: "Inno Foods" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "vanilla extract" },
          { q: 1, u: "tsp", i: "maple syrup" },
          { t: "a pinch", i: "salt" },
        ],
      },
    ],
    steps: [
      "Mash the blueberries in a container, leaving a few chunks.",
      "Add the Greek yogurt, milk and chia seeds, plus the vanilla, maple syrup and salt if you're using them. Stir well.",
      "Cover and refrigerate until thick, a few hours or overnight.",
      "Give it a stir, then layer it in glasses with granola.",
    ],
  },

  {
    slug: "dense-bean-salad",
    title: "Mexican-Style Dense Bean Salad",
    posted: "2026-09-13",
    reel: "DdPUES0JciP",
    photo: "dense-bean-salad.jpg",
    alt: "James lifting a cracker of bean salad over a full glass bowl",
    tags: ["Salad", "Meal prep", "High protein"],
    intro:
      "My favorite meal-prep salad: two kinds of beans, lots of crunchy vegetables and a lime dressing. High in protein and fiber.",
    groups: [
      {
        name: "Salad",
        items: [
          { q: 1, u: "can", i: "black beans", n: "drained and rinsed", b: "Eden Foods" },
          { q: 1, u: "can", i: "chickpeas", n: "drained and rinsed", b: "Eden Foods" },
          { q: 1, i: ["red pepper", "red peppers"], n: "diced" },
          { q: 1.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, u: "cup", i: "cherry tomatoes", n: "quartered" },
          { q: 0.5, i: ["small red onion", "small red onions"], n: "diced" },
          { q: 0.25, u: "cup", i: "cilantro", n: "chopped" },
          { t: "as desired", i: "jalapeño", n: "chopped" },
          { q: 1, u: "cup", i: "corn" },
          { q: 1, i: ["avocado", "avocados"], n: "add it the day you eat it" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.25, u: "cup", i: "lime juice" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
          { q: 1, u: "tsp", i: "maple syrup", b: "Stonewall Kitchen" },
          { q: 0.5, u: "tsp", i: "paprika", b: "Morton & Bassett" },
          { q: 0.5, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
      {
        name: "To serve",
        items: [{ t: "", i: "crackers", b: "Firehook" }],
      },
    ],
    steps: [
      "Dice the red pepper, cucumber and onion, quarter the tomatoes, and chop the cilantro and jalapeño.",
      "Drain and rinse the black beans and chickpeas. Add them to a large bowl with the corn and chopped vegetables.",
      "Whisk the lime juice, olive oil, maple syrup, paprika, garlic powder, salt and pepper.",
      "Pour the dressing over and toss. It keeps well in the fridge for meal prep.",
      "On the day you eat it, add diced avocado and scoop it up with crackers.",
    ],
  },

  {
    slug: "iced-honey-vanilla-latte",
    title: "Iced Honey Vanilla Latte",
    posted: "2026-09-10",
    reel: "DdHdP_XpZcQ",
    photo: "iced-honey-vanilla-latte.jpg",
    alt: "James stirring an iced latte in a glass",
    serves: "1",
    tags: ["Drink", "Quick"],
    intro:
      "A summer coffee: honey, vanilla and a pinch of salt melted into hot espresso, then poured over iced milk.",
    groups: [
      {
        items: [
          { q: 1, i: ["double shot of espresso", "double shots of espresso"], b: "Nespresso, Dolce" },
          { q: 1, u: "tsp", i: "honey", b: "Manukora" },
          { q: 0.5, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { t: "a pinch", i: "salt", b: "Osmo" },
          { q: 0.5, u: "cup", i: "milk", b: "Organic Valley" },
          { t: "to fill the glass", i: "ice" },
        ],
      },
    ],
    steps: [
      "Put the honey, vanilla and salt in a small jar or cup.",
      "Brew the double espresso straight over them and stir until the honey dissolves.",
      "Fill a glass with ice and pour in the milk.",
      "Pour the espresso over the top and stir.",
    ],
  },

  {
    slug: "thai-chicken-salad",
    title: "Thai-Inspired Chicken Salad",
    posted: "2026-09-08",
    reel: "DdCgiN3JlEG",
    photo: "thai-chicken-salad.jpg",
    alt: "James behind a big glass bowl of crunchy Thai chicken salad",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "A crunchy, high-protein salad of shredded chicken, red cabbage, carrot and cucumber in a sweet and sour lime and fish sauce dressing. Scoop it up with crackers.",
    groups: [
      {
        items: [
          { q: 2, i: ["chicken breast", "chicken breasts"], n: "cooked" },
          { q: 1.5, u: "cup", i: "red cabbage", n: "thinly shredded" },
          { q: 0.5, u: "cup", i: "cucumber", n: "cut into thin strips" },
          { q: 0.5, u: "cup", i: "carrot", n: "grated" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1 / 3, u: "cup", i: "cilantro", n: "chopped" },
          { t: "as desired", i: "sliced almonds", b: "365 by Whole Foods Market" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 1, i: ["lime", "limes"], n: "juiced" },
          { q: 1, u: "tbsp", i: "fish sauce", b: "Red Boat" },
          { q: 0.5, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 1, u: "clove", i: "garlic", n: "grated" },
          { q: 0.5, u: "tbsp", i: "sriracha", b: "Tabasco" },
          { q: 0.5, u: "tsp", i: "ginger", n: "grated" },
        ],
      },
    ],
    steps: [
      "Thinly shred the cabbage, cut the cucumber into thin strips, grate the carrot, and chop the cilantro and green onion.",
      "Shred the cooked chicken with two forks.",
      "For the dressing, squeeze the lime into a bowl. Add the fish sauce, soy sauce, honey and sriracha, then grate in the garlic and ginger. Stir well.",
      "Put the chicken and vegetables in a large bowl, pour over the dressing and toss until everything is coated.",
      "Top with sliced almonds and scoop it up with crackers.",
    ],
  },

  {
    slug: "banana-coconut-pie-chia-pudding",
    title: "Banana Coconut Pie Chia Pudding",
    posted: "2026-09-03",
    reel: "Dc1yJ3CRNB5",
    photo: "banana-coconut-pie-chia-pudding.jpg",
    alt: "A glass of banana coconut chia pudding layered with banana slices",
    tags: ["Sweet", "Meal prep", "High protein"],
    intro:
      "Banana cream pie in a jar: mashed banana, Greek yogurt and coconut milk set with chia seeds, then layered with fresh banana and graham cracker crumbs. High in protein and fiber, with no refined sugar.",
    groups: [
      {
        items: [
          { q: 2, i: ["banana", "bananas"] },
          { q: 1.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 0.5, u: "cup", i: "coconut milk", b: "365 by Whole Foods Market" },
          { q: 0.25, u: "cup", i: "water" },
          { q: 0.5, u: "cup", i: "chia seeds", b: "Mamma Chia" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "maple syrup", b: "Stonewall Kitchen" },
          { q: 0.5, u: "tsp", i: "cinnamon", b: "The Spice House" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { t: "a pinch", i: "salt" },
          { t: "for topping", i: "graham crackers", b: "Annie's" },
        ],
      },
    ],
    steps: [
      "Break the bananas into a large container and mash them with a fork. Keep a few slices aside for layering if you like.",
      "Add the Greek yogurt, coconut milk, water and chia seeds, plus the maple syrup, cinnamon, vanilla and salt if you're using them.",
      "Stir well until there are no clumps of chia left.",
      "Cover and refrigerate until thick and set, ideally overnight.",
      "Spoon into glasses, layering with banana slices, and top with crushed graham crackers.",
    ],
  },

  {
    slug: "strawberry-cheesecake-dip",
    title: "High-Protein Strawberry Cheesecake Dip",
    posted: "2026-09-01",
    reel: "DcwamV7pW9t",
    photo: "strawberry-cheesecake-dip.jpg",
    alt: "James holding up a glass of strawberry cheesecake dip topped with graham crumbs",
    time: "10 min",
    tags: ["Sweet", "High protein", "No cook"],
    intro:
      "Five ingredients that taste like strawberry cheesecake, with Greek yogurt for extra protein. The video uses lactose-free cream cheese and yogurt, so it works for anyone who's sensitive to lactose.",
    groups: [
      {
        items: [
          { q: 1, u: "block", i: "lactose-free cream cheese", n: "8 oz", b: "Philadelphia" },
          { q: 1, u: "cup", i: "lactose-free Greek yogurt" },
          { q: 1, q2: 2, u: "tbsp", i: "honey" },
          { q: 1, u: "tsp", i: "vanilla extract" },
          { q: 1, u: "cup", i: "strawberries", n: "diced" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 2, u: "tbsp", i: "graham crackers", n: "crushed" },
        ],
      },
    ],
    steps: [
      "Hull and dice the strawberries.",
      "Put the cream cheese in a bowl with the Greek yogurt, honey and vanilla.",
      "Add most of the strawberries and mix until smooth and pink.",
      "Spoon it into a glass, layering it with the rest of the strawberries.",
      "Top with crushed graham crackers and serve with fruit or crackers for dipping.",
    ],
  },

  {
    slug: "creamy-spinach-chicken-butter-beans",
    title: "Creamy Spinach and Chicken Butter Beans",
    posted: "2026-08-30",
    reel: "DcrZJ_jpf0w",
    photo: "creamy-spinach-chicken-butter-beans.jpg",
    alt: "A pan of creamy butter beans with chicken and spinach, next to sourdough toast",
    tags: ["Chicken", "High protein"],
    intro:
      "Butter beans and shredded chicken simmered in broth with spinach, then made creamy with Greek yogurt and Parmesan instead of cream. Mop it up with toasted sourdough.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "butter beans", n: "drained", b: "Eden" },
          { q: 1, i: ["cooked chicken breast", "cooked chicken breasts"], n: "shredded" },
          { q: 0.5, i: ["large onion", "large onions"], n: "diced" },
          { q: 0.5, u: "cup", i: "celery", n: "diced" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
          { q: 1, u: "cup", i: "chicken bone broth", b: "Brodo" },
          { q: 4, u: "clove", i: "garlic", n: "minced" },
          { q: 3, u: "cup", i: "spinach" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 0.5, u: "cup", i: "Parmesan cheese", n: "grated" },
          { t: "to taste", i: "salt and pepper" },
          { t: "for serving", i: "sourdough toast" },
        ],
      },
    ],
    steps: [
      "Dice the onion and celery, and shred the cooked chicken with two forks.",
      "Heat the olive oil in a large pan over medium heat. Cook the onion and celery until soft, then add the garlic for another minute.",
      "Add the butter beans and broth and let it simmer for a few minutes.",
      "Add the spinach and stir until it wilts, then add the chicken.",
      "Turn the heat down and stir in the Greek yogurt and grated Parmesan. Finish with the lemon juice, salt and pepper.",
      "Serve with toasted sourdough.",
    ],
  },

  {
    slug: "fresh-rolls-peanut-sauce",
    title: "Fresh Rolls with Peanut Sauce",
    posted: "2026-08-26",
    reel: "DchIcR3pgsb",
    photo: "fresh-rolls-peanut-sauce.jpg",
    alt: "A shrimp fresh roll being dipped into a bowl of peanut sauce",
    tags: ["Seafood", "No cook"],
    intro:
      "Rice paper rolls packed with crunchy vegetables, avocado and shrimp, with a peanut sauce you'll want to drink. The caption only gives amounts for the sauce, so fill the rolls with as much as you like.",
    groups: [
      {
        name: "Rolls",
        items: [
          { t: "as needed", i: "rice paper" },
          { t: "as needed", i: "cooked shrimp" },
          { t: "as needed", i: "red cabbage", n: "thinly sliced" },
          { t: "as needed", i: "cucumber", n: "cut into matchsticks" },
          { t: "as needed", i: "red bell pepper", n: "cut into strips" },
          { t: "as needed", i: "carrots", n: "peeled into ribbons" },
          { t: "as needed", i: "avocado", n: "sliced" },
          { t: "as needed", i: "cilantro" },
          { t: "as needed", i: "green onion" },
        ],
      },
      {
        name: "Peanut sauce",
        items: [
          { q: 2, u: "tbsp", i: "peanut butter" },
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, i: ["lime", "limes"], n: "juiced" },
          { q: 1, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 1, u: "tbsp", i: "water" },
          { q: 1, u: "clove", i: "garlic", n: "grated" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { t: "as desired", i: "sesame seeds" },
          { t: "optional", i: "cilantro and green onion", n: "chopped" },
        ],
      },
    ],
    steps: [
      "Prep the fillings: thinly slice the cabbage, cut the cucumber and bell pepper into thin strips, peel the carrot into ribbons, slice the avocado and pick the cilantro.",
      "For the sauce, stir the peanut butter, lime juice, water, soy sauce, honey, grated garlic, sesame oil and sesame seeds together until smooth.",
      "Dip a sheet of rice paper in water for a few seconds and lay it flat on a plate.",
      "Lay a few shrimp in the middle, pile the vegetables, avocado and herbs on top, then fold in the sides and roll it up tightly.",
      "Repeat with the rest and serve with the peanut sauce for dipping.",
    ],
  },

  {
    slug: "korean-bbq-beef-udon",
    title: "High-Protein Korean BBQ Beef Udon",
    posted: "2026-08-24",
    reel: "DcbxBjhpSaW",
    photo: "korean-bbq-beef-udon.jpg",
    alt: "A bowl of Korean BBQ beef udon with shrimp, bok choy and boiled egg",
    time: "10 min",
    tags: ["Noodles", "High protein", "Quick"],
    intro:
      "A 10-minute meal prep built on a Pulmuone stir-fry udon kit. Shrimp, bok choy and boiled eggs turn it into a high-protein bowl.",
    groups: [
      {
        items: [
          { q: 1, u: "package", i: "Korean BBQ Style Beef Stir-Fry Udon", b: "Pulmuone" },
          { q: 12, i: "large cooked shrimp" },
          { q: 3, u: "head", i: "baby bok choy", n: "chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "sliced" },
          { q: 2, i: ["boiled egg", "boiled eggs"], n: "halved" },
          { t: "as desired", i: "sesame seeds" },
          { t: "as desired", i: "chili oil" },
        ],
      },
    ],
    steps: [
      "Chop the bok choy and slice the green onion.",
      "Heat a large pan and add the udon noodles from the kit with the water the package calls for, loosening them as they warm up.",
      "Add the sauce and the beef and vegetable pack from the kit and stir-fry for a couple of minutes.",
      "Add the bok choy and cook until it just wilts, then add the shrimp to warm through.",
      "Sprinkle over the kit's sesame topping and toss.",
      "Serve topped with the boiled eggs, green onion, sesame seeds and chili oil, with kimchi on the side if you like.",
    ],
  },

  {
    slug: "spicy-honey-garlic-minced-tofu",
    title: "Spicy Honey Garlic Minced Tofu",
    posted: "2026-08-21",
    reel: "DcTtuMCxvNK",
    photo: "spicy-honey-garlic-minced-tofu.jpg",
    alt: "A plate of honey garlic minced tofu with green onion and sesame seeds, next to rice",
    tags: ["Tofu", "High protein", "Meal prep"],
    intro:
      "Firm tofu crumbled and pan-fried until golden, then tossed in a sticky honey garlic sauce with a little heat. Cheap, high in protein and great for meal prep over rice.",
    groups: [
      {
        items: [
          { q: 2, u: "block", i: "firm tofu", n: "drained" },
          { t: "a drizzle", i: "cooking oil", n: "for the pan" },
          { q: 0.5, u: "tbsp", i: "chili oil", n: "optional" },
          { t: "as desired", i: "sesame seeds" },
          { t: "as desired", i: "green onion", n: "sliced" },
          { t: "for serving", i: "cooked rice" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.25, u: "cup", i: "soy sauce" },
          { q: 5, u: "clove", i: "garlic", n: "minced" },
          { q: 2, u: "tsp", i: "ginger", n: "grated" },
          { q: 0.25, u: "cup", i: "honey" },
          { q: 2, u: "tsp", i: "sesame oil" },
          { q: 0.25, u: "cup", i: "water" },
          { q: 1, u: "tbsp", i: "cornstarch" },
          { q: 1, u: "tbsp", i: "jalapeño", n: "chopped, optional" },
        ],
      },
    ],
    steps: [
      "Drain the tofu and crumble it into small pieces with your hands.",
      "Heat a drizzle of oil in a large nonstick pan over medium-high heat. Add the tofu and cook, stirring now and then, until it's golden and a little crispy.",
      "Meanwhile, mix the sauce: soy sauce, garlic, ginger, honey, sesame oil, water, cornstarch, and the jalapeño if you're using it.",
      "Pour the sauce over the tofu and stir until it thickens and coats every piece. Add the chili oil if you want more heat.",
      "Top with green onion and sesame seeds and serve over rice.",
    ],
  },

  {
    slug: "hot-honey-chicken-salad",
    title: "Hot Honey Chicken Salad",
    posted: "2026-08-19",
    reel: "DcPIwveJvPd",
    photo: "hot-honey-chicken-salad.jpg",
    alt: "James holding a glass bowl of hot honey chicken salad",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "Shredded chicken with crunchy celery, cucumber, carrot and pickles in a sweet and spicy Greek yogurt dressing. No mayo, lots of protein, and great on crackers.",
    groups: [
      {
        items: [
          { q: 2.5, u: "cup", i: "cooked chicken", n: "shredded" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "cup", i: "celery", n: "chopped" },
          { q: 0.5, u: "cup", i: "cucumber", n: "chopped" },
          { q: 0.5, u: "cup", i: "carrot", n: "grated" },
          { q: 0.25, u: "cup", i: "dill pickles", n: "chopped", b: "Good Girl Snacks" },
          { t: "optional", i: "jalapeño", n: "chopped" },
          { q: 0.25, u: "cup", i: "almonds", n: "crushed, optional" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 2, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 1, u: "tbsp", i: "sriracha", b: "Tabasco" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tbsp", i: "pickle juice" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Shred the chicken with two forks.",
      "Chop the celery, cucumber, green onion and pickles, grate the carrot, and add it all to the chicken. Crush the almonds in a bag and add them too, with the jalapeño if you're using it.",
      "For the sauce, stir the Greek yogurt, honey, sriracha, Dijon, pickle juice, salt and pepper together.",
      "Pour the sauce over the chicken and mix until everything is coated.",
      "Serve with crackers.",
    ],
  },

  {
    slug: "bok-choy-kimchi",
    title: "5-Minute Bok Choy Kimchi",
    posted: "2026-08-17",
    reel: "DcJ9s9npUGS",
    photo: "bok-choy-kimchi.jpg",
    alt: "A glass bowl of bok choy kimchi with chopsticks",
    time: "5 min",
    tags: ["Side", "Korean", "Quick"],
    intro:
      "The quickest kimchi there is: bok choy tossed in a garlicky gochugaru sauce and ready to eat right away, with no salting or waiting.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "bok choy", n: "cut into pieces" },
          { q: 2, u: "tsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tsp", i: "fish sauce", b: "Red Boat" },
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 0.5, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 0.5, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { t: "as desired", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Wash the bok choy and cut it into bite-size pieces.",
      "In a bowl, mix the soy sauce, fish sauce, gochugaru, rice vinegar, honey, garlic, sesame oil and sesame seeds into a paste.",
      "Put the bok choy in a large bowl, add the sauce and toss with your hands (gloves help) until every piece is coated.",
      "Eat it right away or keep it in the fridge.",
    ],
  },

  {
    slug: "healthy-pizza-beans",
    title: "Healthy Pizza Beans",
    posted: "2026-08-13",
    reel: "Db_qVanRBdT",
    photo: "healthy-pizza-beans.jpg",
    alt: "A pan of cheesy tomato pizza beans with kale, with James holding toast",
    tags: ["High protein", "Meal prep"],
    intro:
      "White beans simmered in tomato sauce with onion, garlic and kale, then finished with melty mozzarella and Parmesan. All the flavor of pizza, with plenty of fiber and protein.",
    groups: [
      {
        items: [
          { q: 2, u: "can", i: "white kidney beans", n: "drained", b: "Eden" },
          { q: 1.5, u: "cup", i: "tomato sauce", b: "Smash Kitchen" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 1, i: ["onion", "onions"], n: "diced" },
          { q: 1, u: "cup", i: "kale", n: "chopped, or as much as you like" },
          { q: 4, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "Italian seasoning", b: "The Spice House" },
          { q: 0.25, u: "cup", i: "mozzarella cheese", b: "Organic Valley" },
          { q: 2, u: "tbsp", i: "Parmesan cheese", n: "grated" },
          { t: "to taste", i: "salt" },
        ],
      },
    ],
    steps: [
      "Dice the onion and chop the kale.",
      "Heat the olive oil in a large pan over medium heat and cook the onion until soft. Add the garlic and Italian seasoning and stir for a minute.",
      "Add the beans and the tomato sauce and let it simmer for a few minutes.",
      "Stir in the kale until it wilts, and season with salt.",
      "Top with the mozzarella and grated Parmesan and let it melt. Eat it with toast.",
    ],
  },

  {
    slug: "creamy-crunchy-kale-salad",
    title: "Creamy and Crunchy Kale Salad",
    posted: "2026-08-11",
    reel: "Db6hhukpaeN",
    photo: "creamy-crunchy-kale-salad.jpg",
    alt: "A glass bowl of kale salad with avocado, almonds and sliced chicken",
    time: "5 min",
    tags: ["Salad", "Quick", "No cook"],
    intro:
      "Finely chopped kale massaged with lemon and olive oil, then made creamy with mashed avocado and Parmesan. Ready in five minutes; add chicken to make it a full meal.",
    groups: [
      {
        items: [
          { q: 2, i: ["small bunch of kale", "small bunches of kale"], n: "stems removed, finely chopped" },
          { q: 2, i: ["green onion", "green onions"], n: "chopped" },
          { q: 2, i: ["avocado", "avocados"] },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 1, i: ["lemon", "lemons"], n: "juiced" },
          { q: 1, q2: 2, u: "tsp", i: "maple syrup", b: "Stonewall Kitchen" },
          { q: 1, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a handful", i: "crunchy almonds", n: "added in the video" },
          { t: "for serving", i: "sliced cooked chicken", n: "added in the video" },
        ],
      },
    ],
    steps: [
      "Strip the kale leaves off the stems, chop them finely and put them in a large bowl.",
      "Add the lemon juice, olive oil, maple syrup, garlic powder, salt and pepper, and massage the kale with your hands for a minute until it softens.",
      "Chop the green onion and add it, then grate in the Parmesan.",
      "Add the avocado and mix it in so it coats the kale and makes it creamy.",
      "Top with almonds, and some chicken if you like.",
    ],
  },

  {
    slug: "creamy-butter-beans",
    title: "Creamy Butter Beans with Kale",
    posted: "2026-08-10",
    reel: "Db38GWhpNN9",
    photo: "creamy-butter-beans.jpg",
    alt: "A pan of creamy butter beans with kale, with James holding a piece of toast",
    tags: ["High protein", "Quick"],
    intro:
      "Two cans of butter beans simmered with onion, garlic, paprika and kale, then made creamy with Greek yogurt and Parmesan. Spoon it over sourdough toast.",
    groups: [
      {
        items: [
          { q: 2, u: "can", i: "butter beans", n: "drained", b: "Eden" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 1, i: ["medium onion", "medium onions"], n: "diced" },
          { q: 1.5, u: "cup", i: "kale", n: "chopped" },
          { q: 1, u: "cup", i: "bone broth", b: "Brodo" },
          { q: 1 / 3, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 0.5, u: "tsp", i: "paprika", b: "Morton & Bassett" },
          { q: 4, u: "clove", i: "garlic", n: "minced" },
          { t: "to taste", i: "salt and pepper" },
          { t: "for serving", i: "sourdough toast" },
        ],
      },
    ],
    steps: [
      "Dice the onion.",
      "Heat the olive oil in a large pan over medium heat and cook the onion until soft. Add the garlic and paprika and stir for a minute.",
      "Add the butter beans and the broth and let it simmer for a few minutes.",
      "Add the kale and stir until it wilts.",
      "Take the pan off the heat and stir in the Greek yogurt, grated Parmesan and lemon juice. Season with salt and pepper.",
      "Serve with toasted sourdough.",
    ],
  },

  {
    slug: "tiramisu-chia-pudding",
    title: "Tiramisu Chia Pudding",
    posted: "2026-08-06",
    reel: "Dbto2wHJmS_",
    photo: "tiramisu-chia-pudding.jpg",
    alt: "A short glass of tiramisu chia pudding dusted with cacao",
    serves: "1",
    time: "30 min",
    tags: ["Sweet", "High protein"],
    intro:
      "Five ingredients and ready in about 30 minutes: chia seeds soaked in a fresh shot of espresso, then stirred with Greek yogurt and dusted with cacao like a tiramisu.",
    groups: [
      {
        items: [
          { q: 1, i: ["shot of espresso", "shots of espresso"], b: "Nespresso, Dolce" },
          { q: 2, u: "tbsp", i: "chia seeds", b: "Mamma Chia" },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, q2: 2, u: "tbsp", i: "maple syrup" },
          { t: "as desired", i: "cacao powder", b: "Diaspora Co." },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a dash", i: "vanilla extract" },
          { t: "a dash", i: "salt" },
          { t: "for topping", i: "nut and chocolate mix", b: "Prana" },
        ],
      },
    ],
    steps: [
      "Brew the espresso straight into a bowl and stir in the chia seeds.",
      "Let it sit for a few minutes, stirring once or twice, until the chia swells and soaks up the coffee.",
      "Add the Greek yogurt and maple syrup, plus the vanilla and salt if you're using them, and stir until smooth.",
      "Spoon it into a glass and let it thicken for about 30 minutes.",
      "Dust the top with cacao powder and add the nut and chocolate mix if you like.",
    ],
  },

  {
    slug: "high-protein-egg-salad",
    title: "High-Protein Egg Salad",
    posted: "2026-08-04",
    reel: "Dbog0N9RFCq",
    photo: "high-protein-egg-salad.jpg",
    alt: "James holding a glass bowl of egg salad with green onion",
    time: "10 min",
    tags: ["High protein", "Quick", "No cook"],
    intro:
      "A lighter egg salad with no mayo: chopped boiled eggs, celery, green onion and pickle bound with cottage cheese and Dijon. Low in calories and high in protein.",
    groups: [
      {
        items: [
          { q: 3, i: ["boiled egg", "boiled eggs"], n: "peeled", b: "Organic Valley" },
          { q: 1, u: "stalk", i: "celery", n: "finely chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, i: ["dill pickle", "dill pickles"], n: "chopped" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese", b: "Friendship Dairies" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tsp", i: "pickle juice" },
          { q: 0.5, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "as desired", i: "salt and pepper" },
          { t: "for serving", i: "crackers", b: "Firehook" },
        ],
      },
    ],
    steps: [
      "Peel the boiled eggs, put them in a bowl and chop or mash them roughly.",
      "Finely chop the celery, green onion and pickle and add them to the eggs.",
      "Add the cottage cheese, Dijon, pickle juice, garlic powder, salt and pepper.",
      "Mix everything together and eat it with crackers.",
    ],
  },

  {
    slug: "sesame-miso-chicken-salad",
    title: "Sesame Miso Chicken Salad",
    posted: "2026-08-03",
    reel: "Dbl7Cl0x2Vj",
    photo: "sesame-miso-chicken-salad.jpg",
    alt: "A glass bowl of sesame miso chicken salad with apple and carrot",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "Shredded chicken with sweet apple, carrot, celery and pickle in a sesame miso dressing. The whole bowl has over 90 grams of protein, and it's great scooped up on crackers.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "cooked chicken", n: "shredded" },
          { q: 1, i: ["carrot", "carrots"], n: "grated" },
          { q: 0.5, u: "cup", i: "celery", n: "chopped" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 2, u: "tbsp", i: "green onion", n: "chopped" },
          { q: 1, i: ["dill pickle", "dill pickles"], n: "chopped" },
          { t: "optional", i: "almonds" },
          { t: "for serving", i: "crackers", b: "Firehook" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "miso paste" },
          { q: 1, u: "tbsp", i: "water" },
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 0.5, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 0.5, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { q: 0.5, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Shred the chicken with two forks.",
      "Grate the carrot, chop the celery, green onion and pickle, and peel and dice the apple. Add it all to the chicken.",
      "For the sauce, whisk the miso with the water until smooth, then stir in the soy sauce, rice vinegar, honey, sesame oil, garlic and sesame seeds.",
      "Pour the sauce over the salad and mix well. Add almonds if you like some crunch.",
      "Serve with crackers.",
    ],
  },

  {
    slug: "sticky-date-banana-bread",
    title: "Sticky Date Banana Bread",
    posted: "2026-07-27",
    reel: "DbT41ivpLGa",
    photo: "sticky-date-banana-bread.jpg",
    alt: "A loaf of sticky date banana bread, sliced, on parchment paper",
    time: "1 hr",
    tags: ["Sweet", "Baking"],
    intro:
      "A banana bread with no refined sugar or oil, made with blended oats and Greek yogurt and studded with chopped dates. A quick date and yogurt topping makes it sticky.",
    groups: [
      {
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"], b: "Organic Valley" },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { q: 1.75, u: "cup", i: "oats", n: "blended into flour", b: "Bob's Red Mill" },
          { q: 2, u: "tsp", i: "baking powder", b: "365 by Whole Foods Market" },
          { q: 1, u: "tsp", i: "cinnamon", b: "Diaspora Co." },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { t: "a dash", i: "salt", n: "optional" },
          { t: "optional", i: "walnuts" },
        ],
      },
      {
        name: "Sticky date topping",
        items: [
          { q: 4, i: ["date", "dates"], n: "pitted" },
          { q: 2, u: "tbsp", i: "hot water" },
          { q: 2, u: "tbsp", i: "Greek yogurt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a large bowl, then mix in the eggs, Greek yogurt and vanilla.",
      "Blend the oats into a flour, then mix in the baking powder, cinnamon and salt. Stir this into the banana mixture.",
      "Fold in the chopped dates, and walnuts if you're using them, then pour the batter into the pan.",
      "Bake for 45 minutes, until a toothpick comes out clean.",
      "For the topping, blend the dates with the hot water and Greek yogurt until smooth. Spread it over the bread before slicing.",
    ],
  },

  {
    slug: "mango-sticky-rice-chia-pudding",
    title: "Mango Sticky \"Rice\" Chia Pudding",
    posted: "2026-07-20",
    reel: "DbB4Ez5RSnr",
    photo: "mango-sticky-rice-chia-pudding.jpg",
    alt: "A glass of mango chia pudding layered with fresh mango",
    tags: ["Sweet", "Meal prep", "High protein"],
    intro:
      "Mango sticky rice, made with chia seeds instead of rice. Coconut milk and Greek yogurt make it creamy and high in protein, with no refined sugar.",
    groups: [
      {
        items: [
          { q: 2, i: ["mango", "mangoes"], n: "diced" },
          { q: 1.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 0.5, u: "cup", i: "coconut milk", b: "365 by Whole Foods Market" },
          { q: 0.25, u: "cup", i: "water" },
          { q: 0.5, u: "cup", i: "chia seeds", b: "Mamma Chia" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { q: 0.5, u: "tbsp", i: "maple syrup" },
          { t: "a pinch", i: "salt" },
        ],
      },
    ],
    steps: [
      "Dice the mangoes and put most of them in a large container, keeping some aside for layering.",
      "Add the Greek yogurt, coconut milk, water and chia seeds, plus the vanilla, maple syrup and salt if you're using them.",
      "Stir well until there are no clumps of chia left.",
      "Cover and refrigerate until thick and set, ideally overnight.",
      "Spoon into glasses, layering with the rest of the mango.",
    ],
  },

  {
    slug: "sweet-potato-blondies",
    title: "Sweet Potato Blondies",
    posted: "2026-07-14",
    reel: "DayaCDZJAVV",
    photo: "sweet-potato-blondies.jpg",
    alt: "A tray of sweet potato blondies with chocolate chips on parchment paper",
    time: "40 min",
    tags: ["Sweet", "Baking"],
    intro:
      "Soft, fudgy blondies made with mashed sweet potato, peanut butter and almond flour. Gluten free, dairy free and made without oil.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "sweet potato", n: "cooked and mashed" },
          { q: 2, i: ["egg", "eggs"], b: "Organic Valley" },
          { q: 0.25, u: "cup", i: "peanut butter", b: "Trader Joe's" },
          { q: 0.25, u: "cup", i: "maple syrup" },
          { q: 2 / 3, u: "cup", i: "almond flour", b: "Kirkland Signature" },
          { q: 1, u: "tsp", i: "baking powder", b: "365 by Whole Foods Market" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a dash", i: "cinnamon", b: "The Spice House" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { t: "a dash", i: "salt" },
          { t: "as desired", i: "dark chocolate chips" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a baking pan with parchment paper.",
      "Mash the cooked sweet potato in a bowl, then add the eggs, peanut butter and maple syrup and mix until smooth.",
      "Add the almond flour and baking powder, plus the cinnamon, vanilla and salt if you're using them, and stir to a thick batter.",
      "Fold in chocolate chips, pour into the pan and add a few more chips on top.",
      "Bake for 30 minutes, then let it cool before slicing.",
    ],
  },

  {
    slug: "carrot-kimchi",
    title: "Carrot Kimchi",
    posted: "2026-07-07",
    reel: "DagZxRRJmws",
    photo: "carrot-kimchi.jpg",
    alt: "A glass bowl of carrot ribbon kimchi with sesame seeds",
    tags: ["Side", "Korean"],
    intro:
      "Carrot ribbons salted, rinsed and tossed in a garlicky gochugaru sauce with sliced onion. Crunchy, spicy and good for your gut.",
    groups: [
      {
        items: [
          { q: 5, i: ["large carrot", "large carrots"], n: "peeled into ribbons" },
          { q: 0.5, u: "tbsp", i: "salt", b: "Osmo" },
          { q: 0.5, i: ["onion", "onions"], n: "thinly sliced" },
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 0.5, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 0.5, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Peel the carrots, then keep peeling them into long ribbons.",
      "Toss the ribbons with the salt in a bowl and leave them for 30 minutes.",
      "Rinse the carrots well and squeeze out the water.",
      "Add the onion, gochugaru, soy sauce, honey, garlic, sesame oil and sesame seeds.",
      "Mix with your hands until every ribbon is coated. Eat right away or keep it in the fridge.",
    ],
  },

  {
    slug: "celery-walnut-salad",
    title: "Celery Walnut Salad",
    posted: "2026-07-02",
    reel: "DaTaoFPJoR0",
    photo: "celery-walnut-salad.jpg",
    alt: "A plate of celery salad with walnuts, dates and Parmesan",
    time: "10 min",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "A crunchy summer salad of sliced celery, toasted walnuts and sweet dates, dressed simply with lemon, olive oil and plenty of Parmesan.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "celery", n: "sliced" },
          { q: 3, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 1 / 3, u: "cup", i: "walnuts", n: "chopped", b: "365 by Whole Foods Market" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped, optional" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Slice the celery and put it in a bowl with the green onion.",
      "Add the walnuts and the chopped dates.",
      "Squeeze over the lemon and drizzle with the olive oil.",
      "Grate in the Parmesan, season with salt and pepper, and toss.",
    ],
  },

  {
    slug: "tuna-egg-salad",
    title: "High-Protein Tuna Egg Salad",
    posted: "2026-06-29",
    reel: "DaL1ro8xJ9T",
    photo: "tuna-egg-salad.jpg",
    alt: "James holding a slice of toast piled with tuna egg salad",
    time: "10 min",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Tuna and boiled eggs with crunchy celery and pickle, bound with a creamy Greek yogurt and egg yolk sauce instead of mayo. Over 50 grams of protein, great on toast.",
    groups: [
      {
        items: [
          { q: 2, i: ["boiled egg", "boiled eggs"], b: "Organic Valley" },
          { q: 1, u: "can", i: "tuna", n: "drained", b: "Wild Planet" },
          { q: 1, u: "stalk", i: "celery", n: "chopped" },
          { q: 2, u: "tbsp", i: "green onion", n: "chopped" },
          { q: 1, i: ["dill pickle", "dill pickles"], n: "chopped", b: "Good Girl Snacks" },
          { t: "for serving", i: "toast", n: "as in the video" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Peel the eggs and split them, putting the yolks in one bowl and the whites in another.",
      "Chop the egg whites and add the tuna, celery, green onion and pickle.",
      "Mash the yolks with the Greek yogurt, Dijon, garlic powder, salt and pepper to make a creamy sauce.",
      "Fold the sauce into the tuna mixture.",
      "Pile it onto toast and eat.",
    ],
  },

  {
    slug: "air-fryer-korean-fried-chicken",
    title: "Air Fryer Korean Fried Chicken",
    posted: "2026-06-22",
    reel: "DZ5QU9BJsj-",
    photo: "air-fryer-korean-fried-chicken.jpg",
    alt: "A plate of glazed Korean fried chicken topped with sesame seeds and green onion",
    tags: ["Chicken", "Air fryer", "Korean"],
    intro:
      "Crispy chicken bites from the air fryer, tossed in a sticky, sweet and spicy gochujang glaze. Much easier than it looks, with no deep frying.",
    groups: [
      {
        items: [
          { q: 1.5, u: "lb", i: "chicken breast or thighs", n: "cut into bite-size pieces" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza Sizzle" },
          { q: 0.5, u: "tsp", i: "salt" },
          { q: 0.5, u: "tsp", i: "pepper" },
          { q: 3, u: "tbsp", i: "cornstarch" },
          { t: "to garnish", i: "sesame seeds and green onion" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 2, u: "tbsp", i: "ketchup" },
          { q: 2, u: "tbsp", i: "honey", n: "optional, if you like it sweet" },
          { q: 1, u: "tbsp", i: "gochujang" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 2, u: "tbsp", i: "water" },
        ],
      },
    ],
    steps: [
      "Cut the chicken into bite-size pieces and season with the salt and pepper.",
      "Add the cornstarch and olive oil and toss until every piece is coated.",
      "Spread the chicken out in the air fryer basket and air fry at 400°F for 10 minutes. Flip and air fry for another 6–8 minutes, until golden.",
      "Meanwhile, simmer the ketchup, honey, gochujang, garlic, soy sauce and water in a large pan until glossy and slightly thick.",
      "Add the chicken to the pan and toss to coat. Finish with sesame seeds and green onion.",
    ],
  },

  {
    slug: "healthy-sardine-dip",
    title: "Healthy Sardine Dip",
    posted: "2026-06-18",
    reel: "DZvQ35VPLe7",
    photo: "healthy-sardine-dip.jpg",
    alt: "A white bowl of creamy sardine dip on a wooden board",
    time: "10 min",
    tags: ["Seafood", "Snack", "High protein"],
    intro:
      "Mashed sardines with crunchy cucumber, pickle and green onion in a tangy Greek yogurt sauce. High in protein and omega-3s, and great with crackers.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "sardines", b: "Wild Planet" },
          { q: 1, i: ["mini cucumber", "mini cucumbers"], n: "finely chopped", b: "Sunset" },
          { q: 2, u: "tbsp", i: "green onion", n: "chopped" },
          { q: 1, i: ["pickle", "pickles"], n: "chopped", b: "Good Girl Snacks" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1 / 3, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.25, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "as desired", i: "salt and pepper" },
          { t: "a squeeze, optional", i: "lemon juice", n: "added in the video" },
        ],
      },
    ],
    steps: [
      "Put the sardines in a bowl and mash them with a fork.",
      "Finely chop the cucumber, pickle and green onion and add them to the bowl.",
      "Add the Greek yogurt, Dijon, garlic powder, salt and pepper, plus a squeeze of lemon if you like.",
      "Mix well and serve with crackers.",
    ],
  },

  {
    slug: "asian-cucumber-salad",
    title: "Asian Cucumber Salad",
    posted: "2026-06-15",
    reel: "DZnsxkdJ_Qx",
    photo: "asian-cucumber-salad.jpg",
    alt: "A glass bowl of sliced cucumbers in chili oil and sesame seeds",
    tags: ["Side", "Salad", "Spicy"],
    intro:
      "Crunchy cucumber rounds, salted and rinsed, then tossed in a savory, tangy and spicy soy and chili oil dressing.",
    groups: [
      {
        items: [
          { q: 6, i: ["mini cucumber", "mini cucumbers"], n: "sliced into rounds" },
          { q: 0.5, u: "tbsp", i: "salt", b: "Osmo" },
          { q: 1.5, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 0.5, u: "tbsp", i: "chili oil", b: "Momofuku" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 0.5, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Slice the cucumbers into rounds and toss them with the salt in a bowl. Leave them for 20–30 minutes to draw out the water.",
      "Rinse the cucumbers well and pat them dry with a towel.",
      "Put them in a bowl with the soy sauce, rice vinegar, garlic, chili oil, sesame oil and sesame seeds.",
      "Toss everything together and serve.",
    ],
  },

  {
    slug: "korean-pickle-dip",
    title: "Korean Pickle Dip",
    posted: "2026-06-12",
    reel: "DZf3m_iRgON",
    photo: "korean-pickle-dip.jpg",
    alt: "A glass bowl of creamy Korean pickle dip next to a jar of pickles",
    time: "5 min",
    tags: ["Snack", "No cook", "Korean"],
    intro:
      "The viral pickle dip with a Korean twist: chopped Jongga Korean-inspired pickles in cream cheese and Greek yogurt, with a little gochujang and sesame.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "Korean-inspired pickles", n: "finely chopped", b: "Jongga" },
          { q: 4, u: "oz", i: "cream cheese" },
          { q: 0.75, u: "cup", i: "plain Greek yogurt" },
          { q: 1, u: "tsp", i: "gochujang" },
          { q: 2, u: "tbsp", i: "green onions", n: "chopped" },
          { q: 1, u: "tsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Finely chop the pickles and put them in a bowl.",
      "Add the cream cheese, Greek yogurt, gochujang and green onions.",
      "Mix until smooth and creamy, then sprinkle with sesame seeds.",
      "Serve with crackers or chips.",
    ],
  },

  {
    slug: "sweet-potato-pancakes",
    title: "5-Ingredient Sweet Potato Pancakes",
    posted: "2026-06-10",
    reel: "DZa4NfwRTkn",
    photo: "sweet-potato-pancakes.jpg",
    alt: "A stack of sweet potato pancakes topped with yogurt and berries",
    tags: ["Breakfast", "High protein"],
    intro:
      "Fluffy pancakes made from mashed sweet potato, Greek yogurt and blended oats. High in protein and fiber, with no refined sugar.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "sweet potato", n: "cooked and mashed" },
          { q: 1, i: ["egg", "eggs"], b: "Pete and Gerry's" },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Fage" },
          { q: 0.5, u: "cup", i: "oats", n: "blended into flour", b: "Quaker" },
          { q: 1, u: "tsp", i: "baking powder", b: "365 by Whole Foods Market" },
          { t: "for the pan", i: "butter", b: "Kerrygold" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a dash", i: "cinnamon", b: "The Spice House" },
          { q: 0.5, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { t: "a dash", i: "salt" },
          { t: "for topping", i: "Greek yogurt, berries and maple syrup", n: "as in the video" },
        ],
      },
    ],
    steps: [
      "Mash the cooked sweet potato in a bowl.",
      "Add the egg and Greek yogurt and mix well.",
      "Blend the oats into a flour and add them with the baking powder, plus the cinnamon, vanilla and salt if you're using them. Stir to a thick batter.",
      "Melt a little butter in a nonstick pan over medium-low heat. Spoon in the batter to make small pancakes and cook until golden on both sides.",
      "Stack them up and top with Greek yogurt, berries and a drizzle of maple syrup.",
    ],
  },

  {
    slug: "caramel-date-chia-pudding",
    title: "\"Caramel\" Date Chia Pudding",
    posted: "2026-06-04",
    reel: "DZLasfcRlkB",
    photo: "caramel-date-chia-pudding.jpg",
    alt: "A glass of date chia pudding topped with chopped almonds",
    tags: ["Sweet", "Meal prep", "High protein"],
    intro:
      "Soft dates mashed into Greek yogurt and milk give this chia pudding a caramel flavor with no refined sugar. Five minutes of prep and over 60 grams of protein in the batch.",
    groups: [
      {
        items: [
          { q: 6, q2: 7, i: ["date", "dates"], n: "pitted", b: "Terra Delyssa" },
          { t: "a splash", i: "hot water", n: "to soften the dates, as in the video" },
          { q: 1.5, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 0.75, q2: 1, u: "cup", i: "milk", b: "Organic Valley" },
          { q: 0.5, u: "cup", i: "chia seeds", b: "Mamma Chia" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a dash", i: "cinnamon", b: "The Spice House" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { t: "a dash", i: "salt" },
          { t: "for topping", i: "almonds", n: "chopped" },
        ],
      },
    ],
    steps: [
      "Put the dates in a large container and pour over a little hot water to soften them, then mash them into a paste.",
      "Add the Greek yogurt, milk and chia seeds, plus the cinnamon, vanilla and salt if you're using them.",
      "Stir well until there are no clumps of chia left.",
      "Cover and refrigerate until thick and set, ideally overnight.",
      "Spoon into glasses and top with chopped almonds.",
    ],
  },

  {
    slug: "zucchini-banana-bread",
    title: "Zucchini Banana Bread",
    posted: "2026-05-28",
    reel: "DY5ZE4bxeny",
    photo: "zucchini-banana-bread.jpg",
    alt: "A loaf of zucchini banana bread with dates, sliced on parchment paper",
    time: "50 min",
    tags: ["Sweet", "Baking"],
    intro:
      "A moist loaf that hides a cup of zucchini, sweetened only with banana and dates. No oil, no refined sugar, and gluten free if you use gluten-free oats.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "zucchini", n: "shredded" },
          { q: 2, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"], b: "Organic Valley" },
          { q: 1.5, u: "cup", i: "oats", n: "blended into flour" },
          { q: 1, u: "tsp", i: "baking powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "cinnamon", b: "The Spice House" },
          { q: 1, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 0.25, u: "cup", i: "nuts", n: "chopped" },
          { t: "a dash", i: "salt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Grate the zucchini into a large bowl. Add the bananas and eggs and mash and mix everything together.",
      "Blend the oats into a flour and add them with the baking powder, plus the cinnamon and vanilla if you're using them.",
      "Chop the dates and stir them in with the nuts and a dash of salt.",
      "Pour the batter into the pan and bake for 40 minutes, until a toothpick comes out clean. Let it cool before slicing.",
    ],
  },

  {
    slug: "cucumber-kimchi",
    title: "Easy Cucumber Kimchi",
    posted: "2026-05-27",
    reel: "DY2-CNTRNvC",
    photo: "cucumber-kimchi.jpg",
    alt: "A glass bowl of cucumber kimchi with carrot and onion",
    tags: ["Side", "Korean", "Spicy"],
    intro:
      "Mini cucumbers salted and rinsed so they stay crunchy, then tossed with onion, carrot and a sweet and spicy gochugaru sauce.",
    groups: [
      {
        items: [
          { q: 5, q2: 6, i: ["mini cucumber", "mini cucumbers"], n: "sliced" },
          { q: 0.5, u: "tbsp", i: "salt", n: "rinsed off after 30 minutes" },
          { q: 0.5, i: ["onion", "onions"], n: "thinly sliced" },
          { q: 0.5, u: "cup", i: "carrot", n: "cut into matchsticks" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 0.5, u: "tbsp", i: "honey" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Slice the cucumbers and toss them with the salt in a bowl. Leave them for 30 minutes.",
      "Rinse the cucumbers well and drain them.",
      "Slice the onion and cut the carrot into matchsticks, and add them to the cucumbers.",
      "Add the gochugaru, soy sauce, honey, garlic, sesame oil and sesame seeds.",
      "Mix well and eat right away, or keep it in the fridge.",
    ],
  },

  {
    slug: "honey-garlic-asian-chicken-salad",
    title: "Honey Garlic Asian Chicken Salad",
    posted: "2026-05-25",
    reel: "DYxzSDHRZi7",
    photo: "honey-garlic-asian-chicken-salad.jpg",
    alt: "A glass bowl of chicken salad with diced cucumber and carrot",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "Shredded chicken with diced cucumber, carrot and green onion in a sweet and savory soy, honey and garlic dressing. Eat it with crackers.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "cooked chicken", n: "shredded" },
          { q: 1, u: "cup", i: "cucumber", n: "diced", b: "Sunset" },
          { q: 0.5, u: "cup", i: "carrots", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 2, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "honey", b: "Manukora" },
          { q: 2, u: "tsp", i: "rice vinegar", b: "Marukan" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "sesame oil" },
        ],
      },
    ],
    steps: [
      "Dice the cucumber (scoop out the seeds first so it stays crunchy), dice the carrot and chop the green onion. Put them in a large bowl.",
      "Shred the chicken with two forks and add it to the bowl.",
      "Add the soy sauce, honey, rice vinegar, garlic, sesame oil and sesame seeds.",
      "Mix well and eat it with crackers.",
    ],
  },

  {
    slug: "blueberry-greek-yogurt-pancakes",
    title: "Blueberry Greek Yogurt Pancakes",
    posted: "2026-05-19",
    reel: "DYiVYPZRs7-",
    photo: "blueberry-greek-yogurt-pancakes.jpg",
    alt: "A tall stack of blueberry pancakes topped with yogurt and blueberries",
    tags: ["Breakfast", "High protein"],
    intro:
      "Banana and Greek yogurt pancakes made with blended oats and studded with blueberries. No refined sugar or flour, and they stack up tall.",
    groups: [
      {
        items: [
          { q: 2, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"], b: "Pete and Gerry's" },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Siggi's" },
          { q: 1, u: "cup", i: "oats", n: "blended into flour" },
          { q: 1, u: "tsp", i: "baking powder" },
          { q: 2 / 3, u: "cup", i: "blueberries" },
          { t: "for the pan", i: "butter" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "cinnamon" },
          { q: 1, u: "tsp", i: "vanilla extract" },
          { t: "a dash", i: "salt" },
          { t: "for topping", i: "Greek yogurt, blueberries and maple syrup", n: "as in the video" },
        ],
      },
    ],
    steps: [
      "Mash the bananas in a bowl, then whisk in the eggs and Greek yogurt.",
      "Blend the oats into a flour and stir them in with the baking powder, plus the cinnamon, vanilla and salt if you're using them.",
      "Fold in the blueberries.",
      "Melt a little butter in a nonstick pan over medium-low heat. Spoon in the batter and cook the pancakes until golden on both sides.",
      "Stack them up and top with Greek yogurt, more blueberries and maple syrup.",
    ],
  },

  {
    slug: "grape-chicken-salad",
    title: "Grape Chicken Salad",
    posted: "2026-05-17",
    reel: "DYdJziixGMe",
    photo: "grape-chicken-salad.jpg",
    alt: "A glass bowl of creamy chicken salad with grapes, celery and almonds",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "A sweet and savory chicken salad with juicy grapes, crunchy celery and almonds in a Greek yogurt and dill dressing. High protein, no mayo.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "cooked chicken", n: "shredded" },
          { q: 0.5, u: "cup", i: "celery", n: "chopped" },
          { q: 2, u: "tbsp", i: "carrots", n: "finely chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "cup", i: "grapes", n: "halved" },
          { q: 0.25, u: "cup", i: "almonds", n: "chopped" },
          { t: "for serving", i: "crackers", b: "Firehook" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 2 / 3, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tbsp", i: "dill", n: "chopped" },
          { q: 0.5, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Chop the celery, carrot and green onion, and halve the grapes.",
      "Shred the chicken with two forks and put it in a bowl with the vegetables, grapes and almonds.",
      "Add the Greek yogurt, dill, garlic powder, salt and pepper.",
      "Mix well and serve with crackers.",
    ],
  },

  {
    slug: "healthy-banana-bread",
    title: "4-Ingredient Healthy Banana Bread",
    posted: "2026-05-13",
    reel: "DYSy1mcx7UY",
    photo: "healthy-banana-bread.jpg",
    alt: "A sliced loaf of banana bread with dates and walnuts",
    time: "50 min",
    tags: ["Sweet", "Baking"],
    intro:
      "Only four ingredients are essential: bananas, eggs, blended oats and baking powder. No refined sugar, oil, gluten or dairy, with dates and nuts if you want them.",
    groups: [
      {
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"], b: "Organic Valley" },
          { q: 1.5, u: "cup", i: "oats", n: "blended into flour" },
          { q: 1, u: "tsp", i: "baking powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "cinnamon", b: "The Spice House" },
          { q: 0.5, u: "tsp", i: "vanilla extract", b: "Frontier Co-op" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { t: "as desired", i: "nuts", n: "chopped" },
          { t: "a pinch", i: "salt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a large bowl, then mix in the eggs.",
      "Blend the oats into a flour and stir them in with the baking powder, plus the cinnamon, vanilla and salt if you're using them.",
      "Fold in the chopped dates and nuts.",
      "Pour into the pan and bake for 40 minutes, until a toothpick comes out clean. Let it cool before slicing.",
    ],
  },

  {
    slug: "asian-avocado-broccoli",
    title: "Asian Avocado Broccoli",
    posted: "2026-05-08",
    reel: "DYFvtQtxJna",
    photo: "asian-avocado-broccoli.jpg",
    alt: "A glass bowl of broccoli tossed with avocado and sesame seeds",
    time: "15 min",
    tags: ["Side", "Quick"],
    intro:
      "The easiest way to finish a whole head of broccoli: blanched florets tossed with creamy avocado in a garlicky soy and sesame dressing.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "broccoli", n: "cut into florets" },
          { q: 1, i: ["avocado", "avocados"] },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 0.5, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 1, u: "clove", i: "garlic", n: "minced (or 1 tsp)" },
          { q: 0.5, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Cut the broccoli into florets.",
      "Blanch them in a pot of boiling water for a minute or two, until bright green and just tender, then drain well.",
      "Mash the avocado in a large bowl and add the broccoli and green onion.",
      "Add the soy sauce, rice vinegar, garlic, sesame oil and sesame seeds, and toss until the broccoli is coated.",
    ],
  },

  {
    slug: "sesame-tuna-salad",
    title: "5-Minute Sesame Tuna Salad",
    posted: "2026-05-04",
    reel: "DX7eTj7xdtP",
    photo: "sesame-tuna-salad.jpg",
    alt: "A glass bowl of crunchy sesame tuna salad with cabbage and almonds",
    time: "5 min",
    tags: ["Seafood", "Salad", "Quick"],
    intro:
      "A five-minute lunch: canned tuna with crunchy cabbage, carrot, celery and apple, tossed in Kewpie's deep-roasted sesame dressing and topped with almonds.",
    groups: [
      {
        items: [
          { q: 4, u: "tbsp", i: "deep roasted sesame dressing", b: "Kewpie" },
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 0.5, u: "cup", i: "cabbage", n: "finely shredded" },
          { q: 0.25, u: "cup", i: "carrots", n: "chopped" },
          { q: 1, u: "stalk", i: "celery", n: "chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1 / 3, u: "cup", i: "apple", n: "diced" },
          { q: 1, u: "tsp", i: "sesame seeds" },
          { q: 0.25, u: "cup", i: "almonds" },
        ],
      },
    ],
    steps: [
      "Drain the tuna and flake it into a bowl.",
      "Finely shred the cabbage and chop the carrot, celery, green onion and apple. Add them to the tuna.",
      "Pour over the sesame dressing and add the sesame seeds.",
      "Mix well and top with the almonds.",
    ],
  },

  {
    slug: "chicken-corn-salad",
    title: "High-Protein Chicken Corn Salad",
    posted: "2026-05-03",
    reel: "DX4XljAxxEb",
    photo: "chicken-corn-salad.jpg",
    alt: "A glass bowl of chicken salad with golden sautéed corn, cucumber, basil and Parmesan",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "A summer salad of chicken, sweet sautéed corn, cucumber, pine nuts and basil in a lemony Greek yogurt dressing, finished with Parmesan.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, u: "cup", i: "corn", n: "sautéed until golden" },
          { q: 2, i: ["cooked chicken breast", "cooked chicken breasts"], n: "chopped" },
          { q: 0.25, u: "cup", i: "pine nuts" },
          { t: "as desired", i: "basil", n: "chopped" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 1 / 3, u: "cup", i: "Greek yogurt" },
          { q: 2, u: "tbsp", i: "olive oil" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Sauté the corn in a pan until golden, then let it cool.",
      "Dice the cucumber and chop the chicken. Put them in a large bowl with the corn, pine nuts and basil.",
      "For the dressing, whisk the Greek yogurt, olive oil, lemon juice, salt and pepper together.",
      "Pour the dressing over the salad, grate over the Parmesan and toss.",
    ],
  },

  {
    slug: "chili-crunch-sushi-dip",
    title: "5-Minute Chili Crunch Sushi Dip",
    posted: "2026-05-01",
    reel: "DXzKBx5Rtwt",
    photo: "chili-crunch-sushi-dip.jpg",
    alt: "A plate of spicy tuna rice with avocado slices and sheets of nori",
    time: "5 min",
    tags: ["Seafood", "Rice", "Quick"],
    intro:
      "A spicy tuna rice you scoop into nori like a hand roll, made from pantry staples and a spoonful of Momofuku chili crunch.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "cooked white rice" },
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 1, i: ["green onion", "green onions"], n: "sliced" },
          { q: 1, q2: 2, u: "tbsp", i: "Kewpie mayo" },
          { q: 1, u: "tsp", i: "soy sauce" },
          { q: 1, q2: 1.5, u: "tbsp", i: "chili crunch", b: "Momofuku" },
          { t: "as desired", i: "nori sheets" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "as desired", i: "cucumber", n: "cut into strips" },
          { t: "as desired", i: "avocado", n: "sliced" },
        ],
      },
    ],
    steps: [
      "Put the warm rice in a bowl and add the tuna, green onion, mayo, soy sauce and chili crunch.",
      "Mix everything together well.",
      "Spoon some onto a sheet of nori, add cucumber and avocado if you like, and roll it up like a hand roll. Or just scoop it up with pieces of nori.",
    ],
  },

  {
    slug: "grape-tomato-salad",
    title: "Grape and Tomato Salad",
    posted: "2026-04-29",
    reel: "DXuvG7VEaBa",
    photo: "grape-tomato-salad.jpg",
    alt: "James holding a glass bowl of grape and tomato salad topped with almonds and Parmesan",
    time: "10 min",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "A bright, gut-friendly salad of grapes, cherry tomatoes, cucumber and red pepper with a simple lemon, olive oil and Parmesan dressing and crunchy almonds.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "grapes", n: "halved" },
          { q: 1, u: "cup", i: "cherry tomatoes", n: "halved" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "cup", i: "red pepper", n: "diced" },
          { q: 0.25, u: "cup", i: "almonds" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { q: 0.5, u: "tsp", i: "garlic powder" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Halve the grapes and cherry tomatoes, and dice the red pepper and cucumber. Chop the green onion.",
      "Put everything in a large bowl.",
      "Drizzle with the olive oil and lemon juice, add the Parmesan, garlic powder, salt and pepper, and toss.",
      "Top with the almonds. It's great scooped up with crackers too.",
    ],
  },

  {
    slug: "cottage-cheese-egg-salad-toast",
    title: "Cottage Cheese Egg Salad Toast",
    posted: "2026-04-28",
    reel: "DXsFIlkERsJ",
    photo: "cottage-cheese-egg-salad-toast.jpg",
    alt: "A thick slice of toast piled high with egg salad",
    tags: ["High protein", "Quick"],
    intro:
      "Four eggs, crunchy vegetables and cottage cheese instead of mayo, piled onto toast. Over 50 grams of protein and plenty of fiber.",
    groups: [
      {
        items: [
          { q: 4, i: ["egg", "eggs"], n: "hard-boiled", b: "Organic Valley" },
          { q: 1, u: "stalk", i: "celery", n: "finely chopped" },
          { q: 2, u: "tbsp", i: "carrots", n: "finely chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { t: "optional", i: "fresh dill", n: "chopped, added in the video" },
          { t: "for serving", i: "toasted bread", b: "One Mighty Mill" },
          { t: "on the side", i: "dill pickles", b: "Grillo's" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese", b: "Friendship Dairies" },
          { q: 0.5, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Hard-boil the eggs, then cool and peel them.",
      "Finely chop the celery, carrot, green onion and dill.",
      "Chop the eggs and put them in a bowl with the vegetables.",
      "Add the cottage cheese, Dijon, garlic powder, salt and pepper and mix well.",
      "Toast the bread, pile the egg salad on top and serve with pickles.",
    ],
  },

  {
    slug: "caramel-smores-dip",
    title: "Caramel S'mores Dip",
    posted: "2026-04-25",
    reel: "DXjuHMgkbbJ",
    photo: "caramel-smores-dip.jpg",
    alt: "A tray of s'mores dip with golden toasted marshmallows",
    tags: ["Sweet", "Snack"],
    intro:
      "A crowd-pleasing s'mores dip for a barbecue: a creamy vanilla base topped with Hershey's caramel-filled chocolate and mini marshmallows, toasted until gooey, then finished with strawberries.",
    groups: [
      {
        items: [
          { q: 2, u: "block", i: "cream cheese", n: "softened" },
          { t: "½ container", i: "whipped topping" },
          { q: 1, u: "tsp", i: "vanilla extract" },
          { t: "a pinch", i: "salt", n: "added in the video" },
          { t: "as desired", i: "milk chocolate with caramel bars", b: "Hershey's" },
          { q: 2, u: "cup", i: "mini marshmallows" },
          { q: 0.5, u: "cup", i: "strawberries", n: "chopped" },
          { t: "for dipping", i: "graham crackers" },
        ],
      },
    ],
    steps: [
      "Beat the cream cheese, whipped topping, vanilla and a pinch of salt together until smooth.",
      "Spread it evenly in a foil tray or baking dish.",
      "Break the chocolate caramel bars over the top, then cover everything with mini marshmallows.",
      "Toast it on the grill with the lid closed (or under the broiler, watching closely) until the marshmallows are golden and the chocolate melts.",
      "Scatter over the strawberries and serve with graham crackers for dipping.",
    ],
  },

  {
    slug: "crispy-corn-salad",
    title: "Crispy Corn Salad",
    posted: "2026-04-22",
    reel: "DXcsu__EYcd",
    photo: "crispy-corn-salad.jpg",
    alt: "James holding up a glass bowl of creamy crispy corn salad topped with almonds",
    tags: ["Salad", "Air fryer", "Side"],
    intro:
      "Canned corn air-fried until crispy and golden, then tossed with cucumber and bell pepper in a lime, Parmesan and Greek yogurt dressing. Great with crackers.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "corn", n: "drained and patted dry" },
          { t: "a drizzle", i: "olive oil", n: "for the corn, as in the video" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 0.5, u: "cup", i: "bell pepper", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { t: "optional", i: "almonds" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 1 / 3, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
          { q: 0.5, i: ["lime", "limes"], n: "juiced" },
          { q: 1, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { q: 1, u: "tsp", i: "dill", n: "optional" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Drain the corn and pat it dry with paper towels. Toss it with a drizzle of olive oil.",
      "Spread it out in the air fryer on parchment and air fry at 375°F for 15 minutes, until golden and crispy.",
      "Meanwhile, dice the cucumber and bell pepper and chop the green onion.",
      "Put the corn and vegetables in a bowl and add the Greek yogurt, olive oil, lime juice, garlic powder, dill, Parmesan, salt and pepper.",
      "Mix well, top with almonds and eat with crackers.",
    ],
  },

  {
    slug: "cottage-cheese-tuna-salad",
    title: "Cottage Cheese Tuna Salad",
    posted: "2026-04-13",
    reel: "DXFirgxEY5Q",
    photo: "cottage-cheese-tuna-salad.jpg",
    alt: "A white bowl of crunchy tuna salad",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Cottage cheese blended smooth with lemon and Dijon makes a creamy, mayo-free base for tuna and lots of crunchy vegetables and apple. Over 30 grams of protein.",
    groups: [
      {
        name: "Sauce",
        items: [
          { q: 1 / 3, u: "cup", i: "cottage cheese", b: "Organic Valley" },
          { q: 1, u: "tbsp", i: "lemon juice" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
      {
        name: "Salad",
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained", b: "Fishwife" },
          { q: 0.5, u: "cup", i: "celery", n: "chopped" },
          { q: 3, u: "tbsp", i: "carrots", n: "chopped" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, i: ["dill pickle", "dill pickles"], n: "chopped", b: "Mt. Olive" },
          { q: 0.25, u: "cup", i: "cucumber", n: "chopped" },
          { q: 1 / 3, u: "cup", i: "apple", n: "chopped" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
    ],
    steps: [
      "Put the cottage cheese, lemon juice, Dijon, garlic powder, salt and pepper in a bowl and blend with an immersion blender until smooth.",
      "Add the tuna and mix it in.",
      "Chop the celery, carrot, green onion, pickle, cucumber and apple and add them to the bowl.",
      "Mix everything together and serve with crackers.",
    ],
  },

  {
    slug: "celery-pistachio-salad",
    title: "Celery Pistachio Salad",
    posted: "2026-04-12",
    reel: "DXC7YmYEf8G",
    photo: "celery-pistachio-salad.jpg",
    alt: "A plate of celery salad with apple, dates, pistachios and Parmesan",
    time: "10 min",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "Crunchy celery, cucumber and apple with sweet dates and pistachios, dressed with lemon, olive oil and plenty of grated Parmesan.",
    groups: [
      {
        items: [
          { q: 1.5, u: "cup", i: "celery", n: "chopped" },
          { q: 0.5, u: "cup", i: "cucumber", n: "chopped" },
          { q: 0.5, i: ["apple", "apples"], n: "or 1 small, diced" },
          { q: 4, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 0.25, u: "cup", i: "pistachios", b: "Wonderful" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 2, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 0.25, u: "cup", i: "Parmesan cheese", n: "grated" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Chop the celery and cucumber, dice the apple and chop the dates.",
      "Put everything in a bowl with the pistachios.",
      "Squeeze over the lemon, drizzle with the olive oil and grate in the Parmesan.",
      "Season with salt and pepper, toss and serve.",
    ],
  },

  {
    slug: "honey-garlic-enoki-mushrooms",
    title: "Honey Garlic Enoki Mushrooms",
    posted: "2026-04-05",
    reel: "DWw7FlFkYGO",
    photo: "honey-garlic-enoki-mushrooms.jpg",
    alt: "A pan of golden enoki mushrooms in a glossy honey garlic sauce with sesame seeds",
    time: "5 min",
    tags: ["Side", "Quick"],
    intro:
      "Enoki mushrooms seared until golden, then simmered in a quick honey garlic soy sauce. Ready in about five minutes.",
    groups: [
      {
        items: [
          { q: 1, u: "package", i: "enoki mushrooms" },
          { q: 1, u: "tsp", i: "oil", b: "Graza" },
          { q: 1, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "honey" },
          { q: 3, u: "tbsp", i: "water" },
          { q: 0.5, u: "tsp", i: "sesame oil" },
          { t: "optional", i: "jalapeños", n: "chopped" },
          { t: "as desired", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Trim the root end off the enoki and pull them apart into small clusters.",
      "Heat the oil in a pan over medium-high heat and lay the mushrooms in. Sear until golden on both sides.",
      "Meanwhile, stir together the soy sauce, garlic, honey, water, sesame oil and jalapeños.",
      "Pour the sauce over the mushrooms and let it bubble for a minute or two until glossy.",
      "Sprinkle with sesame seeds and serve.",
    ],
  },

  {
    slug: "crunchy-crispy-tuna-salad",
    title: "Crunchy and Crispy Tuna Salad",
    posted: "2026-04-01",
    reel: "DWmnXuykXNg",
    photo: "crunchy-crispy-tuna-salad.jpg",
    alt: "A cracker topped with crunchy tuna salad and chili crisp",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Tuna with celery, carrot, apple and pickle in a Greek yogurt and Dijon sauce, with chili crisp for heat and almonds for crunch. 45 grams of protein.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained", b: "Wild Planet" },
          { q: 1, u: "stalk", i: "celery", n: "chopped" },
          { q: 2, u: "tbsp", i: "carrots", n: "chopped" },
          { q: 0.5, i: ["apple", "apples"], n: "chopped" },
          { q: 1, i: ["pickle", "pickles"], n: "chopped", b: "Mt. Olive" },
          { q: 2, u: "tbsp", i: "green onion", n: "chopped" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.25, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tbsp", i: "chili crisp", b: "Jamesy World" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
      {
        name: "To finish",
        items: [
          { q: 0.25, u: "cup", i: "almonds", n: "chopped" },
          { t: "for serving", i: "crackers", b: "Firehook" },
        ],
      },
    ],
    steps: [
      "Put the tuna in a bowl and break it up with a fork.",
      "Chop the celery, carrot, apple, pickle and green onion and add them to the tuna.",
      "Add the Greek yogurt, Dijon, chili crisp, salt and pepper and mix well.",
      "Top with chopped almonds and serve on crackers.",
    ],
  },

  {
    slug: "soy-garlic-tofu",
    title: "Soy Garlic Tofu",
    posted: "2026-03-31",
    reel: "DWkA5t-kRC9",
    photo: "soy-garlic-tofu.jpg",
    alt: "A plate of crispy tofu slabs glazed in soy garlic sauce with green onion and sesame",
    tags: ["Tofu", "High protein"],
    intro:
      "Slabs of firm tofu dredged in cornstarch, pan-fried until golden and crispy, then glazed in a sticky honey, soy and garlic sauce.",
    groups: [
      {
        items: [
          { q: 1, u: "block", i: "firm tofu" },
          { q: 0.25, u: "cup", i: "cornstarch" },
          { t: "for the pan", i: "cooking oil" },
          { t: "to garnish", i: "green onion and sesame seeds", n: "as in the video" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 3, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 3, u: "clove", i: "garlic", n: "minced" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 3, u: "tbsp", i: "water" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "cornstarch" },
        ],
      },
    ],
    steps: [
      "Cut the tofu into thick slabs and press them between paper towels to soak up the water.",
      "Dredge each piece in the cornstarch.",
      "Heat a little oil in a nonstick pan over medium-high heat and fry the tofu until golden and crispy on both sides.",
      "Mix the sauce: soy sauce, garlic, honey, water, sesame oil and cornstarch.",
      "Pour the sauce into the pan and let it bubble until thick and glossy, turning the tofu to coat.",
      "Top with green onion and sesame seeds.",
    ],
  },

  {
    slug: "korean-rolled-omelette",
    title: "Korean Rolled Omelette (Gyeran-mari)",
    posted: "2026-03-27",
    reel: "DWZGVcikeXt",
    photo: "korean-rolled-omelette.jpg",
    alt: "A plate of sliced Korean rolled omelette with flecks of green onion, carrot and ham",
    tags: ["Side", "Korean", "Quick"],
    intro:
      "One of Korea's most popular side dishes: eggs with green onion, carrot and ham, cooked in thin layers and rolled up, then sliced into rounds.",
    groups: [
      {
        items: [
          { q: 4, i: ["large egg", "large eggs"] },
          { q: 1, i: ["small green onion", "small green onions"], n: "finely chopped" },
          { q: 2, u: "tbsp", i: "carrots", n: "minced" },
          { q: 2, u: "slice", i: "ham", n: "minced" },
          { t: "as desired", i: "salt and pepper" },
          { t: "as needed", i: "cooking oil" },
        ],
      },
    ],
    steps: [
      "Beat the eggs in a bowl and season with salt and pepper.",
      "Mince the carrot and ham and finely chop the green onion. Stir them into the eggs.",
      "Heat a little oil in a rectangular egg pan (or a small nonstick pan) over medium-low heat. Pour in a thin layer of egg.",
      "When it's almost set, roll it up from one end. Push the roll to the side, pour in more egg so it joins the roll, and keep rolling. Repeat until all the egg is used.",
      "Let it rest for a minute, then slice into rounds. Serve with ketchup if you like.",
    ],
  },

  {
    slug: "healthy-chocolate-banana-bread",
    title: "Healthy Chocolate Banana Bread",
    posted: "2026-03-22",
    reel: "DWMIFYZEal0",
    photo: "healthy-chocolate-banana-bread.jpg",
    alt: "James holding a thick slice of chocolate banana bread over the loaf",
    time: "1 hr",
    tags: ["Sweet", "Baking"],
    intro:
      "A rich chocolate banana bread made with almond flour and cacao, sweetened with banana and a little maple syrup. Top it with chocolate chips, walnuts and flaky salt.",
    groups: [
      {
        name: "Wet",
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 3, i: ["egg", "eggs"], b: "Pete and Gerry's" },
          { q: 0.25, u: "cup", i: "maple syrup" },
          { q: 1, u: "tsp", i: "vanilla extract" },
        ],
      },
      {
        name: "Dry",
        items: [
          { q: 2.5, u: "cup", i: "almond flour" },
          { q: 0.5, u: "cup", i: "cacao powder", b: "Diaspora Co." },
          { q: 1, u: "tsp", i: "baking soda" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "as desired", i: "chocolate chips" },
          { t: "as desired", i: "walnuts" },
          { t: "a pinch", i: "flaky sea salt", b: "Osmo" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a bowl, then mix in the eggs, maple syrup and vanilla.",
      "In another bowl, mix the almond flour, cacao powder and baking soda.",
      "Stir the dry ingredients into the wet until combined, then pour the batter into the pan.",
      "Top with chocolate chips, walnuts and a pinch of flaky salt.",
      "Bake for 50 minutes to an hour, until a toothpick comes out clean.",
    ],
  },

  {
    slug: "orange-sesame-chicken",
    title: "Orange Sesame Chicken",
    posted: "2026-03-19",
    reel: "DWEdghZkcJZ",
    photo: "orange-sesame-chicken.jpg",
    alt: "A plate of orange sesame chicken topped with green onion, with a glass of orange juice",
    tags: ["Chicken", "High protein"],
    intro:
      "Pan-fried chicken in a glossy orange sauce made with a full cup of fresh-squeezed orange juice, honey, garlic and ginger. No deep frying.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "chicken breast", n: "cut into bite-size pieces" },
          { q: 1, i: ["egg white", "egg whites"] },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 0.25, u: "cup", i: "cornstarch" },
          { t: "for the pan", i: "cooking oil" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "cup", i: "fresh orange juice", b: "Florida Orange Juice" },
          { q: 2, u: "tbsp", i: "soy sauce" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 3, u: "clove", i: "garlic", n: "minced" },
          { q: 2, u: "tsp", i: "ginger", n: "grated" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { t: "as desired", i: "jalapeño", n: "chopped" },
        ],
      },
      {
        name: "To finish",
        items: [
          { q: 1, u: "tsp", i: "cornstarch", n: "mixed with 1 tbsp water" },
          { t: "to garnish", i: "sesame seeds and green onions" },
        ],
      },
    ],
    steps: [
      "Cut the chicken into bite-size pieces and toss with the egg white and soy sauce.",
      "Coat each piece in the cornstarch.",
      "Heat a little oil in a large pan over medium-high heat and pan-fry the chicken until golden and cooked through. Set it aside.",
      "Mix the orange juice, soy sauce, rice vinegar, honey, garlic, ginger, sesame oil and jalapeño, and pour into the pan.",
      "Bring to a simmer, stir in the cornstarch slurry and cook until thick and glossy.",
      "Add the chicken back and toss to coat. Finish with sesame seeds and green onions.",
    ],
  },

  {
    slug: "tuna-kimchi-stew",
    title: "Easy Tuna Kimchi Stew",
    posted: "2026-03-12",
    reel: "DVzHVYSkacI",
    photo: "tuna-kimchi-stew.jpg",
    alt: "A white bowl of tuna kimchi stew with tofu",
    tags: ["Soup", "Korean", "High protein"],
    intro:
      "The easiest kimchi jjigae: well-fermented kimchi simmered with onion, canned tuna and an anchovy broth tablet, finished with soft tofu and green onion.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna" },
          { q: 1, u: "cup", i: "fermented kimchi", n: "chopped" },
          { q: 0.5, i: ["medium onion", "medium onions"], n: "sliced" },
          { q: 1.5, u: "cup", i: "water" },
          { q: 2, u: "tbsp", i: "kimchi juice" },
          { q: 1, i: ["anchovy broth tablet", "anchovy broth tablets"] },
          { q: 1, u: "tsp", i: "fish sauce" },
          { q: 0.5, u: "block", i: "tofu", n: "sliced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 1, u: "tsp", i: "sugar" },
        ],
      },
    ],
    steps: [
      "Put the kimchi and onion in a pot over medium heat and cook for a few minutes until the onion softens.",
      "Add the water, kimchi juice, anchovy broth tablet and fish sauce, plus the gochugaru and sugar if you're using them. Bring it to a boil.",
      "Add the tuna, with its oil if you like it richer, and let it simmer for about 10 minutes.",
      "Slide in the tofu and let it heat through.",
      "Top with green onion and serve hot, with rice.",
    ],
  },

  {
    slug: "sardine-melt",
    title: "Sardine Melt",
    posted: "2026-03-04",
    reel: "DVex7MZkSjt",
    photo: "sardine-melt.jpg",
    alt: "James holding a golden grilled sardine melt sandwich",
    tags: ["Seafood", "High protein"],
    intro:
      "A tuna melt, but with sardines: mashed with celery, pickle and a tangy yogurt and Dijon dressing, then grilled between buttered bread with sharp cheddar. Over 40 grams of protein.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "sardines", b: "Fishwife" },
          { q: 0.5, u: "stalk", i: "celery", n: "finely chopped" },
          { q: 1, u: "tbsp", i: "green onion", n: "chopped" },
          { q: 2, i: ["small dill pickle", "small dill pickles"], n: "chopped", b: "Mt. Olive" },
          { q: 2, u: "tbsp", i: "Greek yogurt", b: "Fage" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.25, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { q: 1, u: "tsp", i: "pickle juice" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
      {
        name: "For the sandwich",
        items: [
          { q: 2, u: "slice", i: "bread", b: "Dave's Killer Bread" },
          { t: "for the pan", i: "butter", b: "Kerrygold" },
          { t: "enough to cover", i: "sharp cheddar", n: "sliced" },
        ],
      },
    ],
    steps: [
      "Put the sardines in a bowl and mash them with a fork.",
      "Add the celery, green onion, pickles, Greek yogurt, Dijon, garlic powder, pickle juice, salt and pepper, and mix well.",
      "Butter the outside of two slices of bread. Lay cheddar on the inside of both slices and spread the sardine mixture between them.",
      "Cook in a pan over medium-low heat until the bread is golden and the cheese has melted, flipping once.",
      "Slice in half and eat while it's hot.",
    ],
  },

  {
    slug: "chickpea-banana-blondies",
    title: "Chickpea Banana Blondies",
    posted: "2026-02-27",
    reel: "DVRrsDCkdgz",
    photo: "chickpea-banana-blondies.jpg",
    alt: "James holding a chickpea banana blondie over the tray",
    time: "45 min",
    tags: ["Sweet", "Baking"],
    intro:
      "A sneaky healthy treat: chickpeas, banana and peanut butter blended into a soft, chewy blondie, studded with dates and topped with pecans.",
    groups: [
      {
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 1, u: "can", i: "chickpeas", n: "15 oz, drained and rinsed" },
          { q: 0.5, u: "cup", i: "peanut butter", b: "Once Again" },
          { q: 1, u: "tsp", i: "baking powder", b: "365 by Whole Foods Market" },
          { q: 8, i: ["date", "dates"], n: "pitted and chopped" },
          { q: 0.5, u: "tsp", i: "vanilla extract" },
          { t: "a dash", i: "salt" },
          { t: "as desired", i: "pecans" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a baking pan with parchment paper.",
      "Mash the bananas in a bowl. Blend the chickpeas until smooth and add them.",
      "Add the peanut butter, baking powder, vanilla and salt and mix well.",
      "Stir in the chopped dates, then spread the batter in the pan and top with pecans.",
      "Bake for 35–40 minutes, until golden brown. Let it sit for 10 minutes before slicing.",
    ],
  },

  {
    slug: "shrimp-vermicelli-fresh-rolls",
    title: "Shrimp Vermicelli Fresh Rolls",
    posted: "2026-02-22",
    reel: "DVE31-Nkd4n",
    photo: "shrimp-vermicelli-fresh-rolls.jpg",
    alt: "A platter of sliced vegetables, herbs and lime wedges for fresh rolls",
    tags: ["Seafood", "No cook"],
    intro:
      "Rice paper rolls packed with shrimp, vermicelli noodles, crunchy vegetables, avocado and plenty of herbs, with a bigger batch of peanut sauce for dipping.",
    groups: [
      {
        name: "Rolls",
        items: [
          { t: "as needed", i: "rice paper" },
          { t: "as needed", i: "cooked shrimp" },
          { t: "as needed", i: "vermicelli noodles", n: "cooked" },
          { t: "as needed", i: "cabbage", n: "shredded" },
          { t: "as needed", i: "cucumber", n: "cut into strips" },
          { t: "as needed", i: "bell peppers", n: "cut into strips" },
          { t: "as needed", i: "carrots", n: "shredded" },
          { t: "as needed", i: "avocado", n: "sliced" },
          { t: "as needed", i: "cilantro, mint and green onions" },
        ],
      },
      {
        name: "Peanut sauce",
        items: [
          { q: 4, u: "tbsp", i: "peanut butter", b: "Once Again" },
          { q: 2, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 1, u: "tbsp", i: "rice vinegar", b: "Marukan" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 2, u: "tsp", i: "garlic", n: "minced (or 2 cloves)" },
          { q: 1, q2: 2, u: "tsp", i: "lime juice" },
          { q: 3, u: "tbsp", i: "water" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Cut the cucumber and peppers into thin strips, shred the cabbage and carrots, slice the avocado and pick the herbs.",
      "Cook the vermicelli according to the package, then rinse under cold water and drain.",
      "Whisk the peanut butter, soy sauce, rice vinegar, honey, garlic, lime juice, water, sesame oil and sesame seeds until smooth.",
      "Dip a sheet of rice paper in water for a few seconds and lay it flat. Add shrimp, a little vermicelli, vegetables, avocado and herbs, then fold in the sides and roll it up tightly.",
      "Repeat with the rest and serve with the peanut sauce.",
    ],
  },

  {
    slug: "crispy-cheesy-broccoli",
    title: "Crispy Cheesy Air Fryer Broccoli",
    posted: "2026-02-20",
    reel: "DU_rHjckRpI",
    photo: "crispy-cheesy-broccoli.jpg",
    alt: "A tray of crispy broccoli with golden Parmesan crisps",
    tags: ["Side", "Air fryer"],
    intro:
      "Broccoli tossed in a garlicky olive oil and nutritional yeast dressing, then air-fried on a layer of Parmesan until the cheese turns into a golden, lacy crisp.",
    groups: [
      {
        items: [
          { q: 3, i: ["small broccoli crown", "small broccoli crowns"], n: "cut into florets" },
          { q: 1, u: "cup", i: "Parmesan cheese", n: "grated, or as desired" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 3, q2: 4, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
          { q: 1, u: "tsp", i: "garlic powder", b: "Diaspora Co." },
          { q: 1, q2: 2, u: "tbsp", i: "nutritional yeast", b: "Bob's Red Mill" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Cut the broccoli into florets.",
      "Whisk the olive oil, garlic powder, nutritional yeast, salt and pepper together, then toss the broccoli in it until coated.",
      "Line the air fryer tray with parchment and grate an even layer of Parmesan over it.",
      "Spread the broccoli on top, pressing it into the cheese, and grate more Parmesan over the top.",
      "Air fry at 400°F until the broccoli is tender and the cheese is golden and crispy. Break it up and serve.",
    ],
  },

  {
    slug: "kongbul-bean-sprout-bulgogi",
    title: "Kongbul (Bean Sprout Bulgogi)",
    posted: "2026-02-13",
    reel: "DUtk_rxkem-",
    photo: "kongbul-bean-sprout-bulgogi.jpg",
    alt: "A large pan of spicy bean sprout bulgogi with green onion and sesame seeds",
    tags: ["Korean", "High protein", "Spicy"],
    intro:
      "Thinly sliced beef or pork steamed on a big pile of bean sprouts, cabbage, onion and sweet potato, then tossed in a spicy gochujang sauce. Packed with protein and fiber.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "thinly sliced beef or pork" },
          { q: 340, u: "g", i: "bean sprouts", n: "washed" },
          { q: 1, i: ["medium onion", "medium onions"], n: "sliced" },
          { q: 1 / 3, u: "cup", i: "cabbage", n: "chopped" },
          { q: 1, i: ["small sweet potato", "small sweet potatoes"], n: "thinly sliced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "tbsp", i: "sesame seeds" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 3, u: "tbsp", i: "gochujang" },
          { q: 2, u: "tbsp", i: "gochugaru" },
          { q: 3, u: "tbsp", i: "soy sauce" },
          { q: 3, u: "clove", i: "garlic", n: "minced" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 2, q2: 3, u: "tbsp", i: "water", n: "only if your bean sprouts are dry" },
        ],
      },
    ],
    steps: [
      "Wash the bean sprouts and slice the onion, cabbage and sweet potato.",
      "Mix the sauce: gochujang, gochugaru, soy sauce, garlic, honey and sesame oil (plus water if your sprouts are dry). For a saltier sauce to eat with rice, add an extra tablespoon each of gochujang and soy sauce.",
      "Lay the sweet potato slices in a large pan, then pile the cabbage, onion and bean sprouts on top.",
      "Spread the meat over the vegetables and spoon the sauce over everything.",
      "Cover and cook over medium heat until the sprouts wilt and the meat is cooked, then stir everything together.",
      "Finish with green onion and sesame seeds.",
    ],
  },

  {
    slug: "freezer-korean-soup",
    title: "Freezer Korean Doenjang Soup",
    posted: "2026-02-10",
    reel: "DUmEEYpEQ6K",
    photo: "freezer-korean-soup.jpg",
    alt: "James eating spoonfuls of soup from a small pot",
    tags: ["Soup", "Korean", "Meal prep"],
    intro:
      "A cozy soup you can make from freezer bags: zucchini, tofu, enoki and frozen dumplings in an anchovy and doenjang broth. Prep the bags ahead, then just add water.",
    groups: [
      {
        items: [
          { q: 1.5, u: "cup", i: "water" },
          { q: 0.5, u: "cup", i: "zucchini", n: "sliced" },
          { q: 1 / 3, u: "cup", i: "tofu", n: "cubed, or as desired" },
          { q: 1, i: ["anchovy broth tablet", "anchovy broth tablets"] },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { t: "as desired", i: "frozen dumplings", b: "Mila" },
          { q: 0.5, u: "tbsp", i: "doenjang", n: "fermented soybean paste" },
          { q: 0.25, u: "cup", i: "kimchi", n: "optional" },
          { t: "a small handful", i: "enoki mushrooms" },
          { q: 2, u: "tbsp", i: "green onions", n: "chopped" },
        ],
      },
    ],
    steps: [
      "To prep ahead, freeze the chopped zucchini, tofu, enoki and green onions in bags.",
      "Bring the water to a boil in a small pot.",
      "Add the zucchini, anchovy broth tablet and garlic, then stir in the doenjang until it dissolves.",
      "Add the kimchi if you're using it, then the dumplings, and cook until the dumplings are heated through.",
      "Add the tofu, enoki and green onions and simmer for another minute or two.",
    ],
  },

  {
    slug: "healthy-shrimp-salad",
    title: "Healthy Shrimp Salad",
    posted: "2026-02-08",
    reel: "DUgild_EcKD",
    photo: "healthy-shrimp-salad.jpg",
    alt: "James holding a glass bowl of creamy shrimp salad",
    tags: ["Seafood", "Salad", "High protein"],
    intro:
      "Shrimp with crunchy celery, cucumber and apple in a blended cottage cheese, Greek yogurt and honey Dijon sauce. No mayo and over 55 grams of protein.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "cooked shrimp", n: "chopped" },
          { q: 0.75, u: "cup", i: "celery", n: "diced" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, i: ["apple", "apples"], n: "diced" },
          { q: 1, q2: 2, u: "tbsp", i: "onion", n: "minced" },
          { q: 2, i: ["pickle", "pickles"], n: "chopped", b: "Mt. Olive" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese", b: "Good Culture" },
          { q: 0.25, u: "cup", i: "Greek yogurt", b: "Fage" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "clove", i: "garlic" },
          { q: 2, u: "tsp", i: "honey" },
          { t: "to taste", i: "salt and pepper" },
          { q: 1, u: "tsp", i: "pickle juice", n: "optional" },
          { t: "for serving", i: "crackers", b: "Top Seedz" },
        ],
      },
    ],
    steps: [
      "Dice the celery, cucumber and apple, and mince the onion.",
      "Chop the shrimp and pickles and add them to a bowl with the vegetables.",
      "Blend the cottage cheese, Greek yogurt, Dijon, garlic, honey, salt, pepper and pickle juice until smooth.",
      "Pour the sauce over the salad, mix well and serve with crackers.",
    ],
  },

  {
    slug: "soondubu-korean-tofu-soup",
    title: "Korean Tofu Soup (Soondubu)",
    posted: "2026-02-06",
    reel: "DUbFaLrEY3M",
    photo: "soondubu-korean-tofu-soup.jpg",
    alt: "A bowl of spicy Korean soft tofu soup",
    tags: ["Soup", "Korean", "Spicy"],
    intro:
      "A hearty, spicy soft tofu stew: a quick chili oil base with onion and garlic, simmered with zucchini, mushrooms and seafood, then finished with silken tofu and an egg.",
    groups: [
      {
        items: [
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 0.25, u: "cup", i: "onions", n: "diced" },
          { q: 1, u: "clove", i: "garlic", n: "minced" },
          { q: 0.5, u: "tbsp", i: "soy sauce" },
          { q: 1, u: "tbsp", i: "fish sauce" },
          { q: 1.5, u: "cup", i: "water" },
          { q: 1, i: ["anchovy broth tablet", "anchovy broth tablets"] },
          { q: 0.5, u: "cup", i: "zucchini", n: "diced" },
          { q: 0.25, u: "cup", i: "mushrooms", n: "sliced" },
          { q: 1 / 3, u: "cup", i: "shrimp or seafood mix" },
          { q: 1, u: "package", i: "silken tofu" },
          { q: 1, i: ["egg", "eggs"] },
          { t: "to garnish", i: "green onion", n: "added in the video" },
        ],
      },
    ],
    steps: [
      "Heat the sesame oil and gochugaru in a small pot over low heat until it turns into a red chili oil.",
      "Add the onion and garlic and stir until soft, then add the soy sauce and fish sauce.",
      "Pour in the water, add the anchovy broth tablet and bring to a boil.",
      "Add the zucchini, mushrooms and seafood and simmer for a few minutes.",
      "Spoon in the silken tofu in big chunks, crack in the egg and let it cook gently.",
      "Top with green onion and serve bubbling hot.",
    ],
  },

  {
    slug: "honey-garlic-tofu",
    title: "10-Minute Honey Garlic Tofu",
    posted: "2026-02-03",
    reel: "DUT3-OfkVhB",
    photo: "honey-garlic-tofu.jpg",
    alt: "A plate of golden tofu cubes in honey garlic sauce with green onion and sesame",
    time: "10 min",
    tags: ["Tofu", "High protein", "Quick"],
    intro:
      "Seven ingredients and ten minutes: tofu cubes pan-fried until golden and coated in a sweet and savory honey garlic sauce.",
    groups: [
      {
        items: [
          { q: 1, u: "block", i: "firm tofu" },
          { t: "for the pan", i: "olive oil", b: "Graza" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, u: "tsp", i: "sesame seeds" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 3, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 3, q2: 4, u: "clove", i: "garlic", n: "minced" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 3, u: "tbsp", i: "water" },
        ],
      },
    ],
    steps: [
      "Cut the tofu into cubes and press them between paper towels to soak up the water.",
      "Mix the sauce: soy sauce, garlic, honey and water.",
      "Heat a little oil in a nonstick pan over medium-high heat and fry the tofu, turning, until golden on all sides.",
      "Pour in the sauce and let it bubble until it thickens and coats the tofu.",
      "Drizzle with the sesame oil and top with green onion and sesame seeds.",
    ],
  },

  {
    slug: "apple-banana-bread",
    title: "Apple Banana Bread",
    posted: "2026-01-29",
    reel: "DUG_hABku31",
    photo: "apple-banana-bread.jpg",
    alt: "A loaf of apple banana bread topped with apple slices and cinnamon",
    time: "50 min",
    tags: ["Sweet", "Baking"],
    intro:
      "A vegan, gluten-free loaf with no refined sugar or oil: mashed banana and applesauce with oat flour, chunks of fresh apple and cinnamon, topped with more apple slices.",
    groups: [
      {
        items: [
          { q: 2, i: ["banana", "bananas"] },
          { q: 0.75, u: "cup", i: "applesauce" },
          { q: 1.5, u: "cup", i: "oat flour", n: "or oats blended into flour" },
          { q: 1, u: "tsp", i: "baking powder" },
          { q: 1, i: ["apple", "apples"], n: "peeled and chopped, with some slices for the top" },
          { q: 1, u: "tsp", i: "cinnamon" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a pinch", i: "salt" },
          { q: 0.5, u: "tsp", i: "vanilla extract" },
          { t: "as desired", i: "nuts or seeds", b: "Top Seedz" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a bowl and stir in the applesauce.",
      "Blend oats into a flour if you don't have oat flour, then mix it in with the baking powder, plus the salt and vanilla if you're using them.",
      "Peel and chop the apple, keeping a few thin slices for the top. Fold the chopped apple, cinnamon and nuts or seeds into the batter.",
      "Pour it into the pan, lay the apple slices on top and dust with more cinnamon.",
      "Bake for 40–45 minutes, until a toothpick comes out clean.",
    ],
  },

  {
    slug: "asian-peanut-chicken-salad",
    title: "Asian Peanut Chicken Salad",
    posted: "2026-01-22",
    reel: "DT09GHrkcHc",
    photo: "asian-peanut-chicken-salad.jpg",
    alt: "James holding a container of crunchy peanut chicken salad",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "Shredded cabbage, carrot, cucumber and apple with diced chicken in a lemony peanut and soy dressing. High in protein and fiber, and great for meal prep.",
    groups: [
      {
        items: [
          { q: 2, u: "cup", i: "cooked chicken", n: "diced" },
          { q: 1, u: "cup", i: "cabbage", n: "shredded" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, i: ["carrot", "carrots"], n: "grated" },
          { q: 1, i: ["apple", "apples"], n: "diced" },
          { t: "optional", i: "nuts, seeds and sesame seeds", b: "Top Seedz" },
          { t: "for serving", i: "crackers", b: "Mary's Gone Crackers" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 2, u: "tbsp", i: "soy sauce", b: "Momofuku" },
          { q: 3, u: "tbsp", i: "peanut butter", b: "Once Again" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 1, u: "tbsp", i: "honey" },
          { q: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 0.5, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
        ],
      },
    ],
    steps: [
      "Finely shred the cabbage, dice the cucumber, grate the carrot and chop the green onion. Peel and dice the apple.",
      "Dice the chicken.",
      "In a large container, whisk the soy sauce, peanut butter, lemon juice, honey, garlic, sesame oil and rice vinegar.",
      "Add the chicken and vegetables and mix until everything is coated.",
      "Top with nuts, seeds and sesame seeds and eat with crackers.",
    ],
  },

  {
    slug: "korean-spinach-side-dish",
    title: "Korean Spinach Side Dish (Sigeumchi Namul)",
    posted: "2026-01-20",
    reel: "DTv3vnIEYFn",
    photo: "korean-spinach-side-dish.jpg",
    alt: "James holding a bowl of seasoned Korean spinach",
    time: "10 min",
    tags: ["Side", "Korean", "Quick"],
    intro:
      "A classic Korean banchan: spinach blanched for seconds, squeezed dry and tossed with garlic, soy sauce, sesame oil and sesame seeds. Low in calories and full of flavor.",
    groups: [
      {
        items: [
          { q: 1, u: "bunch", i: "spinach", n: "about 8–9 oz" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, u: "tsp", i: "soy sauce", n: "or ¼ tsp salt", b: "Momofuku" },
          { q: 1, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "sesame oil" },
          { q: 1, q2: 2, u: "tsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Trim the roots off the spinach and wash it well.",
      "Bring a pot of water to a boil and blanch the spinach for 20–30 seconds, just until it wilts.",
      "Drain it, rinse under cold water and squeeze out as much water as you can with your hands.",
      "Put it in a bowl with the green onion, soy sauce, garlic, sesame oil and sesame seeds.",
      "Mix it with your hands so the seasoning gets into every leaf.",
    ],
  },

  {
    slug: "healthy-blondies",
    title: "7-Ingredient Healthy Blondies",
    posted: "2026-01-18",
    reel: "DTqm6RHEVCp",
    photo: "healthy-blondies.jpg",
    alt: "Sliced healthy blondies with pecans and dates on parchment paper",
    time: "30 min",
    tags: ["Sweet", "Baking"],
    intro:
      "Chewy, gluten-free blondies made with banana, peanut butter and blended oats, sweetened with a little maple syrup and chopped dates. Ready in about 20 minutes in the oven.",
    groups: [
      {
        items: [
          { q: 1, i: ["ripe banana", "ripe bananas"] },
          { q: 1, i: ["egg", "eggs"] },
          { q: 0.25, u: "cup", i: "peanut butter", b: "Once Again" },
          { q: 2, u: "tbsp", i: "maple syrup" },
          { q: 3, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 1, u: "cup", i: "oats", n: "blended into flour", b: "One Degree Organics" },
          { q: 0.5, u: "tsp", i: "baking powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "as desired", i: "salt" },
          { t: "as desired", i: "nuts", n: "chopped" },
          { t: "as desired", i: "chocolate", n: "chopped, added in the video" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a small baking pan with parchment paper.",
      "Mash the banana in a bowl, then mix in the egg, peanut butter and maple syrup.",
      "Chop the dates and stir them in.",
      "Add the oat flour, baking powder and salt and mix to a thick batter. Fold in nuts and chocolate if you like.",
      "Spread it in the pan and bake for 18–20 minutes, until golden. Let it cool a little before slicing.",
    ],
  },

  {
    slug: "celery-apple-salad",
    title: "Creamy Celery Apple Salad",
    posted: "2026-01-11",
    reel: "DTYpmSOkYkp",
    photo: "celery-apple-salad.jpg",
    alt: "James holding up a container of celery apple salad topped with seeds",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "Celery, apple, cucumber and sweet dates in a light, creamy lemon, Parmesan and Greek yogurt dressing, topped with crunchy seeds.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "celery", n: "chopped" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 1, u: "cup", i: "cucumber", n: "diced" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped" },
          { t: "as desired", i: "nuts or seeds", b: "Top Seedz" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 1, u: "tbsp", i: "olive oil", b: "Graza" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { q: 2, u: "tbsp", i: "Parmesan cheese", n: "grated" },
          { q: 2, u: "tbsp", i: "Greek yogurt", b: "Fage" },
          { q: 1, u: "clove", i: "garlic", n: "minced" },
          { q: 0.5, u: "tbsp", i: "honey" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Chop the celery, peel and dice the apple, dice the cucumber and chop the dates. Put it all in a container.",
      "Add the olive oil, lemon juice, Parmesan, Greek yogurt, garlic, honey, salt and pepper.",
      "Mix until everything is coated in the dressing.",
      "Top with nuts or seeds.",
    ],
  },

  {
    slug: "roasted-burrata-bruschetta",
    title: "Roasted Burrata Bruschetta",
    posted: "2026-01-07",
    reel: "DTOes2hEZV9",
    photo: "roasted-burrata-bruschetta.jpg",
    alt: "A dish of roasted cherry tomatoes with a whole burrata, basil and balsamic glaze",
    tags: ["Snack", "Side"],
    intro:
      "James's most requested potluck dish: cherry tomatoes roasted with garlic and olive oil until jammy, topped with a whole burrata, fresh basil and a quick homemade balsamic glaze.",
    groups: [
      {
        items: [
          { q: 4, u: "cup", i: "cherry tomatoes" },
          { q: 2, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
          { q: 1, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, i: ["burrata", "burratas"] },
          { t: "a handful", i: "basil", n: "sliced" },
          { t: "as desired", i: "salt and pepper" },
          { t: "for serving", i: "toasted bread or crackers" },
        ],
      },
      {
        name: "Balsamic glaze",
        items: [
          { q: 0.5, u: "cup", i: "balsamic vinegar" },
          { q: 2, u: "tbsp", i: "brown sugar" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 400°F. Put the cherry tomatoes in a baking dish with the olive oil, garlic, salt and pepper and toss.",
      "Roast for 12–15 minutes, until the tomatoes blister and start to burst.",
      "Meanwhile, simmer the balsamic vinegar and brown sugar in a small pan until it reduces to a syrupy glaze.",
      "Spoon the tomatoes onto a serving dish and set the burrata in the middle.",
      "Scatter over the basil, drizzle with the balsamic glaze and serve with toasted bread or crackers.",
    ],
  },

  {
    slug: "korean-braised-tofu",
    title: "Korean Braised Tofu (Dubu Jorim)",
    posted: "2026-01-05",
    reel: "DTJLEu_kQ6n",
    photo: "korean-braised-tofu.jpg",
    alt: "A plate of Korean braised tofu in a spicy soy glaze with green onion",
    tags: ["Tofu", "Korean", "High protein"],
    intro:
      "Slices of firm tofu pan-fried until golden, then braised in a spicy, garlicky soy and gochugaru sauce until sticky.",
    groups: [
      {
        items: [
          { q: 1, u: "block", i: "firm tofu" },
          { t: "for the pan", i: "olive oil" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 3, u: "tbsp", i: "soy sauce" },
          { q: 4, u: "tbsp", i: "water" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 1, u: "tbsp", i: "honey" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "stalk", i: "green onion", n: "chopped" },
          { q: 1, u: "tsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Cut the tofu into thick squares and pat them dry with paper towels.",
      "Mix the sauce: soy sauce, water, garlic, gochugaru, honey, sesame oil, green onion and sesame seeds.",
      "Heat a little oil in a nonstick pan over medium-high heat and fry the tofu until golden on both sides.",
      "Pour the sauce over the tofu and let it simmer, spooning the sauce over the top, until most of it has reduced into a sticky glaze.",
    ],
  },

  {
    slug: "five-ingredient-healthy-brownies",
    title: "5-Ingredient Healthy Brownies",
    posted: "2026-01-04",
    reel: "DTGe7SiEdDe",
    photo: "five-ingredient-healthy-brownies.jpg",
    alt: "A glass dish of fudgy banana brownies topped with walnuts",
    time: "35 min",
    tags: ["Sweet", "Baking"],
    intro:
      "The easiest brownies: banana, egg, peanut butter, honey and cocoa mixed in one dish and baked. No refined sugar and no flour.",
    groups: [
      {
        items: [
          { q: 2, i: ["banana", "bananas"] },
          { q: 1, i: ["egg", "eggs"] },
          { q: 0.5, u: "cup", i: "peanut butter" },
          { q: 3, u: "tbsp", i: "honey or maple syrup" },
          { q: 0.25, u: "cup", i: "cocoa powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "as desired", i: "walnuts" },
          { t: "a pinch", i: "salt", b: "Osmo" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a small baking dish with parchment paper.",
      "Mash the bananas in a bowl until smooth.",
      "Mix in the egg, peanut butter and honey, then stir in the cocoa powder.",
      "Spread the batter in the dish and scatter walnuts and a pinch of salt on top.",
      "Bake for 30 minutes and let it cool before cutting.",
    ],
  },

  {
    slug: "hosting-burrata-salad",
    title: "Hosting Burrata Salad",
    posted: "2026-01-02",
    reel: "DTBV1CyCez7",
    photo: "hosting-burrata-salad.jpg",
    alt: "A large platter of salad with roasted red pepper, strawberries and burrata",
    tags: ["Salad", "Side"],
    intro:
      "James's rule for a crowd-pleasing salad: three fruits, three vegetables and a base. Spring mix with roasted sweet potato, red pepper and burrata, finished with a honey balsamic dressing.",
    groups: [
      {
        items: [
          { t: "as needed", i: "spring mix" },
          { t: "as needed", i: "red pepper", n: "sliced, roasted if you like" },
          { t: "as needed", i: "sweet potato", n: "cubed and air-fried" },
          { t: "as needed", i: "cucumber", n: "sliced" },
          { t: "as needed", i: "cherry tomatoes", n: "halved" },
          { t: "as needed", i: "apple", n: "diced" },
          { t: "as needed", i: "strawberries", n: "sliced" },
          { t: "as needed", i: "grapes", n: "halved" },
          { t: "1 or more", i: "burrata" },
          { t: "optional", i: "candied nuts or seeds" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, u: "cup", i: "olive oil" },
          { q: 0.25, u: "cup", i: "balsamic vinegar" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tbsp", i: "honey" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Cube the sweet potato, toss it with a little oil and salt and air fry until golden. Roast or slice the red pepper.",
      "Slice the cucumber, halve the tomatoes and grapes, dice the apple and slice the strawberries.",
      "Spread the spring mix on a large platter and arrange everything on top, with the burrata in the middle.",
      "Shake the dressing ingredients together in a jar and pour it over just before serving. Add candied nuts or seeds if you like.",
    ],
  },

  {
    slug: "blueberry-banana-bread",
    title: "Blueberry Banana Bread",
    posted: "2025-12-26",
    reel: "DSvluo2EfWR",
    photo: "blueberry-banana-bread.jpg",
    alt: "James holding a slice of blueberry banana bread over the loaf",
    time: "1 hr 10 min",
    tags: ["Sweet", "Baking", "High protein"],
    intro:
      "A moist, high-protein banana bread made with almond flour and Greek yogurt and studded with wild blueberries. No oil or refined sugar.",
    groups: [
      {
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"] },
          { q: 3, u: "tbsp", i: "maple syrup" },
          { q: 0.5, u: "cup", i: "Greek yogurt" },
          { q: 2, u: "cup", i: "almond flour" },
          { q: 1, u: "tsp", i: "baking powder" },
          { q: 0.5, u: "cup", i: "frozen wild blueberries" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "cinnamon", b: "The Spice House" },
          { t: "a pinch", i: "salt" },
          { t: "as desired", i: "nuts or seeds", b: "Top Seedz" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a bowl, then mix in the eggs, maple syrup and Greek yogurt.",
      "In another bowl, mix the almond flour, baking powder, cinnamon and salt, then stir it into the wet mixture.",
      "Fold in the frozen blueberries and pour the batter into the pan. Top with nuts or seeds.",
      "Bake for 50 minutes, then let it rest for 20 minutes before slicing.",
    ],
  },

  {
    slug: "korean-gochujang-broccoli",
    title: "Korean Gochujang Broccoli",
    posted: "2025-12-22",
    reel: "DSlR0SzEWnQ",
    photo: "korean-gochujang-broccoli.jpg",
    alt: "A plate of crispy air-fried broccoli in a sweet and spicy gochujang glaze",
    tags: ["Side", "Korean", "Air fryer"],
    intro:
      "A whole head of broccoli air-fried until crispy at the edges, then tossed in a quick sweet and spicy gochujang sauce.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "broccoli", n: "cut into florets" },
          { q: 1, u: "tbsp", i: "olive oil", b: "Terra Delyssa" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "gochujang" },
          { q: 1, u: "tsp", i: "soy sauce", b: "Momofuku" },
          { q: 0.5, u: "tsp", i: "honey" },
          { q: 0.5, u: "tbsp", i: "sesame oil" },
        ],
      },
    ],
    steps: [
      "Cut the broccoli into florets, wash and dry well.",
      "Toss with the olive oil and spread out in the air fryer.",
      "Air fry until tender and crispy at the edges.",
      "Meanwhile, stir the gochujang, soy sauce, honey and sesame oil together in a large bowl.",
      "Add the hot broccoli to the bowl and toss until coated.",
    ],
  },

  {
    slug: "ssamjang-cucumber",
    title: "Ssamjang Cucumber Salad",
    posted: "2025-12-19",
    reel: "DSc8Pn4CXwk",
    photo: "ssamjang-cucumber.jpg",
    alt: "A plate of cucumber rounds coated in a spicy ssamjang sauce",
    tags: ["Side", "Korean", "Spicy"],
    intro:
      "Cucumber rounds tossed in a homemade ssamjang (doenjang and gochujang) with onion, garlic and sesame oil. Savory, sweet, spicy and garlicky.",
    groups: [
      {
        items: [
          { q: 6, i: ["mini cucumber", "mini cucumbers"], n: "sliced into rounds" },
          { t: "optional", i: "salt", n: "for salting and rinsing" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "gochujang" },
          { q: 2, u: "tbsp", i: "doenjang" },
          { q: 2, q2: 3, u: "tbsp", i: "red onion", n: "finely chopped" },
          { q: 1, q2: 2, u: "clove", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "honey" },
          { q: 1, u: "tsp", i: "toasted sesame oil" },
          { t: "optional", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Slice the cucumbers into rounds. If you like, toss them with a little salt, leave them for 30 minutes and rinse.",
      "In a bowl, mix the gochujang, doenjang, onion, garlic, honey and sesame oil into a thick sauce.",
      "Drain the cucumbers well and add them to the sauce.",
      "Toss until coated and top with sesame seeds.",
    ],
  },

  {
    slug: "no-mayo-chicken-salad",
    title: "10-Minute No-Mayo Chicken Salad",
    posted: "2025-12-17",
    reel: "DSYUvS_EUVp",
    photo: "no-mayo-chicken-salad.jpg",
    alt: "James holding a container of creamy chicken salad with apple and pickles",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "A crunchy chicken salad with red onion, celery, carrot, apple and pickles in a lemony Greek yogurt dressing. High in protein and fiber, low in calories.",
    groups: [
      {
        items: [
          { q: 2.5, u: "cup", i: "cooked chicken breast", n: "diced" },
          { q: 0.25, u: "cup", i: "red onion", n: "diced" },
          { q: 0.75, u: "cup", i: "celery", n: "diced" },
          { q: 0.5, u: "cup", i: "carrot", n: "diced" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 0.5, u: "cup", i: "dill pickles", n: "chopped" },
          { q: 5, i: "thin jalapeño slices", n: "optional" },
          { q: 1, u: "tbsp", i: "dill", n: "chopped, optional" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.75, u: "cup", i: "Greek yogurt" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced" },
          { t: "as desired", i: "salt and pepper" },
          { q: 1, u: "tsp", i: "honey", n: "optional, if you like it sweet" },
          { t: "for serving", i: "crackers", b: "Top Seedz" },
        ],
      },
    ],
    steps: [
      "Dice the chicken and put it in a large container.",
      "Dice the red onion, celery, carrot and apple, and chop the pickles, jalapeño and dill. Add them to the chicken.",
      "Add the Greek yogurt, Dijon, garlic, lemon juice, salt, pepper and honey.",
      "Mix well and eat with crackers.",
    ],
  },

  {
    slug: "ummas-bibimbap",
    title: "Umma's Bibimbap",
    posted: "2025-12-08",
    reel: "DSBGqLcEWTs",
    photo: "ummas-bibimbap.jpg",
    alt: "Bowls of bibimbap toppings: rice, fried eggs, zucchini, radish, sprouts, mushrooms and gochujang",
    serves: "4",
    tags: ["Korean", "Rice"],
    intro:
      "James's mom's comfort-food bibimbap, made with him for four: sautéed vegetables, spicy seasoned radish and bean sprouts over rice with a fried egg and gochujang.",
    groups: [
      {
        name: "Vegetables",
        items: [
          { q: 1, i: ["large white onion", "large white onions"], n: "sliced" },
          { q: 2, i: ["medium carrot", "medium carrots"], n: "julienned" },
          { q: 2, u: "cup", i: "mushrooms", n: "sliced" },
          { q: 2, i: ["zucchini", "zucchini"], n: "sliced" },
          { q: 0.25, u: "tsp", i: "salt", n: "for the zucchini" },
        ],
      },
      {
        name: "Spicy radish",
        items: [
          { q: 1, i: ["Korean radish", "Korean radishes"], n: "julienned" },
          { q: 0.5, u: "tbsp", i: "salt" },
          { q: 2, u: "tbsp", i: "sugar" },
          { q: 1, u: "tbsp", i: "garlic", n: "minced" },
          { q: 3, u: "tbsp", i: "gochugaru" },
        ],
      },
      {
        name: "Bean sprouts",
        items: [
          { t: "1 bag", i: "soybean sprouts" },
          { q: 1, u: "tsp", i: "salt" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "fish sauce" },
          { q: 1, u: "tbsp", i: "sesame oil" },
        ],
      },
      {
        name: "To serve",
        items: [
          { q: 4, i: ["egg", "eggs"] },
          { t: "4 bowls", i: "cooked rice" },
          { t: "to taste", i: "gochujang sauce" },
          { t: "a drizzle", i: "sesame oil" },
          { t: "a sprinkle", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Toss the julienned radish with the salt, sugar, garlic and gochugaru and mix it with your hands (wear gloves). Set aside.",
      "Blanch the bean sprouts in boiling water until just tender, drain, and season with the salt, garlic, fish sauce and sesame oil.",
      "Sauté the onion, carrots and mushrooms separately in a little oil until soft. Sauté the zucchini with the ¼ tsp salt.",
      "Fry the eggs sunny side up.",
      "Fill bowls with rice, arrange the vegetables, radish and sprouts on top, and finish with a fried egg, a spoonful of gochujang sauce, a drizzle of sesame oil and sesame seeds. Mix everything together before eating.",
    ],
  },

  {
    slug: "sticky-date-oat-banana-bread",
    title: "5-Ingredient Sticky Banana Bread",
    posted: "2025-12-07",
    reel: "DR-iN9lkbEA",
    photo: "sticky-date-oat-banana-bread.jpg",
    alt: "Sliced sticky banana bread with dates and seeds on parchment paper",
    time: "45 min",
    tags: ["Sweet", "Baking"],
    intro:
      "Five ingredients: bananas, eggs, blended oats, baking powder and plenty of chopped dates for sticky, caramel-like pockets. Gluten free with no refined sugar.",
    groups: [
      {
        items: [
          { q: 3, i: ["banana", "bananas"] },
          { q: 2, i: ["egg", "eggs"] },
          { q: 1.5, u: "cup", i: "oats", n: "blended into flour", b: "Quaker" },
          { q: 1, u: "tsp", i: "baking powder", b: "E.D. Smith" },
          { q: 8, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "as desired", i: "cinnamon" },
          { t: "as desired", i: "nuts or seeds" },
          { t: "a pinch", i: "salt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a bowl and whisk in the eggs.",
      "Blend the oats into a flour and add them with the baking powder, plus cinnamon and salt if you're using them.",
      "Chop the dates and fold them in.",
      "Pour into the pan, top with nuts or seeds, and bake for 35–40 minutes.",
    ],
  },

  {
    slug: "spicy-crunchy-egg-salad",
    title: "Crunchy Spicy Egg Salad",
    posted: "2025-11-24",
    reel: "DRdGw4ZkaIL",
    photo: "spicy-crunchy-egg-salad.jpg",
    alt: "A white bowl of crunchy egg salad with chili crisp and almonds",
    tags: ["High protein", "Quick", "No cook"],
    intro:
      "Four boiled eggs with crunchy Persian cucumber, celery and onion in a Greek yogurt sauce with a spoonful of chili crisp, topped with almonds. Over 30 grams of protein.",
    groups: [
      {
        items: [
          { q: 4, i: ["boiled egg", "boiled eggs"], n: "peeled" },
          { q: 2, i: ["Persian cucumber", "Persian cucumbers"], n: "diced" },
          { q: 1, u: "stalk", i: "celery", n: "diced" },
          { q: 3, u: "tbsp", i: "onion", n: "minced" },
          { q: 1 / 3, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tbsp", i: "chili crisp" },
          { q: 0.25, u: "cup", i: "almonds", n: "chopped" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Peel the eggs and roughly chop them into a container.",
      "Dice the cucumbers and celery and mince the onion, and add them to the eggs.",
      "Add the Greek yogurt, Dijon, chili crisp, salt and pepper and mix well.",
      "Top with chopped almonds.",
    ],
  },

  {
    slug: "tuna-apple-salad",
    title: "Easy Tuna Apple Salad",
    posted: "2025-11-13",
    reel: "DRAxq2FkT_h",
    photo: "tuna-apple-salad.jpg",
    alt: "James holding a bowl of tuna apple salad topped with walnuts and green onion",
    time: "10 min",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Tuna, crisp apple, celery and onion with toasted walnuts in a simple Greek yogurt and Dijon dressing. Over 40 grams of protein with plenty of crunch.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 1, u: "stalk", i: "celery", n: "diced" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 2, q2: 3, u: "tbsp", i: "onion", n: "minced" },
          { q: 0.25, u: "cup", i: "walnuts", n: "chopped" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.25, u: "cup", i: "Greek yogurt", b: "Chobani" },
          { q: 1, u: "tsp", i: "olive oil" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Drain the tuna and flake it into a container.",
      "Dice the celery, peel and dice the apple and mince the onion. Add them to the tuna with the walnuts.",
      "Add the Greek yogurt, olive oil, Dijon, salt and pepper.",
      "Mix everything together and serve with crackers or on toast.",
    ],
  },

  {
    slug: "green-goddess-egg-salad",
    title: "Green Goddess Egg Salad",
    posted: "2025-11-03",
    reel: "DQnC0YVEUmT",
    photo: "green-goddess-egg-salad.jpg",
    alt: "A slice of toast piled with green goddess egg salad",
    time: "10 min",
    tags: ["High protein", "Quick", "No cook"],
    intro:
      "Egg yolks mashed with avocado and Greek yogurt into a creamy green dressing, then folded with chopped whites, celery, green onion and jalapeño. Great on toast.",
    groups: [
      {
        items: [
          { q: 3, i: ["boiled egg", "boiled eggs"], n: "peeled, yolks and whites separated" },
          { q: 0.5, i: ["avocado", "avocados"] },
          { q: 2, u: "tbsp", i: "Greek yogurt" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.25, u: "tsp", i: "garlic powder" },
          { q: 0.25, u: "tsp", i: "salt" },
          { q: 0.25, u: "tsp", i: "pepper" },
          { q: 1, u: "stalk", i: "celery", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, u: "tbsp", i: "jalapeño", n: "minced" },
          { t: "for serving", i: "toast" },
        ],
      },
    ],
    steps: [
      "Peel the eggs and separate the yolks from the whites.",
      "Mash the yolks with the avocado, Greek yogurt, Dijon, garlic powder, salt and pepper until smooth and creamy.",
      "Chop the whites and dice the celery, green onion and jalapeño.",
      "Fold everything together and pile it onto toast.",
    ],
  },

  {
    slug: "high-protein-broccoli-salad",
    title: "High-Protein Broccoli Salad",
    posted: "2025-10-20",
    reel: "DQDHflYko8h",
    photo: "high-protein-broccoli-salad.jpg",
    alt: "A glass container of creamy broccoli salad with apple, dates and walnuts",
    tags: ["Salad", "Side", "High protein"],
    intro:
      "A no-mayo broccoli salad: raw florets with apple, dates and walnuts in a blended cottage cheese, Greek yogurt and honey dressing.",
    groups: [
      {
        items: [
          { q: 3, u: "cup", i: "broccoli florets", n: "chopped small" },
          { q: 2, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped" },
          { q: 1 / 3, u: "cup", i: "walnuts", n: "chopped" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1 / 3, u: "cup", i: "Greek yogurt" },
          { q: 0.5, u: "cup", i: "cottage cheese" },
          { q: 1, u: "tbsp", i: "honey" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Cut the broccoli into small florets and put them in a large container with the green onion.",
      "Peel and dice the apple, chop the dates and walnuts, and add them to the broccoli.",
      "Blend the Greek yogurt, cottage cheese, honey, salt and pepper until smooth.",
      "Pour the sauce over the salad and mix well.",
    ],
  },

  {
    slug: "iced-french-toast-latte",
    title: "Iced French Toast Latte",
    posted: "2025-10-17",
    reel: "DP6mjiNkenl",
    photo: "iced-french-toast-latte.jpg",
    alt: "James holding an iced cinnamon latte topped with cold foam",
    serves: "1",
    time: "5 min",
    tags: ["Drink", "Quick"],
    intro:
      "A cozy iced latte that tastes like French toast: espresso brewed over maple syrup and cinnamon, poured over ice and topped with vanilla-cinnamon frothed milk.",
    groups: [
      {
        items: [
          { q: 1, i: ["coffee capsule", "coffee capsules"], b: "Nespresso, Samra Origins Togetherness Blend" },
          { q: 1, u: "tbsp", i: "maple syrup" },
          { q: 0.5, u: "tsp", i: "cinnamon", n: "divided" },
          { t: "as desired", i: "ice" },
          { q: 0.75, u: "cup", i: "milk of choice" },
          { q: 0.5, u: "tsp", i: "vanilla extract" },
        ],
      },
    ],
    steps: [
      "Put the maple syrup and half the cinnamon in a glass.",
      "Brew the coffee straight over it and stir.",
      "Froth the milk with the vanilla and the rest of the cinnamon.",
      "Add ice to the glass and pour the frothed milk over the top.",
    ],
  },

  {
    slug: "butternut-squash-mac-and-cheese",
    title: "High-Protein Butternut Squash Mac and Cheese",
    posted: "2025-10-12",
    reel: "DPt8Pqokcgr",
    photo: "butternut-squash-mac-and-cheese.jpg",
    alt: "James holding a plate of creamy butternut squash mac and cheese",
    tags: ["Pasta", "High protein", "Baking"],
    intro:
      "A creamy Thanksgiving-ready mac and cheese with a sauce of roasted butternut squash, onion and garlic blended with cottage cheese, milk and nutritional yeast, then baked with a cheesy top.",
    groups: [
      {
        items: [
          { q: 1, i: ["medium butternut squash", "medium butternut squashes"], n: "peeled and cubed" },
          { q: 1, i: ["medium white onion", "medium white onions"], n: "peeled" },
          { q: 5, u: "clove", i: "garlic" },
          { q: 1, u: "tbsp", i: "olive oil" },
          { q: 1.5, u: "cup", i: "cottage cheese" },
          { q: 0.75, u: "cup", i: "skim milk" },
          { q: 0.5, u: "cup", i: "nutritional yeast" },
          { q: 1, u: "cup", i: "reduced-fat shredded cheese", n: "plus 1 cup for the top" },
          { t: "to taste", i: "salt and pepper" },
          { q: 16, u: "oz", i: "high-protein pasta" },
          { q: 0.5, u: "cup", i: "pasta water" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 400°F. Put the squash and onion in a roasting pan, wrap the garlic in foil with a drizzle of olive oil and add it to the pan. Roast until the squash is soft and golden.",
      "Add the cottage cheese, milk, nutritional yeast, 1 cup of the shredded cheese, salt and pepper to the pan and blend everything with an immersion blender until smooth.",
      "Cook the pasta, saving ½ cup of the water. Add the pasta and pasta water to the sauce and stir.",
      "Top with the remaining cup of cheese and bake until bubbly and golden.",
    ],
  },

  {
    slug: "high-protein-butternut-squash-soup",
    title: "High-Protein Butternut Squash Soup",
    posted: "2025-10-08",
    reel: "DPj9Mi-EY8x",
    photo: "high-protein-butternut-squash-soup.jpg",
    alt: "James holding a spoonful of creamy butternut squash soup over the bowl",
    tags: ["Soup", "High protein"],
    intro:
      "Roasted butternut squash, carrots, red onion and garlic blended with milk and cottage cheese into a velvety fall soup with over 25 grams of protein per serving.",
    groups: [
      {
        items: [
          { q: 1, i: ["medium butternut squash", "medium butternut squashes"], n: "halved and seeded" },
          { q: 2, i: ["carrot", "carrots"], n: "peeled" },
          { q: 1, i: ["small bulb of garlic", "small bulbs of garlic"], n: "wrapped in foil" },
          { q: 1, i: ["small red onion", "small red onions"], n: "halved" },
          { q: 0.5, u: "cup", i: "milk" },
          { q: 1, u: "cup", i: "cottage cheese" },
          { q: 2, u: "cup", i: "vegetable broth" },
          { t: "to taste", i: "olive oil, salt and pepper" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 400°F. Put the squash, carrots, onion and foil-wrapped garlic on a tray, drizzle with olive oil and season with salt and pepper.",
      "Roast until everything is soft and caramelized, about 45 minutes.",
      "Scoop the squash out of its skin into a pot and add the carrots, onion and squeezed-out garlic.",
      "Add the broth, milk and cottage cheese and blend with an immersion blender until smooth.",
      "Warm through and season to taste.",
    ],
  },

  {
    slug: "sticky-spicy-peanut-tofu",
    title: "Sticky Spicy Peanut Tofu",
    posted: "2025-10-06",
    reel: "DPe75hpkQjA",
    photo: "sticky-spicy-peanut-tofu.jpg",
    alt: "A pan of crispy tofu tossed in sticky spicy peanut sauce",
    tags: ["Tofu", "Air fryer", "Spicy"],
    intro:
      "Cubes of extra-firm tofu air-fried until crisp, then tossed in a no-cook peanut, gochujang and honey sauce. Vegan if you swap the honey for maple syrup.",
    groups: [
      {
        items: [
          { q: 1, u: "block", i: "extra-firm tofu", n: "pressed and cubed" },
          { q: 2, u: "tbsp", i: "olive oil" },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 1, u: "tsp", i: "garlic powder" },
          { t: "as desired", i: "pepper" },
          { q: 1, u: "tbsp", i: "cornstarch" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1 / 3, u: "cup", i: "peanut butter" },
          { q: 1, u: "tbsp", i: "soy sauce" },
          { q: 1, u: "tbsp", i: "gochujang", n: "or any hot sauce" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
          { q: 1, u: "tbsp", i: "garlic", n: "minced" },
          { q: 2, u: "tbsp", i: "water", n: "or more to loosen" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { t: "optional", i: "jalapeños and sesame seeds" },
        ],
      },
    ],
    steps: [
      "Press the tofu in a towel to soak up the water, then cut it into cubes.",
      "Toss the cubes with the olive oil, soy sauce, garlic powder, pepper and cornstarch.",
      "Air fry at 350°F for 12 minutes, until crispy.",
      "Stir all the sauce ingredients together. Don't cook the sauce or it will thicken too quickly; add more water if it gets too thick.",
      "Toss the hot tofu in the sauce and top with jalapeños and sesame seeds.",
    ],
  },

  {
    slug: "roasted-cauliflower-dates",
    title: "Roasted Cauliflower with Dates",
    posted: "2025-10-02",
    reel: "DPUj4AvEZhu",
    photo: "roasted-cauliflower-dates.jpg",
    alt: "James holding a plate of roasted cauliflower with dates",
    tags: ["Side", "Baking"],
    intro:
      "Four main ingredients: cauliflower roasted with olive oil and spices until golden, tossed with sweet chopped dates and a lemon zest dressing.",
    groups: [
      {
        items: [
          { q: 1, i: ["cauliflower", "cauliflowers"], n: "cut into florets" },
          { q: 3, u: "tbsp", i: "olive oil", n: "for the cauliflower" },
          { t: "to season", i: "garlic powder, salt, pepper and chili flakes" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped" },
          { t: "optional", i: "sunflower seeds" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 1, u: "tbsp", i: "olive oil" },
          { q: 1, i: ["medium lemon", "medium lemons"], n: "zested and juiced" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 425°F. Cut the cauliflower into florets and toss with 3 tbsp olive oil, garlic powder, salt, pepper and chili flakes.",
      "Spread on a lined tray and roast until golden and tender, about 25–30 minutes.",
      "Whisk the dressing: olive oil, lemon zest and juice, garlic, salt and pepper.",
      "Toss the roasted cauliflower with the dates and dressing, and top with sunflower seeds.",
    ],
  },

  {
    slug: "kimchi-seafood-pancake",
    title: "Umma's Kimchi Seafood Pancake",
    posted: "2025-09-30",
    reel: "DPPaYdVkXfn",
    photo: "kimchi-seafood-pancake.jpg",
    alt: "A crispy golden kimchi seafood pancake in a pan",
    tags: ["Korean", "Seafood"],
    intro:
      "James's mom's kimchi pancake: a simple pancake batter loaded with kimchi, seafood, potato and green onion, fried until crispy at the edges.",
    groups: [
      {
        items: [
          { q: 0.5, u: "cup", i: "buchimgaru (Korean pancake mix) or all-purpose flour" },
          { q: 200, u: "ml", i: "water" },
          { q: 1, u: "cup", i: "kimchi", n: "chopped" },
          { q: 1, u: "cup", i: "seafood", n: "chopped" },
          { q: 1, i: ["potato", "potatoes"], n: "diced small" },
          { q: 1, u: "tbsp", i: "kimchi juice" },
          { q: 5, u: "stalk", i: "green onions", n: "cut into pieces" },
          { t: "for frying", i: "cooking oil" },
        ],
      },
    ],
    steps: [
      "Mix the pancake mix and water in a bowl to a smooth batter.",
      "Add the kimchi, kimchi juice, seafood, potato and green onions and stir to combine.",
      "Heat a generous layer of oil in a large nonstick pan over medium-high heat and spread the batter into a thin, even pancake.",
      "Fry about 2 minutes on each side, until the edges are golden and crispy.",
      "Slide onto a plate, cut into pieces and serve with a soy dipping sauce.",
    ],
  },

  {
    slug: "korean-spicy-tuna-salad",
    title: "5-Ingredient Korean Spicy Tuna Salad",
    posted: "2025-09-24",
    reel: "DO_-HU0kc_P",
    photo: "korean-spicy-tuna-salad.jpg",
    alt: "A glass bowl of spicy tuna salad topped with crumbled seaweed",
    time: "5 min",
    tags: ["Seafood", "High protein", "Spicy"],
    intro:
      "Tuna mixed with green onion, gochujang, Greek yogurt and sesame oil, topped with crumbled seaweed. High protein, no mayo, and ready in five minutes.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 2, i: ["green onion", "green onions"], n: "chopped" },
          { q: 1, u: "tbsp", i: "gochujang", n: "or sriracha" },
          { q: 0.25, u: "cup", i: "Greek yogurt" },
          { q: 2, u: "tsp", i: "sesame oil" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 1, u: "tsp", i: "honey" },
          { t: "as desired", i: "dried seaweed", n: "crumbled" },
          { t: "as desired", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Put the tuna in a bowl and break it up.",
      "Add the green onion, gochujang, Greek yogurt and sesame oil, plus honey if you like it a little sweet.",
      "Mix well and top with crumbled seaweed and sesame seeds.",
      "Serve with crackers or rice.",
    ],
  },

  {
    slug: "boursin-avocado-dip",
    title: "Boursin Avocado Dip",
    posted: "2025-09-22",
    reel: "DO60OTlkUv5",
    photo: "boursin-avocado-dip.jpg",
    alt: "A glass dish of layered Boursin dip with avocado, tomatoes, bacon, dates and walnuts",
    time: "15 min",
    tags: ["Snack", "No cook"],
    intro:
      "A six-ingredient party dip: soft Boursin spread on a platter, topped with smashed avocado and cherry tomatoes, then bacon bits, chopped dates and walnuts.",
    groups: [
      {
        items: [
          { q: 2, u: "package", i: "Boursin cheese", b: "Boursin" },
          { q: 2, i: ["avocado", "avocados"] },
          { q: 1, q2: 2, u: "cup", i: "cherry tomatoes", n: "quartered" },
          { q: 0.5, u: "cup", i: "bacon bits" },
          { q: 0.5, u: "cup", i: "dates", n: "pitted and chopped" },
          { q: 0.5, u: "cup", i: "walnuts", n: "chopped" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a squeeze", i: "lime juice" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Break up the Boursin and spread it over the bottom of a serving dish.",
      "Mash the avocados with a little lime juice, salt and pepper and spread it over the cheese.",
      "Quarter the cherry tomatoes and scatter them on top.",
      "Finish with the bacon bits, chopped dates and walnuts. Serve with crackers or chips.",
    ],
  },

  {
    slug: "ummas-fresh-kimchi",
    title: "Umma's 30-Minute Fresh Kimchi (Geotjeori)",
    posted: "2025-09-16",
    reel: "DOrW_r2EX27",
    photo: "ummas-fresh-kimchi.jpg",
    alt: "James and his mom with a plate of fresh napa cabbage kimchi",
    tags: ["Side", "Korean", "Spicy"],
    intro:
      "James's most requested recipe: his mom's geotjeori, a fresh, unfermented kimchi. Crisp, savory, sweet and spicy, and best eaten within a day or two.",
    groups: [
      {
        items: [
          { q: 1, i: ["medium napa cabbage", "medium napa cabbages"], n: "leaves separated and torn" },
          { q: 6, i: ["green onion", "green onions"], n: "cut into pieces" },
          { q: 0.25, u: "cup", i: "salt", n: "with ½ cup water, for salting" },
        ],
      },
      {
        name: "Seasoning",
        items: [
          { q: 6, u: "tbsp", i: "gochugaru" },
          { q: 1, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "salted shrimp paste" },
          { q: 3, u: "tbsp", i: "fish sauce" },
          { q: 2, u: "tbsp", i: "plum extract", n: "or 1 tbsp sugar" },
          { q: 1, u: "tbsp", i: "sugar" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 2, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Separate the cabbage leaves, wash them and cut or tear them into strips.",
      "Dissolve the salt in the water, pour it over the cabbage and toss. Leave it for about 20 minutes, turning once, until the leaves soften.",
      "Meanwhile, mix the gochugaru, garlic, shrimp paste, fish sauce, plum extract and sugar into a paste.",
      "Rinse the cabbage well and drain it, squeezing out the water.",
      "Wearing gloves, toss the cabbage and green onions with the seasoning until every leaf is coated. Finish with the sesame oil and sesame seeds.",
    ],
  },

  {
    slug: "sesame-miso-tuna-salad",
    title: "Sesame Miso Tuna Salad",
    posted: "2025-09-12",
    reel: "DOg_hgdkQTd",
    photo: "sesame-miso-tuna-salad.jpg",
    alt: "James holding a glass bowl of sesame miso tuna salad with carrots and cucumber",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Tuna with crunchy cucumber, celery and carrot in a miso, lime and sesame dressing, sprinkled with furikake. High in protein and fiber and full of flavor.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 2, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 0.5, u: "cup", i: "celery", n: "diced" },
          { q: 0.5, u: "cup", i: "carrots", n: "shredded" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 1, u: "tbsp", i: "miso paste" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
          { q: 0.5, u: "tbsp", i: "honey" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "lime juice" },
          { q: 0.5, u: "tbsp", i: "sesame oil" },
          { t: "optional", i: "chili flakes" },
          { t: "as desired", i: "sesame seeds" },
          { t: "as desired", i: "furikake or dried seaweed" },
        ],
      },
    ],
    steps: [
      "Drain the tuna and put it in a bowl.",
      "Dice the cucumber and celery, shred the carrot and chop the green onion, and pile them on top.",
      "In a small bowl, whisk the miso, rice vinegar, honey, garlic, lime juice, sesame oil and chili flakes.",
      "Pour the sauce over the salad, mix well, and finish with sesame seeds and furikake. Eat it on crackers.",
    ],
  },

  {
    slug: "sriracha-egg-salad",
    title: "Healthy Spicy Egg Salad",
    posted: "2025-09-10",
    reel: "DOb8QuwiVKU",
    photo: "sriracha-egg-salad.jpg",
    alt: "James holding a glass bowl of spicy egg salad with diced vegetables",
    tags: ["High protein", "Quick", "No cook"],
    intro:
      "Boiled eggs and crunchy diced vegetables in a sriracha and Greek yogurt sauce made creamy with the yolks. High in protein and fiber, low in calories, no mayo.",
    groups: [
      {
        items: [
          { q: 4, i: ["boiled egg", "boiled eggs"], n: "peeled, yolks and whites separated" },
          { q: 0.75, u: "cup", i: "diced vegetables", n: "celery, carrot, green onion and cucumber" },
          { q: 1, q2: 2, i: ["slice of jalapeño", "slices of jalapeño"], n: "minced" },
          { q: 1 / 3, u: "cup", i: "Greek yogurt" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tbsp", i: "sriracha", b: "Tabasco" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Peel the eggs and separate the yolks from the whites. Chop the whites.",
      "Dice the celery, carrot, green onion, cucumber and jalapeño.",
      "Mash the yolks with the Greek yogurt, Dijon, sriracha, salt and pepper until smooth.",
      "Fold in the egg whites and vegetables, and eat it on toast or crackers.",
    ],
  },

  {
    slug: "ground-beef-bulgogi",
    title: "10-Minute Ground Beef Bulgogi",
    posted: "2025-09-03",
    reel: "DOJ76G1kYqp",
    photo: "ground-beef-bulgogi.jpg",
    alt: "James holding a plate of ground beef bulgogi topped with green onion",
    time: "10 min",
    tags: ["Korean", "High protein", "Quick"],
    intro:
      "All the flavor of bulgogi in ten minutes: ground beef browned with onion in a sweet soy, honey and garlic sauce. Wrap it in lettuce or eat it over rice.",
    groups: [
      {
        items: [
          { q: 1, u: "lb", i: "ground beef" },
          { q: 0.5, i: ["large onion", "large onions"], n: "diced" },
          { q: 2, i: ["green onion", "green onions"], n: "sliced" },
          { t: "for serving", i: "lettuce leaves or rice" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 4, u: "tbsp", i: "soy sauce" },
          { q: 2, u: "tbsp", i: "honey" },
          { q: 0.5, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Dice the onion and slice the green onion.",
      "Mix the soy sauce, honey, garlic, sesame oil and sesame seeds in a bowl.",
      "Cook the onion in a large pan over medium-high heat until soft, then add the ground beef and break it up as it browns.",
      "Pour in the sauce and stir until the beef is coated and the sauce has mostly cooked off.",
      "Top with green onion and eat it wrapped in lettuce or over rice.",
    ],
  },

  {
    slug: "banana-carrot-cake",
    title: "Healthy Banana Carrot Cake",
    posted: "2025-09-01",
    reel: "DOEzD2GERII",
    photo: "banana-carrot-cake.jpg",
    alt: "A loaf of banana carrot cake, sliced on parchment paper",
    time: "55 min",
    tags: ["Sweet", "Baking"],
    intro:
      "A cross between banana bread and carrot cake, made with oat flour and Greek yogurt and sweetened with banana, maple syrup and dates. No oil, gluten free.",
    groups: [
      {
        items: [
          { q: 2, i: ["banana", "bananas"], n: "mashed" },
          { q: 2, i: ["egg", "eggs"] },
          { q: 0.5, u: "cup", i: "Greek yogurt", b: "Kirkland Signature" },
          { q: 3, u: "tbsp", i: "maple syrup" },
          { q: 2, u: "cup", i: "oat flour", n: "or oats blended into flour" },
          { q: 2, u: "tsp", i: "baking powder" },
          { q: 1, u: "cup", i: "carrots", n: "shredded" },
        ],
      },
      {
        name: "Optional",
        items: [
          { q: 6, i: ["date", "dates"], n: "pitted and chopped" },
          { q: 0.75, u: "cup", i: "nuts", n: "chopped" },
          { q: 1, u: "tsp", i: "cinnamon" },
          { t: "a dash", i: "salt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas, then whisk in the eggs, Greek yogurt and maple syrup.",
      "Blend oats into a flour if needed and stir it in with the baking powder.",
      "Fold in the shredded carrots, plus the dates, nuts, cinnamon and salt if you're using them.",
      "Pour into the pan and bake for 45 minutes, until a toothpick comes out clean.",
    ],
  },

  {
    slug: "korean-spicy-pork-jeyuk",
    title: "Korean Spicy Pork (Jeyuk-Bokkeum)",
    posted: "2025-08-28",
    reel: "DN5rv7nkf4K",
    photo: "korean-spicy-pork-jeyuk.jpg",
    alt: "A plate of spicy Korean pork with onions, topped with green onion",
    tags: ["Korean", "Spicy", "High protein"],
    intro:
      "Thinly sliced pork belly marinated in a spicy-sweet gochujang sauce, then stir-fried with onion. James cooks it on the barbecue for a smoky flavor; a frying pan works too.",
    groups: [
      {
        items: [
          { q: 2, u: "lb", i: "thinly sliced pork belly" },
          { q: 0.5, i: ["onion", "onions"], n: "sliced" },
          { q: 3, i: ["green onion", "green onions"], n: "sliced" },
          { t: "for serving", i: "lettuce, rice" },
        ],
      },
      {
        name: "Marinade",
        items: [
          { q: 6, u: "tbsp", i: "gochujang" },
          { q: 1, u: "tbsp", i: "gochugaru" },
          { q: 3, u: "tbsp", i: "soy sauce" },
          { q: 2, u: "tbsp", i: "mirin" },
          { q: 3, u: "tbsp", i: "brown sugar" },
          { q: 2, u: "tbsp", i: "sesame oil" },
          { q: 2, u: "tbsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "ginger", n: "grated" },
        ],
      },
    ],
    steps: [
      "Mix the marinade ingredients in a bowl.",
      "Put the pork, onion and green onion in a large bowl, add the marinade and mix it in with your hands (wear gloves).",
      "Cover and marinate in the fridge for at least 30 minutes.",
      "Cook in a very hot pan or on a grill pan over the barbecue, stirring, until the pork is cooked through and slightly charred.",
      "Top with more green onion and serve with lettuce for wraps and rice.",
    ],
  },

  {
    slug: "banana-bread-protein-balls",
    title: "No-Bake Banana Bread Protein Balls",
    posted: "2025-08-26",
    reel: "DN1UR4J4iTP",
    photo: "banana-bread-protein-balls.jpg",
    alt: "A plate of banana bread protein balls with chocolate chips",
    time: "20 min",
    tags: ["Snack", "High protein", "Sweet"],
    intro:
      "A no-bake snack that tastes like banana bread: mashed banana, peanut butter, almond and oat flour and a scoop of protein powder, rolled into balls and chilled.",
    groups: [
      {
        items: [
          { q: 1, i: ["large banana", "large bananas"] },
          { q: 3, u: "tbsp", i: "peanut butter" },
          { q: 1, u: "cup", i: "almond flour" },
          { q: 2 / 3, u: "cup", i: "oat flour" },
          { q: 1, u: "scoop", i: "protein powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a pinch", i: "salt" },
          { t: "a dash", i: "cinnamon" },
          { t: "as desired", i: "chocolate chips" },
        ],
      },
    ],
    steps: [
      "Mash the banana in a bowl and stir in the peanut butter.",
      "Add the almond flour, oat flour and protein powder, plus salt and cinnamon if you like.",
      "Mix into a thick dough, then fold in chocolate chips.",
      "Roll into balls and refrigerate for 15 minutes to firm up.",
    ],
  },

  {
    slug: "sweet-potato-brownies",
    title: "Healthy Sweet Potato Brownies",
    posted: "2025-08-22",
    reel: "DNq_kznYkkr",
    photo: "sweet-potato-brownies.jpg",
    alt: "James holding a fudgy sweet potato brownie over the tray",
    time: "40 min",
    tags: ["Sweet", "Baking"],
    intro:
      "Fudgy, gluten-free and dairy-free brownies made with mashed sweet potato, cocoa and almond flour, sweetened with maple syrup.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "sweet potato", n: "cooked and mashed" },
          { q: 2, i: ["egg", "eggs"] },
          { q: 2, u: "tbsp", i: "peanut butter" },
          { q: 1 / 3, u: "cup", i: "cocoa powder" },
          { q: 1 / 3, u: "cup", i: "almond flour" },
          { q: 1 / 3, u: "cup", i: "maple syrup" },
          { q: 1, u: "tsp", i: "baking powder" },
        ],
      },
      {
        name: "Optional",
        items: [
          { t: "a pinch", i: "salt" },
          { t: "a splash", i: "vanilla extract" },
          { t: "as desired", i: "chocolate chips" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a baking dish with parchment paper.",
      "Mash the cooked sweet potato in a large bowl and mix in the eggs and peanut butter.",
      "Add the cocoa powder, almond flour, maple syrup and baking powder, plus salt and vanilla if you're using them, and stir to a thick batter.",
      "Fold in chocolate chips, spread in the dish and add a few more on top.",
      "Bake for 30 minutes and let it cool before cutting.",
    ],
  },

  {
    slug: "korean-sesame-broccoli",
    title: "5-Ingredient Korean Sesame Broccoli",
    posted: "2025-08-20",
    reel: "DNl_DC7RGd_",
    photo: "korean-sesame-broccoli.jpg",
    alt: "A glass bowl of blanched broccoli tossed with sesame oil and sesame seeds",
    time: "10 min",
    tags: ["Side", "Korean", "Quick"],
    intro:
      "James's favorite way to eat broccoli: blanched for a minute, chilled in ice water so it stays bright and crunchy, then tossed with garlic, sesame oil and sesame seeds.",
    groups: [
      {
        items: [
          { q: 2, i: ["medium head of broccoli", "medium heads of broccoli"], n: "cut into florets" },
          { q: 0.5, u: "tsp", i: "salt" },
          { q: 0.5, u: "tsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Cut the broccoli into bite-size florets.",
      "Blanch in a pot of boiling water for about a minute, until bright green.",
      "Drain and plunge into a bowl of ice water to stop the cooking, then drain well.",
      "Toss with the salt, garlic, sesame oil and sesame seeds.",
    ],
  },

  {
    slug: "apple-date-chicken-salad",
    title: "Apple Date Chicken Salad",
    posted: "2025-08-18",
    reel: "DNgtNB4xARi",
    photo: "apple-date-chicken-salad.jpg",
    alt: "James holding a glass bowl of creamy chicken salad with apple and dates",
    tags: ["Chicken", "Salad", "High protein"],
    intro:
      "James's favorite chicken salad: shredded chicken with crunchy vegetables, pickles, sweet apple and dates in a Greek yogurt and olive oil dressing.",
    groups: [
      {
        items: [
          { q: 2.5, u: "cup", i: "cooked chicken", n: "shredded" },
          { q: 2, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.5, u: "cup", i: "carrots", n: "diced" },
          { q: 1, u: "cup", i: "celery", n: "diced" },
          { q: 0.25, u: "cup", i: "dill pickles", n: "chopped" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped", b: "Terra Delyssa" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.75, u: "cup", i: "Greek yogurt" },
          { q: 2, u: "tbsp", i: "olive oil" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Shred the chicken into a large bowl.",
      "Dice the carrots and celery, chop the green onion and pickles, and add them to the chicken.",
      "Peel and dice the apple, chop the dates and add them too.",
      "Add the Greek yogurt, olive oil, Dijon, garlic, salt and pepper and mix well.",
    ],
  },

  {
    slug: "korean-soy-marinated-eggs",
    title: "Korean Soy Marinated Eggs (Mayak Eggs)",
    posted: "2025-08-13",
    reel: "DNTFGNrRgyj",
    photo: "korean-soy-marinated-eggs.jpg",
    alt: "A bowl of rice topped with jammy soy-marinated eggs",
    tags: ["Korean", "High protein", "Meal prep"],
    intro:
      "Jammy soft-boiled eggs soaked in a sweet soy, honey and garlic marinade with onion and jalapeño. Spoon them over rice with some of the marinade.",
    groups: [
      {
        items: [
          { q: 6, i: ["egg", "eggs"], n: "boiled for 6½ minutes" },
        ],
      },
      {
        name: "Marinade",
        items: [
          { q: 0.5, u: "cup", i: "soy sauce" },
          { q: 0.5, u: "cup", i: "water" },
          { q: 0.25, u: "cup", i: "honey" },
          { q: 2, u: "tbsp", i: "mirin" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { q: 1, u: "tbsp", i: "sesame oil" },
          { q: 1, u: "tbsp", i: "sesame seeds" },
          { t: "optional", i: "white onion, green onion and jalapeño", n: "chopped" },
        ],
      },
    ],
    steps: [
      "Boil the eggs for 6½ minutes, then move them straight into ice water.",
      "Peel the eggs once they're cool.",
      "In a container, mix the soy sauce, water, honey, mirin, garlic, sesame oil and sesame seeds, and add the chopped onion, green onion and jalapeño.",
      "Put the eggs in the marinade, cover with a paper towel so they stay submerged, and refrigerate for at least a few hours or overnight.",
      "Serve over rice with a spoonful of the marinade.",
    ],
  },

  {
    slug: "celery-date-salad",
    title: "Celery Date Salad",
    posted: "2025-08-11",
    reel: "DNOsgFVxiqN",
    photo: "celery-date-salad.jpg",
    alt: "James holding a glass bowl of celery date salad topped with pumpkin seeds",
    time: "10 min",
    tags: ["Salad", "Side", "No cook"],
    intro:
      "James's best salad of 2025: celery, cucumber and apple with sweet dates and seeds in a bright lemon, Parmesan and olive oil dressing.",
    groups: [
      {
        items: [
          { q: 1, u: "cup", i: "celery", n: "diced" },
          { q: 1, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
          { q: 6, i: ["date", "dates"], n: "pitted and chopped" },
          { t: "as desired", i: "nuts or seeds" },
        ],
      },
      {
        name: "Dressing",
        items: [
          { q: 0.5, i: ["lemon", "lemons"], n: "juiced, or ¼ cup lemon juice" },
          { q: 2, u: "tbsp", i: "Parmesan cheese", n: "grated" },
          { q: 2, u: "tbsp", i: "olive oil" },
          { q: 1, u: "tsp", i: "garlic", n: "minced" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Dice the celery, cucumber and apple and put them in a bowl.",
      "Chop the dates and add them.",
      "Whisk the lemon juice, Parmesan, olive oil, garlic, salt and pepper together.",
      "Pour over the salad, toss, and top with nuts or seeds.",
    ],
  },

  {
    slug: "iced-peanut-butter-latte",
    title: "Iced Peanut Butter Latte",
    posted: "2025-08-07",
    reel: "DNDniBsxktX",
    photo: "iced-peanut-butter-latte.jpg",
    alt: "James sipping an iced peanut butter latte",
    serves: "1",
    time: "5 min",
    tags: ["Drink", "Quick"],
    intro:
      "A nutty iced latte made in an almost-empty peanut butter jar: espresso shaken with the last of the peanut butter, honey and vanilla, then poured over iced milk.",
    groups: [
      {
        items: [
          { q: 1, u: "tbsp", i: "peanut butter", n: "or the scrapings of an almost-empty jar" },
          { q: 1, i: ["espresso shot", "espresso shots"], b: "Nespresso" },
          { q: 1, u: "tsp", i: "honey" },
          { q: 1, u: "tsp", i: "vanilla extract" },
          { t: "a dash", i: "cinnamon" },
          { t: "to fill the glass", i: "milk of choice", b: "Natrel" },
          { t: "as desired", i: "ice" },
        ],
      },
    ],
    steps: [
      "Brew the espresso straight into a nearly empty peanut butter jar (or a jar with a spoonful of peanut butter).",
      "Add the honey, vanilla and cinnamon, close the lid and shake until the peanut butter melts into the coffee.",
      "Fill a glass with ice and milk.",
      "Pour the peanut butter espresso over the top and stir.",
    ],
  },

  {
    slug: "date-walnut-banana-bread",
    title: "Date and Walnut Banana Bread",
    posted: "2025-08-06",
    reel: "DNBCHU8xG8d",
    photo: "date-walnut-banana-bread.jpg",
    alt: "James holding a thick slice of date and walnut banana bread",
    time: "55 min",
    tags: ["Sweet", "Baking"],
    intro:
      "James's favorite banana bread: no oil or refined sugar, with applesauce and maple syrup for sweetness, and lots of chopped dates and walnuts.",
    groups: [
      {
        name: "Wet",
        items: [
          { q: 1, u: "cup", i: "bananas", n: "mashed" },
          { q: 2, i: ["egg", "eggs"] },
          { q: 0.5, u: "cup", i: "applesauce", b: "Mott's" },
          { q: 3, u: "tbsp", i: "maple syrup or honey" },
          { q: 1, u: "tsp", i: "vanilla extract" },
        ],
      },
      {
        name: "Dry",
        items: [
          { q: 1, u: "cup", i: "oat flour", n: "or oats blended into flour" },
          { q: 0.5, u: "cup", i: "almond flour" },
          { q: 1, u: "tsp", i: "baking powder" },
          { q: 0.75, u: "cup", i: "walnuts", n: "chopped" },
          { q: 0.75, u: "cup", i: "dates", n: "pitted and chopped", b: "Terra Delyssa" },
          { q: 0.25, u: "tsp", i: "salt" },
          { q: 1, u: "tsp", i: "cinnamon" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a loaf pan with parchment paper.",
      "Mash the bananas in a large bowl, then mix in the eggs, applesauce, maple syrup and vanilla.",
      "Add the oat flour, almond flour, baking powder, salt and cinnamon and stir until combined.",
      "Fold in the chopped walnuts and dates.",
      "Pour into the pan and bake for 45 minutes.",
    ],
  },

  {
    slug: "chocolate-protein-granola-bars",
    title: "High-Protein Chocolate Granola Bars",
    posted: "2025-08-01",
    reel: "DM0MlG_Ri1p",
    photo: "chocolate-protein-granola-bars.jpg",
    alt: "A tray of chocolate oat granola bars cut into strips",
    time: "30 min",
    tags: ["Snack", "High protein", "Baking"],
    intro:
      "Cheaper than store-bought and gluten free: oats, nuts and pumpkin seeds bound with a chocolate applesauce, protein powder and honey mixture, baked and cut into bars.",
    groups: [
      {
        name: "Wet",
        items: [
          { q: 200, u: "ml", i: "applesauce" },
          { q: 0.75, u: "cup", i: "protein powder" },
          { q: 2, u: "tbsp", i: "coconut oil" },
          { q: 2, u: "tbsp", i: "cocoa powder" },
          { q: 3, u: "tbsp", i: "honey", n: "or as much as you like" },
        ],
      },
      {
        name: "Dry",
        items: [
          { q: 2, u: "cup", i: "oats" },
          { q: 1, u: "cup", i: "nuts", n: "chopped" },
          { q: 0.5, u: "cup", i: "pumpkin seeds" },
          { q: 1, u: "tsp", i: "cinnamon" },
          { t: "a dash", i: "salt" },
        ],
      },
    ],
    steps: [
      "Heat the oven to 350°F and line a baking sheet with parchment paper.",
      "In a large bowl, mix the applesauce, protein powder, coconut oil, cocoa powder and honey until smooth.",
      "Add the oats, chopped nuts, pumpkin seeds, cinnamon and salt and stir until everything is coated.",
      "Spread it out evenly on the sheet and press it down firmly.",
      "Bake for 20 minutes, score into bars while warm, and let it cool before breaking apart.",
    ],
  },

  {
    slug: "protein-cookie-dough",
    title: "High-Protein Cookie Dough",
    posted: "2025-07-29",
    reel: "DMsdJ0oRzha",
    photo: "protein-cookie-dough.jpg",
    alt: "James holding a bowl of protein cookie dough scoops with chocolate chips",
    time: "5 min",
    tags: ["Sweet", "High protein", "No cook"],
    intro:
      "Five ingredients, no baking: Greek yogurt, peanut butter, almond flour and protein powder stirred into a thick, edible cookie dough with chocolate chips.",
    groups: [
      {
        items: [
          { q: 0.25, u: "cup", i: "Greek yogurt", b: "Skotidakis" },
          { q: 1, u: "tbsp", i: "almond flour" },
          { q: 2, u: "tbsp", i: "peanut butter" },
          { q: 1, u: "scoop", i: "protein powder" },
          { t: "as desired", i: "chocolate chips" },
        ],
      },
    ],
    steps: [
      "Put the Greek yogurt and peanut butter in a bowl.",
      "Add the almond flour and protein powder.",
      "Mix until it comes together into a thick dough.",
      "Fold in chocolate chips and eat it with a spoon.",
    ],
  },

  {
    slug: "kimchi-tuna-salad",
    title: "Kimchi Tuna Salad",
    posted: "2025-07-25",
    reel: "DMiImg_xUC2",
    photo: "kimchi-tuna-salad.jpg",
    alt: "James holding up a cracker topped with kimchi tuna salad",
    tags: ["Seafood", "Korean", "High protein"],
    intro:
      "Tuna with chopped kimchi, carrot, celery and green onion in a light soy, sesame and Greek yogurt sauce. No mayo, good for your gut, and about 35 grams of protein.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 2, u: "tbsp", i: "carrots", n: "diced" },
          { q: 1, u: "stalk", i: "celery", n: "diced" },
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 0.25, u: "cup", i: "kimchi", n: "chopped" },
          { t: "as desired", i: "furikake or dried seaweed" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "tbsp", i: "olive oil" },
          { q: 0.5, u: "tbsp", i: "soy sauce" },
          { q: 2, u: "tbsp", i: "Greek yogurt" },
          { q: 1, u: "tsp", i: "sesame oil" },
        ],
      },
    ],
    steps: [
      "Drain the tuna and put it in a bowl.",
      "Dice the carrot and celery, chop the green onion and add them.",
      "Chop the kimchi and add it.",
      "Add the olive oil, soy sauce, Greek yogurt and sesame oil and mix well.",
      "Top with furikake and eat on crackers.",
    ],
  },

  {
    slug: "healthy-egg-salad-dip",
    title: "Healthy Egg Salad Dip",
    posted: "2025-07-21",
    reel: "DMX1GtYR_6V",
    photo: "healthy-egg-salad-dip.jpg",
    alt: "A glass bowl of creamy egg salad dip",
    tags: ["High protein", "Snack", "No cook"],
    intro:
      "A creamy egg salad blended with cottage cheese, Greek yogurt and the yolks, with crunchy celery, cucumber and red onion. Use 6 eggs for a dip or 8 for a classic egg salad.",
    groups: [
      {
        items: [
          { q: 6, q2: 8, i: ["boiled egg", "boiled eggs"], n: "6 for a dip, 8 for classic" },
          { q: 1, u: "cup", i: "celery, cucumber and red onion", n: "diced" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese" },
          { q: 2, u: "tbsp", i: "Greek yogurt" },
          { q: 0.5, u: "tsp", i: "garlic", n: "minced" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { t: "optional", i: "dill" },
          { t: "as desired", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Peel the eggs and separate the yolks from the whites. Chop the whites into a bowl.",
      "Dice the celery, cucumber and red onion and add them to the whites.",
      "Blend the cottage cheese, Greek yogurt, garlic, Dijon, dill, salt, pepper and the yolks with an immersion blender until smooth.",
      "Fold the sauce into the eggs and vegetables. Serve with crackers.",
    ],
  },

  {
    slug: "korean-street-toast",
    title: "Korean Street Toast (Gilgeori Toast)",
    posted: "2025-07-14",
    reel: "DMFzzsbRBSd",
    photo: "korean-street-toast.jpg",
    alt: "James holding up a thick Korean street toast sandwich with egg, cabbage, ham and cheese",
    time: "15 min",
    tags: ["Breakfast", "Korean", "Quick"],
    intro:
      "The most underrated breakfast sandwich: a cabbage, carrot and green onion omelette with ham and cheese between buttery toasted milk bread, finished with honey, Kewpie mayo and ketchup.",
    groups: [
      {
        items: [
          { q: 2, i: ["large egg", "large eggs"] },
          { q: 1, u: "cup", i: "cabbage", n: "finely shredded" },
          { q: 2, u: "stalk", i: "green onions", n: "chopped" },
          { q: 0.5, u: "cup", i: "carrots", n: "shredded" },
          { t: "optional", i: "cheese slice" },
          { q: 2, u: "slice", i: "thin ham" },
          { q: 2, u: "slice", i: "milk bread" },
        ],
      },
      {
        name: "Other",
        items: [
          { q: 1, u: "tbsp", i: "butter" },
          { q: 1, u: "tbsp", i: "honey or sugar" },
          { q: 1, u: "tbsp", i: "Kewpie mayo" },
          { q: 1, u: "tbsp", i: "ketchup" },
          { t: "to taste", i: "salt and pepper" },
        ],
      },
    ],
    steps: [
      "Finely shred the cabbage and carrot and chop the green onion. Beat them into the eggs with salt and pepper.",
      "Melt half the butter in a pan, pour in the egg mixture and shape it into a square about the size of the bread. Cook until set on both sides.",
      "In the same pan, toast the bread in the rest of the butter until golden.",
      "Drizzle honey on the toast, then stack the omelette, ham and cheese on top.",
      "Add Kewpie mayo and ketchup, close the sandwich and cut it in half.",
    ],
  },

  {
    slug: "cottage-cheese-protein-brownie",
    title: "5-Minute Cottage Cheese Protein Brownie",
    posted: "2025-07-10",
    reel: "DL7fyT2xRcW",
    photo: "cottage-cheese-protein-brownie.jpg",
    alt: "James holding a dish of fudgy microwave brownie",
    serves: "1",
    time: "5 min",
    tags: ["Sweet", "High protein", "Quick"],
    intro:
      "A single-serving brownie made in the microwave: cottage cheese, cocoa, an egg and honey blended smooth, topped with chocolate chips. About 20 grams of protein.",
    groups: [
      {
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese" },
          { q: 3, u: "tbsp", i: "cocoa powder" },
          { q: 1, i: ["egg", "eggs"] },
          { q: 2, u: "tbsp", i: "honey or sweetener" },
          { t: "optional", i: "chocolate chips" },
          { t: "optional", i: "Greek yogurt", n: "for topping, as in the video" },
        ],
      },
    ],
    steps: [
      "Put the cottage cheese, cocoa powder, egg and honey in a measuring jug and blend with an immersion blender until smooth.",
      "Pour it into a microwave-safe dish and scatter chocolate chips on top.",
      "Microwave for about 3 minutes, until set.",
      "Let it cool for a minute and eat it with a dollop of Greek yogurt if you like.",
    ],
  },

  {
    slug: "tuna-celery-salad",
    title: "Healthy Tuna Celery Salad",
    posted: "2025-07-07",
    reel: "DLzyuTxRaMR",
    photo: "tuna-celery-salad.jpg",
    alt: "James holding a glass bowl of creamy tuna celery salad",
    tags: ["Seafood", "High protein", "No cook"],
    intro:
      "Tuna with crunchy celery, cucumber and apple in a blended cottage cheese and Greek yogurt dressing. About 50 grams of protein with no mayo.",
    groups: [
      {
        items: [
          { q: 1, u: "can", i: "tuna", n: "drained" },
          { q: 1, u: "cup", i: "celery", n: "diced" },
          { q: 0.5, u: "cup", i: "cucumber", n: "diced" },
          { q: 1, i: ["apple", "apples"], n: "peeled and diced" },
        ],
      },
      {
        name: "Sauce",
        items: [
          { q: 0.5, u: "cup", i: "cottage cheese" },
          { q: 2, u: "tbsp", i: "Greek yogurt" },
          { q: 1, u: "tsp", i: "Dijon mustard" },
          { q: 0.5, u: "tsp", i: "garlic", n: "minced" },
          { t: "as desired", i: "salt and pepper" },
          { t: "optional", i: "dill" },
        ],
      },
    ],
    steps: [
      "Drain the tuna into a bowl.",
      "Dice the celery and cucumber, peel and dice the apple, and add them to the tuna.",
      "Blend the cottage cheese, Greek yogurt, Dijon, garlic, dill, salt and pepper until smooth.",
      "Pour the sauce over the salad and mix well.",
    ],
  },

  {
    slug: "rice-paper-spanakopita",
    title: "Rice Paper Spanakopita",
    posted: "2025-07-02",
    reel: "DLm7Apfxezc",
    photo: "rice-paper-spanakopita.jpg",
    alt: "James holding a forkful of rice paper spanakopita over the plate",
    time: "20 min",
    tags: ["Air fryer", "Snack"],
    intro:
      "A shortcut spanakopita: wilted spinach, herbs and feta wrapped in egg-dipped rice paper, coiled up and air-fried until golden and crisp.",
    groups: [
      {
        items: [
          { q: 1, i: ["green onion", "green onions"], n: "chopped" },
          { q: 2, u: "tbsp", i: "parsley", n: "chopped" },
          { q: 2, u: "tbsp", i: "dill", n: "chopped" },
          { q: 2, u: "cup", i: "spinach", n: "uncooked" },
          { q: 3, u: "sheet", i: "rice paper" },
          { q: 1, i: ["egg", "eggs"], n: "beaten" },
          { q: 80, u: "g", i: "feta", n: "crumbled" },
        ],
      },
    ],
    steps: [
      "Chop the green onion, parsley and dill.",
      "Wilt the spinach in a dry pan, then squeeze out as much water as you can and chop it.",
      "Mix the spinach, herbs and feta in a bowl.",
      "Beat the egg on a plate. Dip a sheet of rice paper in the egg until soft, lay it flat, spoon a line of filling along one edge and roll it up. Repeat and coil the rolls into a spiral.",
      "Air fry at 350°F for 5–7 minutes, until golden.",
    ],
  },

  {
    slug: "kimbap",
    title: "Easy Kimbap",
    posted: "2025-06-30",
    reel: "DLh7UgrRF_R",
    photo: "kimbap.jpg",
    alt: "A plate of sliced kimbap rolls",
    tags: ["Korean", "Rice"],
    intro:
      "James's favorite childhood food: seasoned rice rolled in seaweed with carrots, pickled radish, braised fish cake, crab sticks, spinach and egg. Great for a potluck.",
    groups: [
      {
        name: "Rice",
        items: [
          { q: 2, u: "cup", i: "cooked rice" },
          { q: 0.5, u: "tsp", i: "salt" },
          { q: 1, u: "tsp", i: "sugar" },
          { q: 1, u: "tbsp", i: "rice vinegar" },
          { q: 1, u: "tsp", i: "sesame oil" },
        ],
      },
      {
        name: "Fillings",
        items: [
          { t: "as needed", i: "carrots", n: "shredded and sautéed" },
          { t: "as needed", i: "pickled radish (danmuji)", n: "cut into strips" },
          { t: "as needed", i: "fish cakes", n: "cut into strips" },
          { q: 2, u: "tbsp", i: "soy sauce", n: "for the fish cakes" },
          { q: 1, u: "tbsp", i: "brown sugar", n: "for the fish cakes" },
          { q: 1, u: "tsp", i: "garlic", n: "for the fish cakes" },
          { t: "as needed", i: "imitation crab sticks" },
          { t: "1 bunch", i: "spinach" },
          { q: 0.5, u: "tsp", i: "salt", n: "for the spinach" },
          { q: 1, u: "tsp", i: "garlic", n: "for the spinach" },
          { q: 1, u: "tsp", i: "sesame oil", n: "for the spinach" },
          { q: 3, i: ["large egg", "large eggs"] },
        ],
      },
      {
        name: "To roll",
        items: [
          { t: "as needed", i: "seaweed sheets (gim)" },
          { t: "to brush", i: "sesame oil" },
          { t: "to sprinkle", i: "sesame seeds" },
        ],
      },
    ],
    steps: [
      "Season the warm rice with the salt, sugar, rice vinegar and sesame oil.",
      "Sauté the shredded carrots. Simmer the fish cake strips with the soy sauce, brown sugar and garlic until glossy.",
      "Blanch the spinach, squeeze it dry and season with salt, garlic and sesame oil.",
      "Beat the eggs, cook them into a thin omelette and cut it into long strips. Split the crab sticks lengthwise.",
      "Spread a thin layer of rice over a sheet of seaweed, line up the fillings near one edge and roll it up tightly using a bamboo mat.",
      "Brush the rolls with sesame oil, sprinkle with sesame seeds and slice into rounds.",
    ],
  },
];
