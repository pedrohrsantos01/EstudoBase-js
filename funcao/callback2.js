const notas = [3.3, 5.4, 6.5, 7.2, 9.0, 7.5, 5.5]

// sem callback
const notasBaixas1 = []
for ( i in notas) {
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
    } 

    console.log(notasBaixas1)

 // com callback
 
 const notasBaixas2 = notas.filter(function (nota) { 
  return nota < 7
 })

 console.log(notasBaixas2)

 // com arrowfunction
const notaMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter (notaMenorQue7)

console.log(notasBaixas3)

