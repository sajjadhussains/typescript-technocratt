{
    type User1={
        name:string;
        profession:string;
        age:number
    }
    type userWithRoll1=User1 & {roll:string};
    const user1:userWithRoll1={
        name:"sajjad hussain",
        profession:"student",
        age:25,
        roll:"developer"
    }
    // console.log(user1);
    interface User2{
        name:string;
        age:number;
    }
    interface UserWithRoll2 extends User2{
        roll:string;
    }
    const user2:User2={
        name:"sajjad",
        age:25,
        roll:"programmer"
    }
    // console.log(user2);
    //we can declare arrya with type also in typescript
    type Roll1=number[];
    const rollNumber1:Roll1=[1,2,3];
    // console.log(rollNumber1);
    //array declaring using interface
    interface Roll2{
        [index:number]:number
    }
    const rollNumber2=[3,4,5];
    // console.log(rollNumber2);
    //we can use type and interface in function also
    type Add1=(num1:number,num2:number)=>number;
    const add1:Add1=(num1,num2)=>num1+num2;
    // console.log(add1(45,32));
    //using interface function aliasing
    interface Add2{
        (num1:number,num2:number):number;
    }
    const add2:Add2=(num1,num2)=>num1+num2;
    console.log(add2(33,33));

}