{

    //promise->you have to resolve or reject when use promise
    type Something={
        something:string;
    }
    const createPromise=():Promise<Something>=>{
        return new Promise<Something>((resolve,reject)=>{
            const data:Something={something:"something"};
            if(data){
                resolve(data);
            }else{
                reject("failed to load data");
            }
        })
    }

    //show data
    const showData=async()=>{
        const data:Something=await createPromise();
        console.log(data)
    }

    // showData();
    type Todo={
        userId:number;
        id:number;
        title:string;
        completed:boolean
    }
    const getTodo=async():Promise<Todo>=>{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data;
    }
    console.log(getTodo())
}