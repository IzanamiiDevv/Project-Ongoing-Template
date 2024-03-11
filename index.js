const gitnode = require('@izanamidev/gitnode');

const git = gitnode();

console.log("Will it work")

git.status((err,res)=>{
    if(err){console.error(err)};
    console.log(res);
    git.add('.',(err,res)=>{
        if(err){console.error(err)};
        console.log(res);
        git.commit('test',(err,res)=>{
            if(err){console.error(err)};
            console.log(res);
            git.pullOrigin('main',(err,res)=>{
                if(err){console.error(err)};
                console.log(res);
                git.pushOrigin('main',(err,res)=>{
                    if(err){console.error(err)};
                    console.log(res);
                });
            });
        });
    });
});