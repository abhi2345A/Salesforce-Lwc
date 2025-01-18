import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    
    @api message;

    @api childMethod(){
        alert('Hello from child');
    }
}