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
];
