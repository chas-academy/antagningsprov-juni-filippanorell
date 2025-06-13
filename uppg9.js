function uppg9() {
  function sort(arr) {
    arr.forEach((num) => {
      if (num % 2 === 0) {
        console.log(num, "jämt");
      } else {
        console.log(num, "udda");
      }
    });
  }

  // Anropa funktionen med en array som argument
  sort([1, 2, 3, 4, 5, 6]);
}

module.exports = { uppg9 };
