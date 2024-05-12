import { Character } from "../character/character.model"

export interface Location {
    id: string
    name: string
    dimension: string
    type: string
    residents: Character[]
}