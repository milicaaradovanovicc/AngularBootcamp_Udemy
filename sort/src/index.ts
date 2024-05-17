import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

//NUMBERS
const numbersCollection = new NumbersCollection([
  10, -17, 20, 2, 35, -7, 3, -2, 7,
]);
numbersCollection.sort();
console.log(numbersCollection.data);

//CHARACTERS
const charactersCollection = new CharactersCollection(
  "jKPWlcsapswPkkdLOYGGyygcpocd"
);

charactersCollection.sort();
console.log(charactersCollection.data);

//LINKED LIST
const linkedList = new LinkedList();

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
