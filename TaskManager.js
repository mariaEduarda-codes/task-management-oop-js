

export default class TaskManager {
    #tasks

    constructor() {
        this.#tasks = [];
    }

    addTask(task) {
        this.#tasks.push(task);
    }

    removeTask(id) {
        this.#tasks = this.#tasks.filter(task => task.getId() !== id);
    }

    listTasks() {
        return this.#tasks;
    }

    listCompletedTasks() {
        return this.#tasks.filter(task => task.getStatus() === "completed");
    }

    listToDoTasks() {
        return this.#tasks.filter(task => task.getStatus() === "toDo");
    }

    listInProgressTasks() {
        return this.#tasks.filter(task => task.getStatus() === "inProgress");
    }

    findTaskById(id) {
        return this.#tasks.find(task => task.getId() === id);
    }

    toString() {
        return this.#tasks.map(task => task.toString()).join('\n');
    }
}