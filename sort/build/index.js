"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
//NUMBERS
const numbersCollection = new NumbersCollection_1.NumbersCollection([
    10, -17, 20, 2, 35, -7, 3, -2, 7,
]);
numbersCollection.sort();
console.log(numbersCollection.data);
//CHARACTERS
const charactersCollection = new CharactersCollection_1.CharactersCollection("jKPWlcsapswPkkdLOYGGyygcpocd");
charactersCollection.sort();
console.log(charactersCollection.data);
//LINKED LIST
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-25);
linkedList.add(741);
linkedList.add(57);
linkedList.add(436);
linkedList.add(-528);
linkedList.add(252);
linkedList.add(-4);
linkedList.sort();
linkedList.print();
