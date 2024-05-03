let A
console.log("salut")
const temperature = 21.3
console.log( temperature)
const fruits = ['pomme', 'poire', 'orange'];
console.clear()
console.log(fruits)
console.log("La premiere temperature est : ", temperature)
console.log("La collection de fruit est : ", fruits)
console.log("<h1>pas d'interpreteur HTML</H1>")
console.log(18 , "dix-huits", true, null, A )



console.group("Ceci est un group a part")
console.log("contenu du group")
console.groupEnd()
console.group("ceci est un second groupe a part (ferme par defaut)")
console.log("contenu du second groupe")
console.groupEnd()