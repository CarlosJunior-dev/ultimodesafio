class hero{
    constructor(name, age, type, typeAttack){
        this.name = name
        this.age = age
        this.type = type
        this.typeAttack = typeAttack
    }
         type(mage, monk, ninja, warrior){

}           typeAttack(magic, martialArts, shuriken, sword){
}
                attack(){
                    console.log(`O ${this.type} atacou usando ${this.typeAttack}`)
}                              
}
                    

    

let monk = new hero("Rafael", 19, "monge", "artes marciais")
let mage = new hero("Orion", 17, "mago", "magia")
let ninja = new hero("Emerson", 18, "ninja", "shuriken")
let warrior = new hero("Matheus", 18, "guerreiro", "espada")

ninja.attack()

