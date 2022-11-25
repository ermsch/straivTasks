import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from 'src/app/mock-products';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  //Task Nr. 3

  //to keep it clean
  products = PRODUCTS

  //Method that prints out the query parameters of a product to the console
  //info: setTimeout is used so that the method can execute after the query parameters have changed
  detailsToConsole() {
    setTimeout(() => {
      const urlParams = new URLSearchParams(location.search);
      const obj = Object.fromEntries(urlParams)
      console.log(obj)

      //another way, slighty diffrent result
      // for (const [key, value] of urlParams) {
      //   console.log(`${key}: ${value}`);
      // }
    }, 100);

  }

  constructor() { }

  ngOnInit(): void {
  }

}
