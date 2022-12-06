import mock from "../index";
import {taskCategories, tasks, taskTags} from "../mock-data/tasks";

const getTaskTags = (taskTag) => {
    if (taskTag) {
        return taskTags.filter(tag => taskTag.includes(tag.id))
    }
    return [];
};
mock.onGet('/tasks').reply(request => {
    const params = request.params;
    let selectedTasks = [...tasks];
    if (params?.myTask?.name && params?.myTask?.userId === 100) {
        selectedTasks = selectedTasks.filter(task => task.user.id === params.myTask?.userId);
    }
    for (let count = 0; count < selectedTasks.length; count++) {
        selectedTasks[count] = {
            ...selectedTasks[count],
            tags: getTaskTags(selectedTasks[count].tags)
        };
    }
    return [
        200,
        {
            tasks: selectedTasks,
            taskTags: taskTags
        }
    ];
});

mock.onGet('/tasks/categories').reply(request => {
    return [
        200,
        {
            taskCategories: taskCategories
        }
    ];
})
