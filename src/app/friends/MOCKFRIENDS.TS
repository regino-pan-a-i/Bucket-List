import { Friend } from "./friends.model";
import { RecommendationStatus, Reaction, Category, Recommendation } from "../recommendations/recommendations.model";

export const MOCKFRIENDS: Friend[] = [
  {
    id: "1",
    name: "Alice",
    recommendedItems: [
      {
        id: "1",
        title: "The Alchemist",
        description: "A philosophical novel by Paulo Coelho.",
        category: Category.BOOKS,
        recommendedBy: undefined,
        source: "Goodreads",
        notes: "Recommended for spiritual seekers.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "2",
    name: "Bob",
    recommendedItems: [
      {
        id: "2",
        title: "Inception",
        description: "Sci-fi thriller by Christopher Nolan.",
        category: Category.MOVIES,
        recommendedBy: undefined,
        source: "Netflix",
        notes: "Mind-bending visuals.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
      {
        id: "3",
        title: "Sushi Garden",
        description: "Modern Japanese restaurant.",
        category: Category.RESTAURANTS,
        recommendedBy: undefined,
        source: "Yelp",
        notes: "Try the dragon roll!",
        status: RecommendationStatus.NOT_TRIED,
        reaction: Reaction.LIKED,
        "imageUrl": "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "3",
    name: "Carol",
    recommendedItems: [
      {
        id: "4",
        title: "Stranger Things",
        description: "Sci-fi mystery set in the 80s.",
        category: Category.SHOWS,
        recommendedBy: undefined,
        source: "Netflix",
        notes: "Great for retro fans.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "4",
    name: "David",
    recommendedItems: [
      {
        id: "5",
        title: "Barcelona",
        description: "A vibrant city in Spain.",
        category: Category.PLACES,
        recommendedBy: undefined,
        source: "Travel Blog",
        notes: "Visit Sagrada Familia.",
        status: RecommendationStatus.DECLINED,
        reaction: Reaction.DISLIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "5",
    name: "Eva",
    recommendedItems: [
      {
        id: "6",
        title: "Atomic Habits",
        description: "Guide to building good habits by James Clear.",
        category: Category.BOOKS,
        recommendedBy: undefined,
        source: "Amazon",
        notes: "Practical and insightful.",
        status: RecommendationStatus.NOT_TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "6",
    name: "Frank",
    recommendedItems: [
      {
        id: "7",
        title: "Parasite",
        description: "Oscar-winning Korean film.",
        category: Category.MOVIES,
        recommendedBy: undefined,
        source: "Hulu",
        notes: "Social commentary through thriller.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "7",
    name: "Grace",
    recommendedItems: [
      {
        id: "8",
        title: "Breaking Bad",
        description: "High school chemistry teacher turns to crime.",
        category: Category.SHOWS,
        recommendedBy: undefined,
        source: "Netflix",
        notes: "Critically acclaimed.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "8",
    name: "Henry",
    recommendedItems: [
      {
        id: "9",
        title: "New York City",
        description: "The city that never sleeps.",
        category: Category.PLACES,
        recommendedBy: undefined,
        source: "Travel Magazine",
        notes: "Lots to see and do.",
        status: RecommendationStatus.NOT_TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "9",
    name: "Isla",
    recommendedItems: [
      {
        id: "10",
        title: "Nobu",
        description: "High-end Japanese restaurant chain.",
        category: Category.RESTAURANTS,
        recommendedBy: undefined,
        source: "Food Network",
        notes: "Pricey but worth it.",
        status: RecommendationStatus.DECLINED,
        reaction: Reaction.DISLIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
  {
    id: "10",
    name: "Jake",
    recommendedItems: [
      {
        id: "11",
        title: "Dune",
        description: "Sci-fi epic based on Frank Herbert's novel.",
        category: Category.MOVIES,
        recommendedBy: undefined,
        source: "HBO Max",
        notes: "Great visuals, slower pace.",
        status: RecommendationStatus.TRIED,
        reaction: Reaction.LIKED,
        imageUrl: "https://placehold.co/200x300"
      },
    ],
  },
];
