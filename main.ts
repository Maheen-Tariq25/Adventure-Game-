#! /usr/bin/env node
import inquirer from "inquirer";

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
        }
        fuelIncrease(){
            this.fuel = 100
        }
    }

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }

}

let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: "Enter your name"
})

let opponent = "Skeleton";

let p1 = new Player(player.name)
let o1 = new Opponent(opponent)

do{
    let ask = await inquirer.prompt([{
      name: "player",
      type: "list",
      message: "What would you like to do?",
      choices: ["Attack", "Health Portion", "Run for your life"]
    }
]);
if(ask.player === "Attack"){
    let num = Math.floor(Math.random() * 2)
    if (num > 0){
        p1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if(p1.fuel <= 0){
            console.log(`\nYou Loose, Better Luck Next Time\n`)
            process.exit()
        }
    }
    if (num <=0){
        o1.fuelDecrease()
        console.log(`${p1.name} fuel is ${p1.fuel}`);
        console.log(`${o1.name} fuel is ${o1.fuel}`);
        if(o1.fuel <= 0){
            console.log(`\n*** You Win ***\n`)
            process.exit()
        }
    }
}
else if(ask.player === "Health Portion"){
p1.fuelIncrease()
console.log(`You drink health portion your fuel is ${p1.fuel}`);
}
else if(ask.player === "Run for your life" ){
    console.log(`\nYou Loose, Better Luck Next Time \n`);
    process.exit()
}
}
while(true)



