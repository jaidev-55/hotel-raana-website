export type MenuItem = {
  name: string;
  description?: string;
  price?: string;
  type: "veg" | "nonveg";
  signature?: boolean;
  image?: string;
};

export type MenuCategory = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuHighlights: MenuItem[] = [
  {
    name: "Mutton Biriyani",
    type: "nonveg",
    signature: true,
    description:
      "Tender mutton, slow-dum-cooked with seeraga samba rice. Our pride and joy.",
    image: "/images/menu-highlights/mutton-biriyani.png",
  },
  {
    name: "Chicken Biriyani",
    type: "nonveg",
    signature: true,
    description: "Juicy chicken and fragrant rice, dum-cooked to perfection.",
    image: "/images/menu-highlights/chicken-biriyani.png",
  },
  {
    name: "Viraal Meen Fry",
    type: "nonveg",
    signature: true,
    description:
      "The one everyone's talking about — crisp outside, soft within.",
    image: "/images/menu-highlights/Viraal-Meen-Fry.png",
  },

  {
    name: "Mutton Sukka Boneless",
    type: "nonveg",
    description: "Dry-roasted mutton with a deep, peppery masala.",
    image: "/images/menu-highlights/Mutton-Sukka-Boneless.png",
  },
  {
    name: "Cashew Nut Pulao",
    type: "veg",
    description: "Buttery-soft rice tossed with whole cashews.",
    image: "/images/menu-highlights/Cashew-Nut-Pulao.png",
  },
  {
    name: "Paneer Butter Masala",
    type: "veg",
    description: "Rich, creamy and comforting — a vegetarian favourite.",
    image: "/images/menu-highlights/Paneer-Butter-Masala.png",
  },
  {
    name: "Sweet Corn Veg Soup",
    type: "veg",
    description: "Warm, wholesome and lightly spiced.",
    image: "/images/menu-highlights/Sweet-Corn-Veg-Soup.png",
  },
];

// FULL MENU  (shown on /menu)

export const fullMenu: MenuCategory[] = [
  {
    title: "Biriyani",
    note: "Cooked the slow way with fragrant seeraga samba rice.",
    items: [
      {
        name: "Mutton Biriyani",
        price: "₹280",
        type: "nonveg",
        signature: true,
        description: "Our pride and joy — tender mutton, slow-dum-cooked.",
      },
      { name: "Mutton Biriyani (1/4)", price: "₹190", type: "nonveg" },
      {
        name: "Chicken Biriyani",
        price: "₹220",
        type: "nonveg",
        signature: true,
        description: "Juicy chicken and spiced rice, dum-cooked to perfection.",
      },
      { name: "Nattu Kozhi Sukka Biriyani", price: "₹250", type: "nonveg" },
      { name: "Chicken 65 Biriyani", price: "₹250", type: "nonveg" },
      { name: "Egg Biriyani", price: "₹190", type: "nonveg" },
      { name: "Plain Biriyani", price: "₹180", type: "veg" },
    ],
  },
  {
    title: "Raana Special",
    note: "The dishes we're known for.",
    items: [
      { name: "Japan Chicken", price: "₹270", type: "nonveg", signature: true },
      { name: "Chicken Drumstick (2 pcs)", price: "₹250", type: "nonveg" },
      { name: "Bengali Fish Curry", price: "₹250", type: "nonveg" },
      {
        name: "Mutton Rogan Josh",
        price: "₹275",
        type: "nonveg",
        signature: true,
      },
      { name: "Mughlai Chicken", price: "₹260", type: "nonveg" },
      {
        name: "Raana Special Chicken Curry (5 pcs)",
        price: "₹280",
        type: "nonveg",
        signature: true,
      },
      { name: "Chicken Do Pyaza", price: "₹240", type: "nonveg" },
      {
        name: "Chicken Leg Hot Pepper (2/3 pcs)",
        price: "₹200 / 270",
        type: "nonveg",
      },
      { name: "Tree Chicken", price: "₹160", type: "nonveg" },
      { name: "Chicken Boxer Rice", price: "₹290", type: "nonveg" },
    ],
  },
  {
    title: "South Indian Meals",
    items: [
      { name: "Veg Meals", price: "₹110", type: "veg" },
      { name: "Non Veg Meals", price: "₹150", type: "nonveg" },
      { name: "Curd Rice", price: "₹50", type: "veg" },
    ],
  },
  {
    title: "Soups — Veg",
    items: [
      { name: "Sweet Corn Veg Soup", price: "₹75", type: "veg" },
      { name: "Tomato Soup", price: "₹70", type: "veg" },
      { name: "Veg Clear Soup", price: "₹80", type: "veg" },
      { name: "Mushroom Soup", price: "₹85", type: "veg" },
      { name: "Hot & Sour Veg Soup", price: "₹85", type: "veg" },
    ],
  },
  {
    title: "Soups — Non Veg",
    items: [
      { name: "Sweet Corn Chicken Soup", price: "₹80", type: "nonveg" },
      { name: "Hot & Sour Chicken Soup", price: "₹85", type: "nonveg" },
      { name: "Chicken Clear Soup", price: "₹85", type: "nonveg" },
      { name: "Chicken Pepper Soup", price: "₹90", type: "nonveg" },
      { name: "Nattukozhi Soup", price: "₹125", type: "nonveg" },
      { name: "Mutton Bone Soup", price: "₹130", type: "nonveg" },
      { name: "Nandu Rasam", price: "₹125", type: "nonveg" },
      { name: "Aatukkal Soup", price: "₹130", type: "nonveg" },
    ],
  },
  {
    title: "Veg Starters",
    items: [
      { name: "Gobi 65", price: "₹135", type: "veg" },
      { name: "Mushroom 65", price: "₹175", type: "veg" },
      { name: "Mushroom Salt & Pepper", price: "₹185", type: "veg" },
      { name: "Paneer 65", price: "₹200", type: "veg" },
      { name: "Paneer Salt & Pepper", price: "₹200", type: "veg" },
      { name: "Paneer Tikka (5 pcs)", price: "₹205", type: "veg" },
      { name: "Baby Corn 65 / Golden Fry", price: "₹145", type: "veg" },
      { name: "Baby Corn Salt & Pepper", price: "₹145", type: "veg" },
      { name: "Vegetable Spring Roll", price: "₹145", type: "veg" },
      { name: "Onion Pakoda", price: "₹120", type: "veg" },
      { name: "Veg Bullet (6 pcs)", price: "₹120", type: "veg" },
    ],
  },
  {
    title: "Non-Veg Starters",
    items: [
      {
        name: "Chicken 65 Boneless",
        price: "₹180",
        type: "nonveg",
        signature: true,
      },
      { name: "Chicken Lollypop / Saucy", price: "₹200 / 220", type: "nonveg" },
      { name: "Chicken Pakoda", price: "₹175", type: "nonveg" },
      { name: "Chicken Manchurian Dry", price: "₹210", type: "nonveg" },
      { name: "Chilli Chicken Dry", price: "₹210", type: "nonveg" },
      { name: "Dragon Chicken Dry", price: "₹210", type: "nonveg" },
      { name: "Ginger Chicken Dry", price: "₹210", type: "nonveg" },
      { name: "Garlic Chicken Dry", price: "₹210", type: "nonveg" },
      { name: "Chicken 777", price: "₹260", type: "nonveg" },
      { name: "Honey Chicken Dry", price: "₹280", type: "nonveg" },
      { name: "Sesame Chicken Dry", price: "₹160", type: "nonveg" },
      { name: "Lemon Chicken", price: "₹160", type: "nonveg" },
      { name: "Chicken Spring Roll", price: "₹140", type: "nonveg" },
      { name: "Bullet Chicken (6 pcs)", price: "₹170", type: "nonveg" },
      { name: "Spring Chicken", price: "₹170", type: "nonveg" },
      { name: "Prawn Manjurian (Dry)", price: "₹245", type: "nonveg" },
      { name: "Chilli Prawn (Dry)", price: "₹245", type: "nonveg" },
      { name: "Fish Finger (6 pcs)", price: "₹300 / 240", type: "nonveg" },
      { name: "Chilli Fish", price: "₹300 / 240", type: "nonveg" },
    ],
  },
  {
    title: "Tandoori",
    items: [
      { name: "Chicken Tikka Boneless (8 pcs)", price: "₹240", type: "nonveg" },
      { name: "Chicken Garlic Kebab (8 pcs)", price: "₹240", type: "nonveg" },
      { name: "Chicken Tangdi Kebab (3 pcs)", price: "₹245", type: "nonveg" },
      {
        name: "Tandoori Chicken (Half / Full)",
        price: "₹245 / 475",
        type: "nonveg",
        signature: true,
      },
      { name: "Tikka Malay", price: "₹245", type: "nonveg" },
      { name: "Reshmi Kebab", price: "₹260", type: "nonveg" },
      { name: "Hariyali Kebab", price: "₹260", type: "nonveg" },
      {
        name: "Raana Special Tandoori (Qtr / Half / Full)",
        price: "₹150 / 270 / 500",
        type: "nonveg",
        signature: true,
      },
      { name: "Kali Mirchi Kebab", price: "₹275", type: "nonveg" },
      { name: "Kalmi Kebab", price: "₹260", type: "nonveg" },
      { name: "Malay Kebab", price: "₹280", type: "nonveg" },
    ],
  },
  {
    title: "Wonderful BBQ",
    items: [
      {
        name: "BBQ Chicken (Half / Full)",
        price: "₹220 / 430",
        type: "nonveg",
      },
      { name: "Pepper BBQ (Half / Full)", price: "₹240 / 460", type: "nonveg" },
      {
        name: "AL Faham BBQ (Half / Full)",
        price: "₹230 / 450",
        type: "nonveg",
      },
      {
        name: "Special BBQ (Half / Full)",
        price: "₹260 / 500",
        type: "nonveg",
      },
      { name: "Grill (Half / Full)", price: "₹230 / 440", type: "nonveg" },
      { name: "Mayonnaise", price: "₹25", type: "veg" },
    ],
  },
  {
    title: "Shawarma",
    items: [
      { name: "Shawarma Chicken Roll", price: "₹80", type: "nonveg" },
      { name: "Shawarma Chicken Plate", price: "₹130", type: "nonveg" },
      { name: "Spicy Shawarma Chicken Roll", price: "₹100", type: "nonveg" },
      { name: "Spicy Shawarma Chicken Plate", price: "₹150", type: "nonveg" },
    ],
  },
  {
    title: "South Indian — Chicken",
    items: [
      { name: "Chicken Sukka", price: "₹210", type: "nonveg" },
      { name: "Chicken Leg Roast (2 pcs)", price: "₹210", type: "nonveg" },
      {
        name: "Chettinadu Chicken (Roast / Masala)",
        price: "₹210 / 220",
        type: "nonveg",
      },
      {
        name: "Spl. Chettinadu Chicken (Roast / Masala)",
        price: "₹215 / 225",
        type: "nonveg",
      },
      {
        name: "Boneless Chicken (Dry / Masala)",
        price: "₹210 / 215",
        type: "nonveg",
      },
      {
        name: "Pepper Chicken (Dry / Masala)",
        price: "₹210 / 215",
        type: "nonveg",
      },
      { name: "Karaikudi Chicken (Leg 2 pcs)", price: "₹210", type: "nonveg" },
    ],
  },
  {
    title: "South Indian — Mutton",
    items: [
      {
        name: "Mutton Sukka Boneless",
        price: "₹240",
        type: "nonveg",
        signature: true,
      },
      { name: "Mutton Pepper Sukka Boneless", price: "₹250", type: "nonveg" },
      { name: "Liver (Roast / Masala)", price: "₹240 / 245", type: "nonveg" },
      {
        name: "Thalai Curry (Fry / Masala)",
        price: "₹190 / 200",
        type: "nonveg",
      },
      {
        name: "Mutton Brain Roast (Plain / Egg)",
        price: "₹200 / 210",
        type: "nonveg",
      },
      { name: "Mutton Masala", price: "₹250", type: "nonveg" },
      { name: "Mutton Keema Balls (5 pcs)", price: "₹150", type: "nonveg" },
      { name: "Aatukkal Paya (Evening)", price: "₹195", type: "nonveg" },
      { name: "Mutton Chettinadu With Bone", price: "₹290", type: "nonveg" },
      { name: "Mutton Chops", price: "₹290", type: "nonveg" },
      { name: "Kudal (Fry / Masala)", price: "₹190 / 200", type: "nonveg" },
    ],
  },
  {
    title: "Nattukozhi",
    items: [
      { name: "Nattukozhi Fry Roast", price: "₹245", type: "nonveg" },
      { name: "Nattukozhi Masala", price: "₹260", type: "nonveg" },
      { name: "Nattukozhi Kulambu", price: "₹260", type: "nonveg" },
      { name: "Nattukozhi Chinthamani", price: "₹290", type: "nonveg" },
    ],
  },
  {
    title: "Kaadai",
    items: [
      { name: "Kaadai Roast", price: "₹150", type: "nonveg" },
      { name: "Kaadai Masala", price: "₹160", type: "nonveg" },
      { name: "Kaadai 65", price: "₹150", type: "nonveg" },
    ],
  },
  {
    title: "Fish",
    items: [
      { name: "Vanjaram Fish Fry", price: "Seasonal", type: "nonveg" },
      { name: "Nethili Fish (Fry)", price: "₹190", type: "nonveg" },
      {
        name: "Viraal Meen Fry",
        price: "₹225",
        type: "nonveg",
        signature: true,
        description:
          "The one everyone's talking about — crisp outside, soft within.",
      },
      { name: "Viraal Meen Kulambu", price: "₹220", type: "nonveg" },
      { name: "Viraal Meen Thalai Curry", price: "₹100", type: "nonveg" },
    ],
  },
  {
    title: "Prawn",
    items: [
      { name: "Prawn 65", price: "₹250", type: "nonveg" },
      { name: "Prawn Pepper Fry", price: "₹250", type: "nonveg" },
      { name: "Prawn Masala", price: "₹260", type: "nonveg" },
      { name: "Prawn Fry", price: "₹250", type: "nonveg" },
    ],
  },
  {
    title: "Crabs",
    note: "Seasonal.",
    items: [
      { name: "Crab Roast (Half / Full)", price: "₹150 / 300", type: "nonveg" },
      {
        name: "Crab Pepper (Half / Full)",
        price: "₹160 / 320",
        type: "nonveg",
      },
    ],
  },
  {
    title: "Veg Gravy",
    items: [
      {
        name: "Gobi Manchurian (Dry / Gravy)",
        price: "₹145 / 155",
        type: "veg",
      },
      {
        name: "Mushroom Manchurian (Dry / Gravy)",
        price: "₹175 / 185",
        type: "veg",
      },
      {
        name: "Paneer Manchurian (Dry / Gravy)",
        price: "₹205 / 215",
        type: "veg",
      },
      {
        name: "Babycorn Manchurian (Dry / Gravy)",
        price: "₹155 / 170",
        type: "veg",
      },
      {
        name: "Veg Ball Manchurian (Dry / Gravy)",
        price: "₹145 / 155",
        type: "veg",
      },
      { name: "Mixed Veg Curry", price: "₹165", type: "veg" },
      {
        name: "Mushroom Masala / Kadaai Mushroom",
        price: "₹175 / 185",
        type: "veg",
      },
      { name: "Aloo Gobi Masala", price: "₹165", type: "veg" },
      {
        name: "Paneer Butter Masala",
        price: "₹200",
        type: "veg",
        signature: true,
      },
      { name: "Malai Kofta", price: "₹240", type: "veg" },
      { name: "Navaratan Korma", price: "₹255", type: "veg" },
      { name: "Veg Makhanwala", price: "₹240", type: "veg" },
      { name: "Green Peas Masala", price: "₹170", type: "veg" },
      { name: "Channa Masala", price: "₹170", type: "veg" },
      { name: "Spl. Chettinad Veg Gravy", price: "₹165", type: "veg" },
      {
        name: "Kadaai Vegetables / Kadaai Paneer",
        price: "₹170 / 200",
        type: "veg",
      },
    ],
  },
  {
    title: "Non-Veg Gravy",
    items: [
      { name: "Chicken Manchurian (Gravy)", price: "₹220", type: "nonveg" },
      { name: "Chilli Chicken (Gravy)", price: "₹220", type: "nonveg" },
      { name: "Ginger Chicken (Gravy)", price: "₹220", type: "nonveg" },
      { name: "Garlic Chicken (Gravy)", price: "₹220", type: "nonveg" },
      { name: "Prawn Manchurian (Gravy)", price: "₹255", type: "nonveg" },
      { name: "Chilli Prawn (Gravy)", price: "₹255", type: "nonveg" },
      {
        name: "Butter Chicken Masala",
        price: "₹240",
        type: "nonveg",
        signature: true,
      },
      { name: "Chicken Masala", price: "₹245", type: "nonveg" },
      { name: "Kadaai Chicken", price: "₹210", type: "nonveg" },
      { name: "Chicken Tikka Masala", price: "₹210", type: "nonveg" },
    ],
  },
  {
    title: "Pulao",
    items: [
      { name: "Kashmiri Pulao", price: "₹199", type: "veg" },
      { name: "Cashew Nut Pulao", price: "₹195", type: "veg", signature: true },
      { name: "Mushroom Pulao", price: "₹175", type: "veg" },
      { name: "Paneer Pulao", price: "₹175", type: "veg" },
      { name: "Veg Pulao", price: "₹165", type: "veg" },
      { name: "Green Peas Pulao", price: "₹160", type: "veg" },
      { name: "Ghee Rice", price: "₹170", type: "veg" },
      { name: "Jeera Rice", price: "₹160", type: "veg" },
    ],
  },
  {
    title: "Fried Rice & Noodles — Veg",
    items: [
      { name: "Veg Fried Rice / Noodles", price: "₹145", type: "veg" },
      { name: "Schezwan Veg Fried Rice / Noodles", price: "₹170", type: "veg" },
      { name: "Gobi Fried Rice / Noodles", price: "₹180", type: "veg" },
      {
        name: "Schezwan Gobi Fried Rice / Noodles",
        price: "₹175",
        type: "veg",
      },
      { name: "Mushroom Fried Rice / Noodles", price: "₹165", type: "veg" },
      { name: "Schezwan Mushroom Fried Rice", price: "₹190", type: "veg" },
      { name: "Paneer Fried Rice / Noodles", price: "₹170", type: "veg" },
      { name: "Schezwan Paneer Fried Rice", price: "₹195", type: "veg" },
      { name: "Mixed Veg Fried Rice / Noodles", price: "₹175", type: "veg" },
      { name: "Crispy Veg Noodles", price: "₹200", type: "veg" },
      { name: "American Chop Suey (Veg)", price: "₹190", type: "veg" },
      { name: "Chinese Chop Suey (Veg)", price: "₹170", type: "veg" },
    ],
  },
  {
    title: "Fried Rice & Noodles — Non Veg",
    items: [
      { name: "Egg Fried Rice / Noodles", price: "₹170", type: "nonveg" },
      { name: "Chicken Fried Rice / Noodles", price: "₹185", type: "nonveg" },
      {
        name: "Mixed Non Veg Fried Rice / Noodles",
        price: "₹255",
        type: "nonveg",
      },
      { name: "Mutton Fried Rice / Noodles", price: "₹225", type: "nonveg" },
      { name: "American Chop Suey (Chicken)", price: "₹230", type: "nonveg" },
      { name: "Chinese Chop Suey (Chicken)", price: "₹190", type: "nonveg" },
      {
        name: "Singapore Chicken Fried Rice / Noodles",
        price: "₹220",
        type: "nonveg",
      },
      { name: "Prawn Fried Rice / Noodles", price: "₹260", type: "nonveg" },
      { name: "Hakka Chicken Noodles", price: "₹190", type: "nonveg" },
      { name: "Crispy Chicken Noodles", price: "₹230", type: "nonveg" },
      { name: "Fish Rice", price: "₹220", type: "nonveg" },
      {
        name: "Schezwan Chicken Fried Rice / Noodles",
        price: "₹220",
        type: "nonveg",
      },
    ],
  },
  {
    title: "Indian Breads",
    items: [
      { name: "Naan (Plain / Butter)", price: "₹50 / 60", type: "veg" },
      { name: "Kashmiri Naan", price: "₹95", type: "veg" },
      { name: "Garlic Naan", price: "₹70", type: "veg" },
      { name: "Kulcha (Plain / Butter)", price: "₹50 / 60", type: "veg" },
      { name: "Stuffed Kulcha", price: "₹80", type: "veg" },
      { name: "Paneer Naan / Kulcha", price: "₹70", type: "veg" },
      { name: "Cheese Naan / Roti", price: "₹75 / 70", type: "veg" },
      { name: "Roti (Plain / Butter)", price: "₹50 / 60", type: "veg" },
      { name: "Mint Parotta", price: "₹70", type: "veg" },
      { name: "Tandoori Parotta", price: "₹65", type: "veg" },
      { name: "Phulka (2 pcs)", price: "₹50", type: "veg" },
      { name: "Chicken Stuffed Naan", price: "₹90", type: "nonveg" },
    ],
  },
  {
    title: "Eggs",
    items: [
      {
        name: "Spl. Egg Fry / Masala (2 pcs)",
        price: "₹60 / 80",
        type: "nonveg",
      },
      { name: "Kalaki Double (Plain)", price: "₹45", type: "nonveg" },
      { name: "Kalaki Double (Kuruma)", price: "₹55", type: "nonveg" },
      {
        name: "Kalaki (Chicken / Mutton)",
        price: "₹120 / 150",
        type: "nonveg",
      },
      { name: "Egg Omelette (Double)", price: "₹50", type: "nonveg" },
      { name: "Egg Podimass", price: "₹55", type: "nonveg" },
      { name: "Boiled Egg (2 pcs)", price: "₹35", type: "nonveg" },
      { name: "Chilli Egg", price: "₹80", type: "nonveg" },
    ],
  },
  {
    title: "Evening Special",
    items: [
      { name: "Idly (2 pcs)", price: "₹30", type: "veg" },
      { name: "Idiyappam (2 pcs)", price: "₹45", type: "veg" },
      {
        name: "Idiyappam With Coconut Milk (2 pcs)",
        price: "₹55",
        type: "veg",
      },
      { name: "Roast (Plain / Onion)", price: "₹60 / 70", type: "veg" },
      { name: "Kal Dosai (2 pcs)", price: "₹70", type: "veg" },
      { name: "Rava Dosai (Plain / Onion)", price: "₹80 / 90", type: "veg" },
      {
        name: "Podi Dosai / Ghee Podi Dosai",
        price: "₹100 / 110",
        type: "veg",
      },
      { name: "Mushroom / Paneer Dosai", price: "₹130", type: "veg" },
      { name: "Ghee / Butter Roast", price: "₹100", type: "veg" },
      { name: "Mutton Kari Dosai", price: "₹225", type: "nonveg" },
      { name: "Chicken Kari Dosai", price: "₹180", type: "nonveg" },
      { name: "Egg Roast", price: "₹100", type: "nonveg" },
      { name: "Egg Uthappam", price: "₹75", type: "nonveg" },
      { name: "Uthappam / Onion Uthappam", price: "₹55 / 65", type: "veg" },
      { name: "Chapathi (2 pcs)", price: "₹60", type: "veg" },
      { name: "Parotta (2 pcs)", price: "₹40", type: "veg" },
      { name: "Chilli Parotta", price: "₹125", type: "veg" },
      { name: "Ceylon Parotta", price: "₹25", type: "veg" },
      {
        name: "Ceylon Parotta (Egg / Chicken / Kari)",
        price: "₹55 / 190 / 225",
        type: "nonveg",
      },
      { name: "Veg Kothu Parotta", price: "₹120", type: "veg" },
      {
        name: "Kothu Parotta (Chicken / Mutton)",
        price: "₹175 / 220",
        type: "nonveg",
      },
      { name: "Egg Kothu Parotta", price: "₹130", type: "nonveg" },
      { name: "Aloo Parotta", price: "₹75", type: "veg" },
      { name: "Gobi Parotta", price: "₹75", type: "veg" },
      { name: "Coin Parotta", price: "₹40", type: "veg" },
      { name: "Virudhunagar Poricha Parotta", price: "₹40", type: "veg" },
      { name: "Madurai Bun Parotta", price: "₹40", type: "veg" },
      { name: "Nool Parotta (2 pcs)", price: "₹50", type: "veg" },
    ],
  },
  {
    title: "Beverages",
    items: [
      { name: "Goli Soda", price: "₹30", type: "veg" },
      { name: "Lime Soda (Salt / Sugar)", price: "₹55", type: "veg" },
      { name: "Lime Juice", price: "₹40", type: "veg" },
      { name: "Mint Lime / Soda", price: "₹50 / 60", type: "veg" },
    ],
  },
  {
    title: "Fresh Juice",
    items: [
      { name: "Orange", price: "₹70", type: "veg" },
      { name: "Watermelon", price: "₹60", type: "veg" },
      { name: "Sweet Lime", price: "₹70", type: "veg" },
      { name: "Apple", price: "₹85", type: "veg" },
      { name: "Pineapple", price: "₹80", type: "veg" },
      { name: "Pomegranate", price: "₹90", type: "veg" },
    ],
  },
  {
    title: "Milk Shakes",
    items: [
      { name: "Vanilla Milk Shake", price: "₹140", type: "veg" },
      { name: "Chocolate Milk Shake", price: "₹130", type: "veg" },
      { name: "Butterscotch Milk Shake", price: "₹120", type: "veg" },
      { name: "Strawberry Milk Shake", price: "₹140", type: "veg" },
      { name: "Pista Milk Shake", price: "₹120", type: "veg" },
      { name: "Black Current Milk Shake", price: "₹150", type: "veg" },
    ],
  },
  {
    title: "Desserts",
    note: "Ice cream, one scoop.",
    items: [
      { name: "Vanilla Ice Cream", price: "₹35", type: "veg" },
      { name: "Chocolate", price: "₹50", type: "veg" },
      { name: "Butterscotch", price: "₹40", type: "veg" },
      { name: "Strawberry", price: "₹40", type: "veg" },
      { name: "Pista", price: "₹40", type: "veg" },
      { name: "Black Current", price: "₹50", type: "veg" },
    ],
  },
];
