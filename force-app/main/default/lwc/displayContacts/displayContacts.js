import { LightningElement, api, wire,track} from 'lwc';
import fetchContacts from '@salesforce/apex/MyNewClass.fetchContacts';

const col =[
    {label : 'First Name', fieldName : 'FirstName', type : 'text'},
    {label : 'Last Name', fieldName : 'LastName', type : 'text'},
    {label : 'Email', fieldName : 'Email', type : 'email'},
    {label : 'Phone', fieldName : 'Phone', type : 'phone'}
];


export default class DisplayContacts extends LightningElement {

    @api recordId;
    @track data;
    @track error;
    @track greeting = 'World';
    
    columns = col;

    constructor(){
        super();
    }

    handleChange(event){
        this.greeting = event.target.value;
    }


    @wire(fetchContacts, {accountId : '$recordId'})
    wiredContacts({data, error}){

        if(data){
            console.log('data',data);
            this.data = data;
        }else if(error){
            console.log('error',error);
            this.error = error;
        }
    }
}