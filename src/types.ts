export enum Priority {
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high'
}

export enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

export type User = {
    name: string,
    status: Status,
    todos: Todo[],
    changeStatus: (newStatus: Status) => void,
    addTodo: (todo: string, priority?: Priority) => void,
    displayTodos: () => void,
    displayActiveTodos: () => void
}

export type Todo  = {
    todo: string,
    priority: Priority
}
