class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }
  static titleize(string){
    const notCapital = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let stringWords = string.split(' ')
    stringWords = stringWords.map(element => {
      if(notCapital.find(item => item === element) === undefined){
        return element[0].toUpperCase() + element.slice(1)
      } else {return element[0] + element.slice(1)}
    })
    let newString = stringWords.join(' ')
    newString = newString[0].toUpperCase() + newString.slice(1)
    return newString
  }
}