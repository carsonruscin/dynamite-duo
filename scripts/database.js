export const getHeroes = () => {
    return database.heroes.map(hero => ({...hero}))
}

export const getVillains = () => {
    return database.villains.map(villain => ({...villain}))
}


const database = {
    heroes: [
        {
        id: 1,
        name: `Superman`,
        power: `Super strength`
        },
        {
        id: 2,
        name: `Flash`,
        power: `Super speed`
        }
    ],
    villains: [
        {
        id: 1,
        name: `Lex Luthor`,
        power: `Genius intellect`,
        },
        {
        id: 2,
        name: `Poison Ivy`,
        power: `Seduction`,
        }
    ]
}

