import { NumbersCollection } from "./NumberCollections";
import { LinkedList } from "./LinkedList";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([10, 3, -4, 11, -2]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection("Welco.,eCSAmnf");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();

linkedList.add(120);
linkedList.add(2);
linkedList.add(32);
linkedList.add(22);
linkedList.add(12);
linkedList.add(4);
linkedList.add(11);
linkedList.add(4);

linkedList.sort();
linkedList.print();
