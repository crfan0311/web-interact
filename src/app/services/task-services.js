import axios from './config'

const taskService = {};

taskService.getTasks = async ({queryKey}) => {
    const {queryParams} = queryKey[queryKey.length - 1];
    const {data} = await axios.get('/tasks', {
        params: {
            ...queryParams
        }
    });
    return data;
};

taskService.getTaskCategories = async () => {
    const {data} = await axios.get('/tasks/categories');
    return data;
};

export {taskService};
