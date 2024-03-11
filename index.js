const gitnode = require('@izanamidev/gitnode');

const git = gitnode();

console.log("Hello")

git.status((err,res)=>{
    if(err){console.error(err)};
    console.log(res);
    git.add('.',(err,res)=>{
        if(err){console.error(err)};
        console.log(res);
    });
});