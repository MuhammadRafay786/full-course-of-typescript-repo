// its same as if else but it easy and ease read able.
// all explanition wrie in copy
let marks:number = 77
switch (true) // here writes true because its not run code
 {
    case marks>90 && marks<=100:
        console.log("your grade is A+" );
        break;
        case marks>80 && marks<= 90:
            console.log("your grade is A" );
            break;
            case marks>70 && marks<=80:
                console.log("your grade is b" );
                break;
                case marks>60 && marks<=70:
                    console.log("your grade is c" );
                    break;
                    case marks>50 && marks<=60:
                        console.log("your grade is d" );
                        break;
                                        
    default:
        console.log("grade F ");
        
        break;
}