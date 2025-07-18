import { Friend } from "../friends/friends.model"

export enum RecommendationStatus {
    TRIED = 'Tried',
    NOT_TRIED = 'Not Tried',
    DECLINED = 'Declined'
}

export enum Reaction {
    LIKED = "Liked",
    DISLIKED = "Disliked",
    NO_REACTION = "No Reaction Yet"
}

export enum Category {
    BOOKS = "Books",
    MOVIES = "Movies",
    SHOWS = "TV Shows",
    RESTAURANTS = "Restaurants", 
    PLACES = "Places"
}

export class Recommendation{

    public id:string
    public title: string
    public description: string
    public category: Category
    public recommendedBy?: Friend
    public source: string 
    public notes: string 
    public status: RecommendationStatus // "not tried" | "done",
    public reaction: Reaction // "liked" ,
    public imageUrl: string
}

