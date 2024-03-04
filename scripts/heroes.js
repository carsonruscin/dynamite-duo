import { getHeroes } from "./database.js"

const heroes = getHeroes()


// This function when called will generate a string of HTML for Heroes that looks like this 
/* <ul>
      <li>Hero 1</li>
      <li>Hero 2</li>
  </ul>
*/
export const HeroList = () => {
    let heroHTML = "<ul>"

    for (const hero of heroes) {
        heroHTML += `<li>${hero.name}</li>`
    }

    heroHTML += "</ul>"

    return heroHTML
}