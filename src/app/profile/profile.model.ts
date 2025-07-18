import { Recommendation } from "../recommendations/recommendations.model"
export class Profile {
    public id: string
    public name: string
    public lastName: string
    public recommendations: Recommendation []
}