{
    //generics
    // const rollNumbers:number[]=[1,2,3];
    // const rollNumbers2:Array<number>=[3,4,5];
    // type GenericArray<T>=Array<T>
    // const rollNumbers:GenericArray<number>=[1,2,3];
    // rollNumbers.push(6);
    // console.log(rollNumbers);
    // const students:GenericArray<string>=["shuvo","iqbal","nahid"];
    // students.push("rifat")
    // console.log(students);

    //using GenericArray ,array of object is learning

    type GenericArray<T>=Array<T>;
    type User={
        name:string;
        age:number;
    }
    const user:GenericArray<User>=[
        {
            name:"shuvo",
            age:25
        },
        {
            name:"rifat",
            age:25
        }
    ]
    console.log(user);

    //generic tuple
    type GenericTuple<X,Y>=[X,Y];
    // const manush:GenericTuple<string,string>=["sajjad","hussain"];
    // console.log(manush);
    const userWithId:GenericTuple<number,{name:string,age:number}>=[123,{name:'shuvo',age:23}];
    console.log(userWithId);
}