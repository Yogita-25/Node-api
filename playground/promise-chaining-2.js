require('../playground/src/db/mongoose');
const Task = require('../playground/src/models/task');

// Task.findByIdAndRemove('5d5d3210f7103b3a9c4c7302').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) =>{
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed:false});
    return count;
}

deleteTaskAndCount('5d5b8d4495a58d0e9079c6cc').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})