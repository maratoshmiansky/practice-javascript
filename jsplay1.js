// translate the ruby code below to js

// 1

// numbers = [1, 2, 4, 2]
// p numbers.map { |x| x * 2 }

const numbers = [1, 2, 4, 2];
console.log(numbers.map((x) => x * 2));

// 2

// items = [
//   { id: 1, body: "foo" },
//   { id: 2, body: "bar" },
//   { id: 3, body: "foobar" },
// ]

// p items.map { |item| item[:id] }

const items = [
  { id: 1, body: "foo" },
  { id: 2, body: "bar" },
  { id: 3, body: "foobar" },
];

console.log(items.map((item) => item.id));

// 3

// fruits = [
//   { "name" => "apple", "color" => "red" },
//   { "name" => "banana", "color" => "yellow" },
//   { "name" => "grape", "color" => "purple" },
// ]

// # this would give us an array of hashes:
// # p fruits.map { |fruit| { fruit["name"] => fruit["color"] } }

// # this gives us the desired single hash:
// p fruits.map { |fruit| [fruit["name"], fruit["color"]] }.to_h

const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" },
];

var fruitsArray = fruits.map((fruit) => [fruit.name, fruit.color]);
console.log(new Map(fruitsArray));

// 4

// def reverse_a_string(string)
//   string_array = string.split("")
//   i = string_array.length - 1
//   reversed_string_array = []

//   while i >= 0
//     reversed_string_array << string_array[i]
//     i -= 1
//   end

//   reversed_string_array.join
// end

// p reverse_a_string("abcde")  #=> "edcba"

function reverseAString(string) {
  const stringArray = string.split("");
  var index = stringArray.length - 1;
  var reversedStringArray = [];

  while (index >= 0) {
    reversedStringArray.push(stringArray[index]);
    index -= 1;
  }
  return reversedStringArray.join("");
}

console.log(reverseAString("abcde"));
console.log(reverseAString("Maratical"));

// 5

// def find_longest_word(sentence)
//   sentence_array = sentence.split(" ")
//   i = 0
//   longest_index = i

//   while i < sentence_array.length
//     if sentence_array[i].length > sentence_array[longest_index].length
//       longest_index = i
//     end
//     i += 1
//   end

//   sentence_array[longest_index]
// end

// p find_longest_word("What is the longest word in this phrase?")  #=> "longest"

function findLongestWord(sentence) {
  const sentenceArray = sentence.split(" ");
  var index = 0;
  var longestIndex = index;

  while (index < sentenceArray.length) {
    if (sentenceArray[index].length > sentenceArray[longestIndex].length) {
      longestIndex = index;
    }
    index += 1;
  }
  return sentenceArray[longestIndex];
}

console.log(findLongestWord("What is the longest word in this phrase?"));
console.log(findLongestWord("I believe in miracles, you sexy thing!"));
