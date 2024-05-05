{
    //conditional type
    type a1=number;
    type b1=string;

    type x = a1 extends number?number:boolean;
    type y = a1 extends null?null:b1 extends string?string:undefined;

    type Sheikh={
        bike:string;
        car:string;
        ship:string;
        plane:string
    }

    type CheckVehicle<T>=T extends keyof Sheikh ?true:false;

    type HasBike = CheckVehicle<"ship">;
    type HasPlane = CheckVehicle<"plane">;
}