let dict = {key: "value"};
let item = dict;
console.log(dict.key === item['key']);
let string = " The quick brown fox quickly jumps over the lazy dog. ";
let modify;
console.log(string[1]);
console.log(string.indexOf('quick'));
console.log(string.lastIndexOf('quick'));
modify = string.replace('fox', 'cat');
console.log(modify);
modify = string.split(" ");
console.log(modify);
console.log(string.trim());
console.log(modify.join("-"));
console.log(string.substring(17, 20)); // От символа до символа
console.log(string.substr(17, 3)); // От символа на кол-во символов
console.log(string.toLocaleUpperCase());
console.log(string.toLocaleLowerCase()); //Для разных языков, можно юзать и просто toLowerCase

console.log(Math.pow(2, -90));
console.log(Math.sqrt(128));
console.log(Math.sign(1));
console.log(Math.min(3, 5, 10))
console.log(Math.max(3, 5, 10))

let array = [69, 128, 1337, 43, 1488]
let mod = array.map(function (x) {
    return x * 2;
});
console.log(array);
console.log(mod);
let mod2 = array.filter(function (x) {
    return x % 2 === 1
});
console.log(mod2);
let copy = [];
array.forEach(function (x) {
    copy.unshift(x);
});
console.log(copy);

let fruit = ["Какос", "Банан", "Арбуз"]
console.log(fruit.sort());
function comparator(fst, snd) {
    if (fst < snd) {
        return - 1;
    } else if (fst == snd) {
        return 0;
    } else {
        return 1
    }
}
console.log([5, 4, 1, 10, 30, 3, 69].sort(comparator));
function getWeatherState(temperature) {
    return temperature > 0 ? "Вода!" : "Лёд!";
}
console.log(getWeatherState(1));
function caller() {
    return this;
}
let alice = {name: "Alice", fn: caller};
let bob = {name: "Bob", fn: caller};
console.log(alice.fn());
console.log(bob.fn());
function Human(name, age) {
    this.name = name;
    this.age = age;
}
alice = new Human("Алиса", 24)
console.log(alice);
let numbers = new Set();
numbers.add(42);
numbers.add(42);
numbers.add(43);
console.log(numbers);
console.log(numbers.size);
console.log(numbers.has(42));
console.log(numbers.has(32));
numbers.delete(43);
console.log(numbers);
numbers.clear();
console.log(numbers);

let objects = new Set();
objects.add("Hello, world!");
objects.add("Hello, world!");
objects.add({key : "value"})
objects.add({key : "value"})
console.log(objects.size);
console.log(objects);
