export default function FilterSearch(products, term) {
  let prodNameLow = [];
  let filteredProds = [];
  const termsList = term.split(" ");

  for (const p in products) {
    prodNameLow.push(products[p].name.toLowerCase());
  }

  for (let i = 0; i < prodNameLow.length; i++) {
    let count = 0;

    for (let j = 0; j < termsList.length; j++) {
      if (prodNameLow[i].includes(termsList[j])) {
        count++;
      }
    }

    if (count === termsList.length) {
      filteredProds.push(products[i]);
    }
  }

  return filteredProds;
}