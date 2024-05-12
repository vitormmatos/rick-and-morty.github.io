interface position {
  name: string
}

export interface Character {
  id: string
  name: string
  species: string
  status: string
  image: string
  characters: string[]
  origin: position
  location: position
}
