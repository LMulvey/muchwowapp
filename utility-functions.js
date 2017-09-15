const randomItem = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
exports.randomItem = randomItem;