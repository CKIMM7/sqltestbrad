const dogsData = [
    { id: 1, name: 'Mochi', age: 1, ownerId: 2 },
    { id: 2, name: 'Masha', age: 9, ownerId: 2 },
    { id: 3, name: 'Jillaroo', age: 11, ownerId: 1 }
]

class Dog {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
    }

    static get all() {
        const dogs = dogsData.map(d => new Dog(d))
        return dogs
    }

    static findById (id) {
        const data = dogsData.find(d => d.id === id)
        const dog = new Dog(data)
        return dog
    }

    static findByOwner (id) {
        const data = dogsData.filter(d => d.ownerId === id)
        const dogs = data.map(d => new Dog(d))
        return dogs
    }

    static create(name, age){
        const newData = { id: dogsData.length + 1, name, age: parseInt(age) }
        dogsData.push(newData)
        const newDog = new Dog(newData)
        return newDog
    }

    update(updateData) {
        const dogData = dogsData.find(d => d.id === this.id)
        const idx = dogsData.indexOf(dogData)
        const updatedDogData = { ...dogData, ...updateData }
        dogsData[idx] = updatedDogData
        const updatedDog = new Dog(updatedDogData)
        return updatedDog
    }

    destroy(){
        const idx = dogsData.indexOf(this)
        const deletedDogData = dogsData.splice(idx, 1)
        return new Dog(deletedDogData)
    }

}

module.exports = Dog;