import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Product } from '../invoice-container/invoice-container.component';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.css']
})
export class InvoiceFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  form: FormGroup;
  formGroup: FormGroup;
  routerNavigateByUrl: any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [],
      name: [''],
      quantity: [],
      price: [],


    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
      this.save.emit(this.formGroup.value);

    }
  }

}
