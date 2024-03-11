const gitnode = require('@izanamidev/gitnode');

const git = gitnode();

git.status((err,res)=>{
    if(err){console.error(err)};
    console.log(res);
    git.add('.',(err,res)=>{
        if(err){console.error(err)};
        console.log(res);
    });
});