import { Friend } from "../friends/friends.model"

export enum RecommendationStatus {
    TRIED = 'Tried',
    NOT_TRIED = 'Not Tried',
    DECLINED = 'Declined'
}

export enum Feedback {
    LIKED = "liked",
    DISLIKED = "disliked"
}

export enum Category {
    BOOKS = "books",
    MOVIES = "movies",
    SHOWS = "shows",
    RESTAURANTS = "restaurants", 
    PLACES = "places"
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
    public feedback: Feedback // "liked" ,
}

