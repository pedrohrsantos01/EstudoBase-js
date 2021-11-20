// let e const 
 {
     var a = 2;
     let b = 4;
     console.log(b)
 }

 console.log(a)

 //Template String 
 var name = 'Pedro';
 console.log(`Olá ${name}, tenha uma boa tarde!`)

 //Destructuring
 const [l, e, ...tras] = "Cod3r"
 console.log(l,e ,tras)

 const [x, , y] = [1, 2, 3]
 console.log(x,y)

 const { idade, nome } = { nome: 'Pedro', idade: 25}
 console.log(idade, nome)

 