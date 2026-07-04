export type GalleryCategory = "Food" | "Our Space" | "Events";

export type GalleryImage = {
  src: string | null; // e.g. "/images/gallery/biryani.jpg" — null shows a placeholder
  alt: string;
  category: GalleryCategory;
};

// Add photos to public/images/gallery/ then set each `src` to its path.
export const galleryImages: GalleryImage[] = [
  { src: null, alt: "Mutton biryani served hot", category: "Food" },
  { src: null, alt: "Crispy viral fish fry", category: "Food" },
  { src: null, alt: "Chicken biryani plated", category: "Food" },
  { src: null, alt: "South Indian meal on a banana leaf", category: "Food" },
  { src: null, alt: "Our dining area", category: "Our Space" },
  { src: null, alt: "The Hotel Raana entrance", category: "Our Space" },
  { src: null, alt: "Party hall set up for a function", category: "Our Space" },
  {
    src: null,
    alt: "A birthday celebration at Hotel Raana",
    category: "Events",
  },
  { src: null, alt: "Guests enjoying a family function", category: "Events" },
];
