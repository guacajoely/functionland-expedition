// 1. Introduction to Functions
// Practice: Filling the Tank

const fillGasTank = (gallons) => {

    if (gallons < 16){
    console.log(`I filled the tank with ${gallons} gallons of gas`)
    }
    else{
        console.log("You cannot add this much gas to the tank")
    }
}

fillGasTank(15)



///////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Mouthy Functions

// Define a parameter that will hold the value of the original number.
const quarterValue = (originalNum) => {

// Divide that number by 4
const quarter = (originalNum / 4)
// Return the quartered number
return quarter
}

// Invoke the function and store the return value
let newNum = quarterValue(4)

// Plug that variable into the parenthesis for the console.log()
console.log(newNum)



///////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Problem Solving: Deconstruction
// Write a function for each task
// In the function body, just console.log() a description of the task
// Invoke the tasks in the correct order

//MORNING ROUTINE
// 1. exercise (in theory)
// 2. shower
// 3. contacts 
// 4. brushTeeth
// 5. deodorant
// 6. coffee
// 7. breakfast
// 8. journal

const exercise = () => {
	console.log("Start the day with some pushups or cardio (walking to the shower).")
}

const shower = () => {
	console.log("Take a shower.")
}

const contacts = () => {
	console.log("Put in my contacts so I can see stuff.")
}

const brushTeeth = () => {
	console.log("Brush my teeth so I still have a girlfriend tomorrow")
}

const deodorant = () => {
	console.log("Apply deodorant under BOTH arms")
}

const coffee = () => {
	console.log("NEED coffee. Prepare coffee and drink it.")
}

const breakfast = () => {
	console.log("NEED food. Prepare food and eat it.")
}

const journal = () => {
	console.log("Brain still not worky. Update journal to reflect on yesterday and prepare for today")
}

exercise()
shower()
contacts()
brushTeeth()
deodorant()
coffee()
breakfast()
journal()



///////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Design a Calculator

const add = (num1, num2) => {
    let result = num1 + num2
    return result
}

//Make sure that you invoke your functions, 
//store the return value in a variable, 
//and then console.log() the result to verify that your functions work as expected.

const subtract = (num1, num2) => {
    return num1 - num2

}

const divide = (num1, num2) => {
    return num1 / num2
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const square = (num) => {
    return num * num
}

subResult = subtract(10,4)
console.log(subResult)

divResult = divide(20,4)
console.log(divResult)

multiResult = multiply(20,5)
console.log(multiResult)

squareResult = square(4)
console.log(squareResult)



///////////////////////////////////////////////////////////////////////////////////////////////////
// 5. Design a Car Factory

// create empty chasis
const chassis = {}

// functions to add key value pairs to chassis object
const addWheels = (chassis) => {
    chassis.wheels = 4;
    return chassis
}

const addEngine = (chassis) => {
    chassis.engine = "4.8L";
    return chassis
}

const addSteeringWheel = (chassis) => {
    chassis.steeringWheel = "Tilting";
    return chassis
}

const addDriveTrain = (chassis) => {
    chassis.driveTrain = "Two wheel drive";
    return chassis
}


// invoke each function, store the returned object in a variable, and then use console.log() to ensure that each of your little minions is doing its job correctly.
let chassisWithWheels = addWheels(chassis)
console.log(chassisWithWheels)

let chassisWithEngine = addEngine(chassis)
console.log(chassisWithEngine)

let chassisWithSteeringWheel = addSteeringWheel(chassis)
console.log(chassisWithSteeringWheel)

let chassisWithDriveTrain = addDriveTrain(chassis)
console.log(chassisWithDriveTrain)



///////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Design a Candy Factory

// 1. Buy some milk chocolate

let candy = {}

const buyChocolate = () => {
    candy.type = "Milk chocolate";
    return candy
}

console.log(buyChocolate())


// 2. Add some mint flavoring
const addFlavor = (flavor) => {
    candy.flavor = flavor;
    return candy
}

console.log(addFlavor('mint'))


// 3. Combine the chocolate and mint
const makeBarkMixture = (flavor) => {
    if (flavor === 'mint'){
        candy.mixed = true;
    }

    else{
        candy.mixed = false;
    }
    return candy
}

console.log(makeBarkMixture(candy.flavor))


// 4. Bake the mixture
const bakeCandy = (mixed) => {
    if (mixed === true){
        candy.baked = true;
    }

    else{
        candy.baked = false;
    }
    return candy
}

console.log(bakeCandy(candy.mixed))


// 5. Break the hardened sheet into 6 pieces

const breakBark = (baked) => {
    if (baked === true){
       return ["Mint Chocolate Bark Piece",
                "Mint Chocolate Bark Piece",
                "Mint Chocolate Bark Piece",
                "Mint Chocolate Bark Piece",
                "Mint Chocolate Bark Piece",
                "Mint Chocolate Bark Piece"]
    }
}

console.log(breakBark(candy.baked))



///////////////////////////////////////////////////////////////////////////////////////////////////
// 7. HTML Factory Functions


// EXAMPLE OUTPUT

/* <section id="computer--1">
	<h1>Apple Macbook</h1>
	<div>Model: Pro</div>
	<div>Memory: 32 GB</div>
	<div>Hard drive space: 500 GB</div>
	<div>Processor speed: 2.4 Ghz</div>
</section> */

const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}

const generateHTML = (object) => {

    HTMLString = `
    
    <section id="computer--${object.id}">
        <h1>${object.manufacturer} ${object.make}</h1>
        <div>Model: ${object.model}</div>
        <div>Memory: ${object.specs.memory} GB</div>
        <div>Hard drive space: ${object.specs.hardDrive}</div>
        <div>Processor speed: ${object.specs.processor} Ghz</div>
    </section>
    
`

    return HTMLString

}

console.log(generateHTML(computer))