import { LightningElement, track } from 'lwc';

export default class Accounts extends LightningElement {
    //@wire(getAccounts)
    @track accounts;

    connectedCallback() {
        fetch('api/accounts')
            .then((response) => {
                return response.json();
            })
            .then((accounts) => {
                this.accounts = accounts;
            });
    }

    renderedCallback() {
        console.log('Accounts:::', this.accounts);
        //console.log("Accounts:::", JSON.stringify(this.Accounts));
    }
}
