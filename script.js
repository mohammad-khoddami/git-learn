function * idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  
  const gen = idMaker();

  for (let i = 0; i < 20; i++) {
    console.log(gen.next().value); // 0    
  }
  