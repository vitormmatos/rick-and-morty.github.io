import { gql } from 'apollo-angular'

function getCharacters(pageNumber: string) {
  return gql`
  query {
    characters(page: ${pageNumber} ) {
      results {
        id
        name
        species
        status
        image
        origin {
          ... on Location {
          name
          }
        }
        location {
          ... on Location{
          name
          }
        }
      }
    }
  }
`
}

function getEpisode(id: string) {
  return gql`
  query {
      episode(id: ${id}) {
          id
          name
          air_date
          characters {
            ... on Character {
            name
            species
            status
            image
            origin {
              ... on Location {
              name
              }
            }
            location {
              ... on Location {
              name
              }
            }
          }
      }
    }
  }
`
}

function getEpisodes(pageNumber: string) {
  return gql`
  query {
    episodes(page: ${pageNumber}) {
      results {
        id
				name
        air_date
      }
    }
  }
  `
}

function getLocation(id: string) {
  return gql`
  query {
    location(id: ${id}) {
        id
				name
        dimension
        type
        residents {
          ... on Character {
          name
          species
          status
          image
          origin {
            ... on Location {
            name
            }
          }
          location {
            ... on Location {
            name
            }
          }
        }
      }
    }
  }
  `
}

function getLocations(pageNumber: string) {
  return gql`
  query {
    locations(page: ${pageNumber}) {
      results {
        id
				name
        dimension
        type
      }
    }
  }
  `
}

export { getCharacters, getEpisode, getEpisodes, getLocation, getLocations }
