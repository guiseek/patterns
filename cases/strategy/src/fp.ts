interface Strategy {
  order(data: string[]): string[]
}

function Context(strategy: Strategy) {
  let _strategy: Strategy = strategy

  return {
    setStrategy(strategy: Strategy) {
      _strategy = strategy
    },
    doOrder(data: string[]) {
      return _strategy.order(data)
    },
  }
}

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

export {
  Context,
  sortStrategy,
  reverseStrategy,
}
