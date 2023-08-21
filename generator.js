const arr = ['a', 'b', 'c'];
  
  function* generator() {
      yield 1;
      yield* arr;
      yield 2;
  }

  const obj = generator();
  for( let i=0; i < 5; i++){
    console.log(obj.next().value);
  }