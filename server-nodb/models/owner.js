const Dog = require("./dog")

const ownersData = [
    { id: 1, name: 'Beth', address: 'South Pavillion' },
    { id: 2, name: 'Naz', address: '1 The Strand' }
]

class Owner {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.address = data.address
    }

    static findById (id) {
        const data = ownersData.find(d => d.id === id)
        const owner = new Owner(data)
        return owner
    }

    get dogs(){
        const dogs = Dog.findByOwner(this.id)
        return dogs
    }

}

module.exports = Owner;