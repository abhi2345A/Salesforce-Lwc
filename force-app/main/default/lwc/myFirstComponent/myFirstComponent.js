import {LightningElement,track,wire,api} from 'lwc';
import fetchContacts from '@salesforce/apex/MyNewClass.fetchContacts';
//import { getRecord } from 'lightning/uiRecordApi';

export default class MyFirstComponent extends LightningElement{


    /*@track student={name:'vijay',age:26};

    @track fruits = ['apple','orange','mango'];

    handleClick(){

        this.student.name = 'Kurra';
        this.student.age = 27;
    }

    handleAddFruit(){
        this.fruits.push('pineApple');
    }*/

    /*handleClick(){

        alert('Hello from parent');

        let childComp = this.template.querySelector('c-child-component');
        childComp.childMethod();
    }*/

    @api recordId;
    @track data;
    @track error;

    /* wire
    @wire(fetchContacts, {accountId : '0015g00000gMUX9AAO'})
    wiredContacts({data, error}){


        if(data){
            this.data = data;
            console.log('data'+data);
        }else if(error){
            this.error = error;
            console.log('error'+error)
        }

        console.log('executed');
    }
    */ 

    // Imperative call

    handleClick(){

        fetchContacts({accountId : '0015g00000gMUX9AAO'})
            .then((result) => {
                this.data = result;
                console.log('Fetched Data:'+ this.data);
            })
            .catch((error) => {
                this.error = error;
                console.log('error:'+ this.error);
            })


        let fruits = ['Apple','Orange','Mango','Grapes'];

        for(let fruit of fruits){
            console.log(fruit);
        }
    }

    


}