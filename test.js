function EvenNumber(){
    const evenArr = [];
    for (let i = 1; i <= 50; i++){
      if(i % 2 === 0){
        evenArr.push(i)
      }
    }
    return evenArr;
  }