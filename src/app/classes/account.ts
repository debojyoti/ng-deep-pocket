import { ConnectorService } from "../connector.service";

export class Account {
    public type;
    public name;
    public holderName;
    public id;
    public accNumber;
    public balance;

    constructor() {
        this.balance = 0;
    }


}
