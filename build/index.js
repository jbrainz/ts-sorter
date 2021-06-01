"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollections_1 = require("./NumberCollections");
var LinkedList_1 = require("./LinkedList");
var CharactersCollection_1 = require("./CharactersCollection");
var numbersCollection = new NumberCollections_1.NumbersCollection([10, 3, -4, 11, -2]);
numbersCollection.sort();
console.log(numbersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection("Welco.,eCSAmnf");
charactersCollection.sort();
console.log(charactersCollection.data);
var linkedList = new LinkedList_1.LinkedList();
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