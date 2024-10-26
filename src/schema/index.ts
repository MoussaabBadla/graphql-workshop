import { Humanresolver, Humantypes } from "./human/index.js"
import { types } from "./types.js"





export const typesDefs = `
${types}
${Humantypes}
`






export const resolver = {
    Query : {
        ...Humanresolver.queries
    },
    Mutation: {
        ...Humanresolver.mutations
    }

}




