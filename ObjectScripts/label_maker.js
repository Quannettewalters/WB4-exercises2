// function printEmployeeAndPay(emp) {
//     console.log("Name: " + emp.name);
//     console.log("Pay: " + emp.payRate);
//     }
//     let emp1 = {
//     employeeId: "1",
//     name: "Ezra",
//     jobTitle: "Theater Teacher",
//     payRate: 38.46
//     };
//     let emp2 = {
//     employeeId: "2",
//     name: "Elisha",
//     jobTitle: "Game Programmer",
//     payRate: 43.27
//     };
//     printEmployeeAndPay(emp1);
//     printEmployeeAndPay(emp2);

function printContact(myInfo){
    console.log(myInfo.name);
    console.log(myInfo.address);
    console.log(myInfo.city, myInfo.state, myInfo.zip);
}
let myInfo = {
    name: "Quannette Walters",
    address: "123 Sandy Springs Dr",
    city: "Atlanta",
    state: "Georgia",
    zip: 30328
};
printContact(myInfo);