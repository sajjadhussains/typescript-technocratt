{
    // function add(num1:number,num2:number):number{
    //     return num1+num2;
    // }
    // const result = add(5,7);
    // console.log(result);

    // const add=(num1:number,num2:number):number=>{
    //     return num1+num2;
    // }
    // const result=add(3,7);
    // console.log(result);

    // const poorUser={
    //     name:"Mezba",
    //     balance:0,
    //     addBalance(balance:number):string{
    //         return `My new balance is : ${this.balance+balance}`;
    //     }
    // }
    // console.log(poorUser.addBalance(50));

    const arr:number[]=[1,3,5,7];
    const newArray:number[]=arr.map((element:number):number=>element*element);
    console.log(newArray);

}