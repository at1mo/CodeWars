function meeting(s) {
  const arrayNames = s.toUpperCase().split(';');
  const separatedNames = arrayNames.map(element => element.split(':')).map(item => {
    return [item[0], item[1]] = [item[1], item[0]]
  })
  separatedNames.sort((a,b) => {
    if (a[0] < b[0])
      return -1;
    if (a[0] !== b[0])
      return 1;
    if (a[0] === b[0])
      return a[1].localeCompare(b[1]);
    return a[1].localeCompare(b[1]);
  })
  return separatedNames.map(item => {
    return `(${item[0]}, ${item[1]})`
  }).join('')
}

// makes this string uppercase

// в алфавитном порядке по фамилии.

console.log(meeting('Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'))
