import { RecommendationStatus, Reaction, Category, Recommendation} from './recommendations.model'

export const MOCKRECOMMENDATIONS: Recommendation[] = [
  {
    id: "1",
    title: "The Alchemist",
    description: "A novel by Paulo Coelho about a boy's spiritual journey.",
    category: Category.BOOKS,
    recommendedBy: undefined,
    source: "Goodreads",
    notes: "Great for introspection and life purpose.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.NO_REACTION,
    imageUrl: "https://placehold.co/200x300"
  },
  {
    id: "2",
    title: "Inception",
    description: "A mind-bending thriller by Christopher Nolan.",
    category: Category.MOVIES,
    recommendedBy: undefined,
    source: "Netflix",
    notes: "Watch it more than once for full effect.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.DISLIKED,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "3",
    title: "Breaking Bad",
    description: "A chemistry teacher becomes a drug kingpin.",
    category: Category.SHOWS,
    recommendedBy: undefined,
    source: "Netflix",
    notes: "Excellent writing and character development.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.NO_REACTION,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "4",
    title: "Nobu",
    description: "Upscale Japanese-Peruvian fusion restaurant.",
    category: Category.RESTAURANTS,
    recommendedBy: undefined,
    source: "TripAdvisor",
    notes: "Try the black cod miso.",
    status: RecommendationStatus.NOT_TRIED,
    reaction: Reaction.LIKED,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "5",
    title: "The Grand Canyon",
    description: "A natural wonder in Arizona, USA.",
    category: Category.PLACES,
    recommendedBy: undefined,
    source: "National Geographic",
    notes: "Best viewed at sunrise or sunset.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.NO_REACTION,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "6",
    title: "Atomic Habits",
    description: "Book by James Clear about behavior change.",
    category: Category.BOOKS,
    recommendedBy: undefined,
    source: "Amazon",
    notes: "Actionable tips for habit building.",
    status: RecommendationStatus.NOT_TRIED,
    reaction: Reaction.LIKED,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "7",
    title: "Parasite",
    description: "Oscar-winning Korean film about class divide.",
    category: Category.MOVIES,
    recommendedBy: undefined,
    source: "Hulu",
    notes: "Watch without spoilers.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.LIKED,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "8",
    title: "The Office (US)",
    description: "Mockumentary sitcom about office workers.",
    category: Category.SHOWS,
    recommendedBy: undefined,
    source: "Peacock",
    notes: "Starts slow, gets great by Season 2.",
    status: RecommendationStatus.TRIED,
    reaction: Reaction.NO_REACTION,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "9",
    title: "Le Bernardin",
    description: "Fine dining seafood restaurant in NYC.",
    category: Category.RESTAURANTS,
    recommendedBy: undefined,
    source: "Michelin Guide",
    notes: "Book months in advance.",
    status: RecommendationStatus.DECLINED,
    reaction: Reaction.DISLIKED,
    imageUrl: "https://placehold.co/300x200"
  },
  {
    id: "10",
    title: "Kyoto, Japan",
    description: "Historic city known for temples and culture.",
    category: Category.PLACES,
    recommendedBy: undefined,
    source: "Lonely Planet",
    notes: "Perfect for cherry blossom season.",
    status: RecommendationStatus.NOT_TRIED,
    reaction: Reaction.LIKED,
    imageUrl: "https://placehold.co/300x200"
  },
];