{
    //type assertion:as a developer when anyone can understand better than typescript,then it can be said type assertion

    //example-1
    let anything:any;
    anything ="Next level web development";
    anything=222.2342;
    anything=(anything as number).toFixed(2);
    //example-2
    const kgTogram=(value:string|number|undefined):string|number|undefined =>{
        if(typeof value === "string"){
            const convertedValue = parseFloat(value)*1000;
            return `The convertedValue is " ${convertedValue}`;
        }
        if(typeof value === "number"){
            return value*1000;
        }
    }

    const result1=kgTogram(1000) as number;
    const result2=kgTogram('50') as string;
    // console.log(result1);
    // console.log(result2);

    type CustomError={
        message:string;
    }
    try{

    }
    catch(error){
        console.log((error as CustomError).message);
    }
}