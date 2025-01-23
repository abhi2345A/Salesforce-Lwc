import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super();
        console.log('child constructor invoked');
    }

    connectedCallback(){
        console.log('child connectedCallback invoked');
    }

    renderedCallback(){
        console.log('child renderedCallback invoked');
    }

    disconnectedCallback(){
        console.log('child disconnectedCallback invoked');
    }

}