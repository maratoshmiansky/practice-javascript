// refactor the code below into js

// 1

// numbers = [1, 2, 4, 2]
// even_numbers = numbers.select { |num| num % 2 == 0 }
// p even_numbers

const numbers = [1, 2, 4, 2];
const even_numbers = numbers.filter((number) => number % 2 === 0);
console.log(even_numbers);

// 2

// movies = [
//   { id: 1, title: "Die Hard", rating: 4.0 },
//   { id: 2, title: "Bad Boys", rating: 5.0 },
//   { id: 3, title: "The Chamber", rating: 3.0 },
//   { id: 4, title: "Fracture", rating: 2.0 },
// ]

// not_great_movies = movies.select { |movie_hash| movie_hash[:rating] < 4.0 }
// p not_great_movies

const movies = [
  { id: 1, title: "Die Hard", rating: 4.0 },
  { id: 2, title: "Bad Boys", rating: 5.0 },
  { id: 3, title: "The Chamber", rating: 3.0 },
  { id: 4, title: "Fracture", rating: 2.0 },
];

const not_great_movies = movies.filter((movie) => movie.rating < 4.0);
console.log(not_great_movies);

// 3

// movies = [
//   { id: 1, title: "Die Hard", rating: 4.0 },
//   { id: 2, title: "Bad Boys", rating: 5.0 },
//   { id: 3, title: "The Chamber", rating: 3.0 },
//   { id: 4, title: "Fracture", rating: 2.0 },
// ]

// movies_with_b = movies.select { |movie_hash| movie_hash[:title].include?("b") || movie_hash[:title].include?("B") }
// p movies_with_b.map { |movie_hash| movie_hash[:id] }

const movies_with_b = movies.filter((movie) => movie.title.toLowerCase().includes("b")).map((movie) => movie.id);
console.log(movies_with_b);

// 4

// def palindrome?(string)
//   string == string.reverse
// end

// p palindrome?("tacocat")
// p palindrome?("wazzzzup")

function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

console.log(isPalindrome("tacocat"));
console.log(isPalindrome("wazzzzup"));

// 5

// def split_array(array, split)
//   index = 0
//   new_array = []
//   while index < array.length
//     new_array << array[index..index + split - 1]
//     index += split
//   end
//   new_array
// end

// p split_array([0, 1, 2, 3, 4, 5], 1)  #=> [[0], [1], [2], [3], [4], [5]]
// p split_array([0, 1, 2, 3, 4, 5], 2)  #=> [[0, 1], [2, 3], [4, 5]]
// p split_array([0, 1, 2, 3, 4, 5], 3)  #=> [[0, 1, 2], [3, 4, 5]]
// p split_array([0, 1, 2, 3, 4, 5], 4)  #=> [0, 1, 2, 3, 4, 5]
