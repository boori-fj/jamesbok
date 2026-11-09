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
];
