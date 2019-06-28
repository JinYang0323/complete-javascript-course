/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/
class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, numberOfTrees, area) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.area = area;
  }
  calculateTreeDensity() {
    const density = this.numberOfTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${density} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const parks = [
  new Park('park1', 1996, 233, 2333),
  new Park('park2', 1993, 1300, 3380),
  new Park('park3', 1997, 535, 4530)
];
const streets = [
  new Street('street1', 1970, 50),
  new Street('street2', 1900, 20, 1),
  new Street('street3', 1950, 100, 2)
];

function calc(array) {
  const sum = array.reduce((prev, curr) => prev + curr);
  return [sum, array.length];
}
function reportParks(p) {
  console.log('-------PARKS REPORT------');

  // Density
  p.forEach(el => {
    el.calculateTreeDensity();
  });

  // Average age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

  // Which park has more than 1000 trees
  const i = p.map(el => el.numberOfTrees).findIndex(el => el >= 1000);
  console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
  console.log('-------STREETS REPORT------');

  //Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map(el => el.length));
  console.log(
    `Our ${
      s.length
    } streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`
  );

  // CLassify sizes
  s.forEach(el => el.classifyStreet());
}

reportParks(parks);
reportStreets(streets);
