class User {
    constructor (name, lastName){
      this.name = name;
      this.lastName = lastName;
      this.books = [];
      this.pets = [];
    }
    
    getFullName() {
      return `${this.name} ${this.lastName}`;
    }
    
    addPet(petName){
      this.pets.push(petName);
    }
    
    countPets(){
      return this.pets.length;
    }
    
    addBook(title, author){
      this.books.push({title: title, author: author});
    }
    
    getBookNames() {
      return this.books.map(x => x.title);
    }
  }
  
  const user1 = new User("Fabián", "Rojas");
  user1.addPet("Jack");
  user1.addPet("Emma");
  user1.addBook("The Lord of the Rings", "J. R. Tolkien");
  user1.addBook("Perfume: The Story of a Murderer", "Patrick Süskind")
  
  const fullName = user1.getFullName();
  const numberOfPets = user1.countPets();
  const bookTitles = user1.getBookNames();
  
  
  console.log(user1)
  console.log(fullName)
  console.log(numberOfPets)
  console.log(bookTitles)