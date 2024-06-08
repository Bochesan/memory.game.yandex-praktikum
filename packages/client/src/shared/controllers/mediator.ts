export type Listener<T extends unknown[] = unknown[]> = (args: T) => void

export default class Mediator<
  E extends string = string,
  M extends { [K in E]: unknown[] } = Record<E, any[]>
> {
  private listeners: Record<string, any[]> = {}
  static __instance: object

  constructor() {
    if (typeof Mediator.__instance !== 'undefined') {
      return Mediator.__instance as Mediator<E, M>
    }

    Mediator.__instance = this
  }

  on(event: E, callback: Listener<M[E]>): void {
    if (typeof this.listeners[event] === 'undefined') {
      this.listeners[event] = []
    }
    this.listeners[event]?.push(callback)
  }

  off(event: E, callback: Listener<M[E]>): void {
    if (typeof this.listeners[event] === 'undefined') {
      throw new Error(`Нет события: ${event}`)
    }

    this.listeners[event] = this.listeners[event]?.filter(
      listener => listener !== callback
    )
  }

  emit(event: E, ...args: M[E]): void {
    try {
      if (typeof this.listeners[event] === 'undefined') {
        throw new Error(`Нет события: ${event}`)
      }

      this.listeners[event]?.forEach(function (
        listener: (...args: unknown[]) => void
      ) {
        listener(...args)
      })
    } catch (error) {
      console.log(error)
    }
  }
}
