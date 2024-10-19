import './GenerateId.js'
import generateId from "./GenerateId.js";

const TaskStatus = {
    TODO: "toDo",
    IN_PROGRESS: "inProgress",
    COMPLETED: "completed",
};

export default class Task {
    #id
    #title
    #description
    #status

    constructor(title, description) {
        this.#id = generateId();
        this.#title = title
        this.#description = description
        this.#status = TaskStatus.TODO;
    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getDescription() {
        return this.#description;
    }

    getStatus() {
        return this.#status;
    }

    setTitle(title) {
        if (title.trim() === '') {
            throw new Error("Title cannot be empty.");
        }
        this.#title = title;
    }

    setDescription(description) {
        this.#description = description;
    }

    setStatus(status) {
        if (!Object.values(TaskStatus).includes(status)) {
            throw new Error("Invalid status");
        }
        this.#status = status;
    }

    markAsCompleted() {
        this.setStatus(TaskStatus.COMPLETED);
    }

    markAsInProgress() {
        this.setStatus(TaskStatus.IN_PROGRESS);
    }

    markAsToDo() {
        this.setStatus(TaskStatus.TODO);
    }

    toString() {
        return `Task [ID: ${this.#id}, Title: ${this.#title}, Description: ${this.#description}, Status: ${this.#status}]`;
    }
}