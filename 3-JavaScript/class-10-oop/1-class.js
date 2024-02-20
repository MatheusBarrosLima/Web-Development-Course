//OOP - paradigma 
// entitites or objects (real world)
// properties (attibutes / variables)
// methods (functions)

class Control {
    constructor(temp) {
        this.temperature = temp;
        this.color = "white";
        this.isOn = false;
    };
    on_Off(){
        this.isOn = !this.isOn;

    }

    tempUpper() {
        this.temperature = this.temperature +1;
    }

    tempLower() {
        this.temperature = this.temperature -1;
    }
}

const airControl = new Control (18);
const airControl2 = new Control (22);

console.log(airControl.temperature);
console.log(airControl2.temperature);
console.log(airControl.color);




console.log(airControl.isOn);

airControl.tempUpper();
console.log(airControl.temperature);

airControl.tempLower();
console.log(airControl.temperature);

const buttonUpper =
 document.querySelector(".buttonUpper");
const buttonLower =
document.querySelector(".buttonLower"); 
const buttonOnOff =
document.querySelector(".buttonOnOff");

buttonUpper.addEventListener("click", () =>{
    airControl.tempUpper();
    console.log(airControl.temperature);
});

buttonLower.addEventListener("click", () =>{
    airControl.tempLower();
    console.log(airControl.temperature);
});

buttonOnOff.addEventListener("click", () =>{
    airControl.on_Off();
    console.log(airControl.isOn);
})

airControl.on_Off()
