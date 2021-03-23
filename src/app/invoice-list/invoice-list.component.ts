import { Component, OnInit } from '@angular/core';
import {Invoice} from '../services/invoice.model'
import {InvoiceService} from '../services/invoice.service'

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {
invoices = [];
_invoiceService:InvoiceService;
  constructor() { }

  ngOnInit(): void {
    this.invoices = this._invoiceService.getInvoices();
    console.log(this.invoices);
  }

}
