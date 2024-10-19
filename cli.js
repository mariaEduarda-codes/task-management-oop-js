import readline from "readline";
import './TaskManager.js'
import './Task.js'
import showMenuOptions from "./showMenuOptions.js";
import Task from "./Task.js";
import TaskManager from "./TaskManager.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askUser(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function mainMenu() {
    showMenuOptions()

    const input = await askUser('Type the number of the action you want to perform: ');

    switch (input) {
        case '1':
            console.log('Add a new task: ');
            const taskName = await askUser('Task name: ');
            const taskDescription = await askUser('Task description: ');

            const newTask = new Task(taskName, taskDescription);
            taskManager.addTask(newTask);
            console.log(`Task created, ID: ${newTask.getId()}`);
            break;
        case '2':
            console.log('Remove a task');
            const taskId = await askUser('ID of the task you wish to remove: ');

            const taskToRemove = taskManager.findTaskById(taskId);
            if (taskToRemove) {
                taskManager.removeTask(taskId);
                console.log(`Task was removed: ${taskId}`);
            } else {
                console.log('Task not found.');
            }
            break;
        case '3':
            console.log('List all tasks');
            taskManager.listTasks().forEach(task => {console.log(task.toString())});
            break;
        case '4':
            console.log('Set new status for a task');
            const validStatuses = ['toDo', 'completed', 'inProgress'];
            const IdTask = await askUser('Task ID: ');
            console.log(`ValidStatuses: ${validStatuses.join(',')}`);
            const newStatus = await askUser('New Task Status: ');

            if (!validStatuses.includes(newStatus)) {
                console.error('Invalid status. Please choose from: toDo, completed, inProgress.');
                break;
            }

            const foundTask = taskManager.findTaskById(IdTask);
            if (!foundTask) {
                console.log('Task not found.');
                break;
            }

            switch (newStatus) {
                case 'toDo':
                    foundTask.markAsToDo();
                    break;
                case 'completed':
                    foundTask.markAsCompleted();
                    break;
                case 'inProgress':
                    foundTask.markAsInProgress();
                    break;
                default:
                    console.log("Invalid status.");
                    break;
            }
            console.log(`Task status updated to: ${newStatus}`);
            break;
        case '5':
            console.log('List completed tasks');
            taskManager.listCompletedTasks().forEach(task => {console.log(task.toString())});
            break;
        case '6':
            console.log('List tasks to do');
            taskManager.listToDoTasks().forEach(task => {console.log(task.toString())});
            break;
        case '7':
            console.log('List tasks in progress');
            taskManager.listInProgressTasks().forEach(task => {console.log(task.toString())});
            break;
        case '8':
            console.log('Find task by ID');
            const idOfTask = await askUser('Task ID you wish to find: ');
            const foundTaskById = taskManager.findTaskById(idOfTask);
            if (foundTaskById) {
                console.log(foundTaskById.toString());
            } else {
                console.log('Task not found.');
            }
            break;
        case '9':
            console.log('Exiting...');
            rl.close();
            return;
        default:
            console.log('Choose a valid option.');
            break;
    }

    await mainMenu();

}

const taskManager = new TaskManager();

mainMenu();