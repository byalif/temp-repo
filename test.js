
// let g= ['blue', 'yellow', 'brown'];

// class Person{
//     constructor(name, age, salary){
//         this.name= name;
//         this.age=age;
//         this.salary=salary;
//     }
//     mySalary(){
//         console.log(`my name is ${this.name} and my salary is ${this.salary}`);
//     }
// }

// class Alif extends Person{
//     constructor(name, age, salary, height, weight){
//         super(name, age, salary);
//         this.height= height;
//         this.weight= weight;
//     }
// }

// let me = new Alif("alif", 21, 2000, 72, 185);


// function getData(data, callback){
//     setTimeout(() => {
//         console.log(`Reading from database`);
//         callback({
//             data: data,
//             salary: 7000
//         });
//     }, 2000);
// };
 
// getData(5,(content)=>{ //loops through the callback function
//     console.log(content); //and prints every attribute
// });
 
// me.mySalary();

// let x=true;
// prom = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(x!=true){
//                 reject(new Error("oops something went wrong"));
//             }
//             else{
//                 resolve({
//                 colors: g
//                 }); 
//             }
//         }, 2000);
//     });
//     prom.then((content)=>{
//         console.log(content);
//     });
//     prom.catch((err)=>console.log("I did catch: ", err.message));

//     let hol= [1,2,3,4,5,6];

//     let p = hol.map((x)=>{
//         return x*x;
//     });

//     console.log(p);

//     const names= require("./4-names");
//     const person= require("./func");
//     person.age(34);

// const os = require("os");
// const user= os.userInfo();

// const currentOs= {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// const fs = require("fs");


// const newFile = fs.readFileSync(`./textfiles/first.txt`, `utf8`);
// console.log(newFile);

// fs.writeFileSync(`./textfiles/newtext.txt`,`This is my new file \n${newFile}`);


// const fs= require("fs");


// fs.readFile(`./textfiles/first.txt`, `utf8`, (err, data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data);
//     const first= data;
//     fs.readFile(`./textfiles/second.txt`, `utf8`, (err,data)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log(data);
//         const second= data;
//             fs.writeFile(`./textfiles/newtext.txt`, `${first}\n${second}`, (err, data)=>{
//             if(err){
//                 console.log(err);
//                 return;
//             }
//             console.log("File has been written");
//         })
//     });
// });

const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write("home page");
        res.end();
    }
    else if(req.url === '/about'){
        res.write("about page");
        res.end();
    }
    else{
    res.write(`<h1>oops. 404 page not found</h1><br>`);
    res.write(`<a href="/"> Back to homepage <a/><br>`);
    res.end();
    }
});


server.listen(5000, ()=>{
    console.log(`server is up and running`);
});
