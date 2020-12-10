/* eslint-disable no-console */
import { LightningElement, track } from 'lwc';

export default class Accounts extends LightningElement {
    //@wire(getAccounts)
    @track accounts;

    accounts = [
        {
            Id: 1,
            Name: 'Birlasoft',
            Industry: 'IT'
        },
        {
            Id: 2,
            Name: 'Amazon',
            Industry: 'IT'
        },
        {
            Id: 3,
            Name: 'Cap',
            Industry: 'IT'
        }
    ];

    renderedCallback() {
        console.log('Accounts:::', this.accounts);
        //console.log("Accounts:::", JSON.stringify(this.Accounts));
    }
}
