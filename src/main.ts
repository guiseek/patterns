import { Context, sortStrategy, reverseStrategy } from '../cases/strategy/src/fp'
import './style.css'

console.log(`\n\n\n`)

const list = ['a', 'b', 'c', 'd', 'e']

console.log('A estratégia é definida como ordenação normal.')
const strategy = sortStrategy

console.log(`\n\n`)

console.log(`Contexto: faz a ordenação dos dados usando alguma estratégia`)
const context = Context(strategy)
console.log(context.doOrder(list))

console.log(`\n\n`)

console.log('Cliente: A estratégia está definida para ordenação reversa.')
context.setStrategy(reverseStrategy)
console.log(context.doOrder(list))

console.log(`\n\n\n`)
