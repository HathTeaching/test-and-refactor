
function * ints() {
  let i = 0;
  while(true) {
    yield i++;
  }
}

// function * aFewInts() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
//   yield 5;
// }

// function * someThingsFromAnIterable1() {
//   yield * [1,2,3,4,5];
//   return 5;
// }
// function * someThingsFromAnIterable() {
//   yield * aFewInts();
//   return 6;
// }

export function all<T>(iterables: Iterable<T>, fn: (item: T) => boolean): boolean {
  for(let item of iterables) {
    if(!fn(item)) {
      return false;
    }
  }
  return true;
}

export function any<T>(iterables: Iterable<T>, fn: (item: T) => boolean): boolean {
  for(let item of iterables) {
    if(fn(item)) {
      return true;
    }
  }
  return false;
}

/*
all
any
contains
enumerate
filter
iter
map
max
min
range
reduce
reduce_
sorted
sum
zip
zip3
chain
compress
count
cycle
dropwhile
groupby
icompress
ifilter
imap
islice
izip
izip3
izipLongest
izipMany
permutations
repeat
takewhile
zipLongest
zipMany
chunked
flatten
intersperse
itake
pairwise
partition
roundrobin
take
uniqueEverseen
uniqueJustseen
*/