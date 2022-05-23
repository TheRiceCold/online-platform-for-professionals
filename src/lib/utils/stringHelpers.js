export const capitalize = words => {
  if (words.length) {
    words = words.toLowerCase()
    words = words.split(" ")
    return words.map(word => {
      return word[0]?.toUpperCase() + word.substr(1)
    }).join(" ")
  }
  else 
    return ""
}
