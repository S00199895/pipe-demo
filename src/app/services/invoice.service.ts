import { Injectable } from '@angular/core';
import {Invoice} from './invoice.model'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  invoice:Invoice;

  invoiceList= [ new Invoice('500', '2019/12/07', 'Acme Services', '502.12', .175),
                  new Invoice('350', '2010/03/07', 'Right Hand Man', '310.00', .200)]

  constructor() { }

  getInvoices()
  {
    return this.invoiceList;
  }
}
