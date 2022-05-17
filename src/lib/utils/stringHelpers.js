export const capitalize = words => {
  words = words.split(" ")
  return words.map(word => {
    return word[0].toUpperCase() + word.substr(1)
  }).join(" ")
}
