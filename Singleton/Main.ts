import {Connection} from "./Connection";

let connection1 = Connection.getInstance();
let connection2 =Connection.getInstance();


if (connection1 === connection2) {
    console.log('Singleton works, both variables contain the same instance.');
} else {
    console.log('Singleton failed, variables contain different instances.');
}
