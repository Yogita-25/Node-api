require('../playground/src/db/mongoose');
const User = require('../playground/src/models/user');

//5d5fcc44637a225cf439f95f

// User.findByIdAndUpdate('5d5d31129378782f84191a5d', { age: 1 }).then((user) => {
//     console.log(user);
//     return User.countDocuments({age:1});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const updateAgeAndCount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id,{age});
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount('5d5d31129378782f84191a5d',2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})