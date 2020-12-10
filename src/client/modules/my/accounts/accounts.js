import { LightningElement, track } from 'lwc';

export default class Accounts extends LightningElement {
    //@wire(getAccounts)
    @track accounts;

    accounts = [
        {
            Id: 1,
            Name: 'Birlasoft',
            Industry: 'IT',
            Phone: '123456789'
        },
        {
            Id: 2,
            Name: 'Amazon',
            Industry: 'IT',
            Phone: '123456789'
        },
        {
            Id: 3,
            Name: 'Cap',
            Industry: 'IT',
            Phone: '123456789'
        }
    ];

    renderedCallback() {
        console.log('Accounts:::', this.accounts);
        //console.log("Accounts:::", JSON.stringify(this.Accounts));
    }
}
