import { app } from "./app";

app.listen(3333, () => console.log('Server is running...'))

// const letters = ['a', 'e', 'i', 'o', 'u', 'b', 'c', 'd']
//     let words = ''
//     let randomArrays = []
//     const palindromes = []
    
//     for(var i =0; i<10000; i++) {
//         for(var j=0; j<5; j++){
//             randomArrays.push(letters[Math.floor(Math.random()* (8 - 1)) + 1])
//         }
        
//         words = randomArrays.join('')
        
//         if( randomArrays[0] == randomArrays[4] && randomArrays[1] == randomArrays[3]) {
//             palindromes.push(words)
//         }
        
//         words = ''
//         randomArrays = []
        
//     }