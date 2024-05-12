import { Character } from "../character/character.model"

export interface Episode {
  id: string
  name: string
  air_date: string
  characters: Character[]
}
