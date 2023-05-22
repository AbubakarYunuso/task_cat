import catMe from 'cat-me'

const catTree = (number) => {
    for(let i = number;i > 0;i--){
       console.log(catMe())
    }
} 
console.log(catTree(3))