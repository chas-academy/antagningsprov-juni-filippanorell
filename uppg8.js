function uppg8() {
  const persons = [
    { name: "Anna", age: 25 },
    { name: "Erik", age: 35 },
    { name: "Sara", age: 40 },
    { name: "Lars", age: 28 },
    { name: "Maria", age: 32 },
  ];

  function printNamesOver30(array) {
    array.forEach((person) => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }

  printNamesOver30(persons);
}

module.exports = { uppg8 };
