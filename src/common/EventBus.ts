interface EventBusClass {
    emit: (name: string) => void
    on: (name: string, callback: Function) => void
    off: (name: string) => void
    once: (name: string) => void
}

type Keys = string | number | symbol

type List = {
    [key: Keys]: Array<Function>
}

class EventBus implements EventBusClass {
    list: List
    constructor() {
        this.list = {}
    }
    emit(name: string, ...args: Array<any>): void {
        let eventName: Array<Function> = this.list[name]
        eventName.forEach(fn => {
            fn.apply(this, args)
        })
    }
    on(name: string, callback: Function): void {
        let fn: Array<Function> = this.list[name] || []
        fn.push(callback)
        this.list[name] = fn
    }
    off() {

    }
    once() {

    }
}

export default new EventBus()