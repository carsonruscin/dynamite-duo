import { getVillains } from "./database.js"

const villains = getVillains()


// This function when called will generate a string of HTML for Villains that looks like this 
/* <ul>
      <li>Villain 1</li>
      <li>Villain 2</li>
  </ul>
*/
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}