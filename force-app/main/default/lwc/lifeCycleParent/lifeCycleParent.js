import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super();
        console.log('parent constructor invoked');
    }

    connectedCallback(){
        console.log('parent connectedCallback invoked');
    }

    renderedCallback(){
        console.log('parent renderedCallback invoked');
    }

    disconnectedCallback(){
        console.log('parent disconnectedCallback invoked');
    }

    showChild = true;

    handleClick(){

        this.showChild = false;
    }
}