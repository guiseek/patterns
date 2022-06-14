/**
 * A interface Strategy declara operações comuns a todas as versões
 * suportadas de algum algoritmo.
 *
 * O Contexto usa esta interface para chamar o algoritmo definido
 * por classes concretas ou objetos que implementam as estratégias.
 */
interface Strategy {
  order(data: string[]): string[]
}

/** O Contexto define a interface de interesse dos clientes. */
function Context(strategy: Strategy) {
  /** O contexto não conhece quem nem como. */
  let _strategy: Strategy = strategy

  return {
    /**
     * Normalmente, o Contexto permite substituir
     * um objeto Strategy em tempo de execução.
     */
    setStrategy(strategy: Strategy) {
      _strategy = strategy
    },

    /**
     * O Contexto delega algum trabalho ao objeto Strategy
     * em vez de implementar várias versões do algoritmo.
     */
    doOrder(data: string[]) {
      return _strategy.order(data)
    },
  }
}

/**
 * As estratégias implementam o algoritmo enquanto seguem a
 * interface da estratégia. Isso os torna intercambiáveis.
 */
const sortStrategy: Strategy = {
  order(data: string[]): string[] {
    return data.sort()
  },
}

const reverseStrategy: Strategy = {
  order(data: string[]): string[] {
    return data.reverse()
  },
}

export { Context, sortStrategy, reverseStrategy }
