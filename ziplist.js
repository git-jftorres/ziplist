let listA = [1, 2, 3];
let listB = ["a", "b", "c"];

function zipList (listA, listB) {
  let returnArr = [];
  let countA = 0;
  let countB = 0;

  for (let i = 0; i < (listA.length + listB.length); i++) {

    if (i % 2 === 0) {

      returnArr[i] = listA[countA];
      countA++;

    }
    else {

      returnArr[i] = listB[countB];
      countB++;
    }
  }

  return returnArr;

}

//console.log(zipList(listA, listB));

function zipListTheSimpleWay (listA, listB) {

  return _.flatten(_.zip(listA, listB));

}

console.log(zipListTheSimpleWay(listA, listB));