class Pokemon{
    constructor(private _name: string, public position: any[]){}

    get name(){
        return this._name
    }
}


const pokemonInstance = new Pokemon('assdasa', [])

console.log(pokemonInstance.name)

