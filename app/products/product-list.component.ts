import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { Product } from './product';

@Component ({
    selector:'pm-products',
    moduleId: module.id,
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle: string ='Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage:boolean = false;
    listFilter: string = '';
    list: Product[] = [new Product(2, "garden cart", "GDN-0023", "March 18, 2016", "15 gallon capacity rolling garden cart", 32.99, 4.2, "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"),
                        new Product(5, "Leaf Rake", "GDN-0011", "March 19, 2016", "Leaf rake with 48-inch wooden handle.", 19.95, 3.2, "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"),
                        new Product(1, "Hammer", "TBX-0048", "May 21, 2016", "Curved claw steel hammer", 8.9, 4.8, "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png")];
        
    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    ngOnInit(): void {
        console.log('on init');
    }

    onRatingClicked(message: string) : void {
        //this.pageTitle = 'Product List : ' + message;
        console.log('clicked ');
    }

    
}