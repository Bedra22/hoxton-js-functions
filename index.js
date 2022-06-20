function add(a, b) {
    return a + b
    }
  

  function isEven(num) {
    if (num % 2===0){
        console.log("The number is even")
    }
    else{
      console.log("The number is not even")
    }
  }
 
 
  let names=[' Bedra ', ' Nico ', ' Ed ' , '  Hoxton ']
  function greet() {
    for(let name of names){
      let greeting= `Hello , ${names} `
      console.log(greeting)
    }
  }

  function isAnAdult(age) {
    if (age<18){
      console.log(false)
    }
    else{
      console.log(true)
    }
  }

  function yearsToAdulthood(age) {
    if(age<18){
      return 18-age
    }
    else{
      console.log("Is an adult")
    }
  }

  function admit(age, name) {
    if(age>18){
      console.log("Hello " + name)
    }
    else {
      let whenadult=18-age
      console.log("Come back after "+ whenadult +" years")
    }
  }