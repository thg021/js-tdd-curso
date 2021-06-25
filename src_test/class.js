class Animal{
  constructor(name){
    this.name = name
  }

  hello(){
    console.log(`My name is ${this.name}`)
    return
  }
}

class Dog extends Animal{
  constructor(name, sound){
    super(name)
    this.sound = sound
  }

  bark(){
    console.log(`I am a Dog and ${this.sound} `)
    return ''
  }
}

const elephant = new Animal('Mark')
const dog = new Dog('Fred', 'auau')
console.log(elephant.name)
console.log(elephant.hello())
console.log(dog.bark())
console.log(dog.name)
console.log(dog.hello())
