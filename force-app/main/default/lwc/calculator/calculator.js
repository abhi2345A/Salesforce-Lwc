import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {

    @track result;
    firstNumber;
    secondNumber;

    numberInputHandler(event){
        const inpName = event.target.name;

        if(inpName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if(inpName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }

    }

    handleAddition(){
        const fn = parseInt(this.firstNumber);
        const Sn = parseInt(this.secondNumber);

        this.result = `Result of ${fn} + ${Sn} is: ` + (fn + Sn);
    }

    handleSubtraction(){
        const fn = parseInt(this.firstNumber);
        const Sn = parseInt(this.secondNumber);

        this.result = `Result of ${fn} - ${Sn} is: ` + (fn - Sn);
    }

    handleMultiplication(){
        const fn = parseInt(this.firstNumber);
        const Sn = parseInt(this.secondNumber);

        this.result = `Result of ${fn} * ${Sn} is: ` + (fn * Sn);
    }

    handleDivision(){
        const fn = parseInt(this.firstNumber);
        const Sn = parseInt(this.secondNumber);

        this.result = `Result of ${fn} / ${Sn} is: ` + (fn / Sn);
    }
}