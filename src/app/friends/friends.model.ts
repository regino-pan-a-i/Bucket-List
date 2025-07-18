import { Recommendation } from "../recommendations/recommendations.model"

export class Friend {
    public id: string
    public name: string
    public recommendedItems: Recommendation []
}