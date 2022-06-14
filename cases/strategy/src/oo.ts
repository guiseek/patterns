/**
 * O Contexto define a interface de interesse dos clientes.
 */
export class Context {
  /**
   * @type {Strategy} O Contexto mantém uma referência a um dos objetos Strategy.
   * O contexto não conhece a classe concreta de uma estratégia.
   * Deve funcionar com todas as estratégias através da interface Strategy.
   */
  private strategy: Strategy

  /**
   * Normalmente, o Contexto aceita uma estratégia por meio do construtor,
   * mas também fornece um setter para alterá-la em tempo de execução.
   */
  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  /**
   * Normalmente, o Contexto permite substituir um objeto Strategy em tempo de execução.
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy
  }

  /**
   * O Contexto delega algum trabalho ao objeto Strategy em vez de implementar
   * várias versões do algoritmo por conta própria.
   */
  public doSomeBusinessLogic(): void {
    // ...

    console.log(
      `Contexto: faz a ordenação dos dados usando alguma estratégia, porém eu não preciso saber qual é nem como é feito.`
    )
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e'])
    console.log(result)
    // ...
  }
}

/**
 * A interface Strategy declara operações comuns a todas as versões
 * suportadas de algum algoritmo.
 *
 * O Contexto usa esta interface para chamar o algoritmo definido
 * por classes concretas ou objetos que implementam as estratégias.
 */
interface Strategy {
  doAlgorithm(data: string[]): string[]
}

/**
 * As estratégias concretas implementam o algoritmo enquanto seguem a
 * interface básica da estratégia. Com isso a interface os torna
 * intercambiáveis para o Contexto.
 */
class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort()
  }
}

class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse()
  }
}

/**
 * O código do cliente escolhe uma estratégia concreta e a passa para o contexto.
 * O cliente deve estar ciente das diferenças entre as estratégias para escolher.
 */

console.log('\n\n\n')

const context = new Context(new ConcreteStrategyA())
console.log('Cliente: A estratégia é definida como ordenação normal.')
context.doSomeBusinessLogic()

console.log('\n\n\n')

console.log('Cliente: A estratégia está definida para ordenação reversa.')
context.setStrategy(new ConcreteStrategyB())
context.doSomeBusinessLogic()

console.log('\n\n\n')
