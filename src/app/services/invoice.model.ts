export class Invoice {

    private Invoicenumber:string;
    private DateString:string;
    private Name:string;
    private NetValue:string;
    private VAT:number;


    constructor(invoiceNumber:string, date:string, name:string, netvalue:string, vat:number)
    {
        this.Invoicenumber=invoiceNumber;
        this.DateString=date;
        this.Name=name;
        this.NetValue=netvalue;
        this.VAT=vat;
    }
}