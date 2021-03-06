import { Component, OnInit } from '@angular/core';
import { IProduct, Product } from './product';
import { ProductService } from './product.service';

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
<<<<<<< HEAD
    listFilter: string = '';
    list: IProduct[];

    constructor(private _productService : ProductService){

    }

=======
    listFilter: string = 'cart';
    /*products: IProduct[]= [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
         },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
        ];
*/
        list: Product[] = [new Product(2, "garden cart", "GDN-0023", "March 18, 2016", "15 gallon capacity rolling garden cart", 32.99, 4.2, "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"),
                        new Product(5, "Leaf Rake", "GDN-0011", "March 19, 2016", "Leaf rake with 48-inch wooden handle.", 19.95, 3.2, "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"),
                        new Product(1, "Hammer", "TBX-0048", "May 21, 2016", "Curved claw steel hammer", 8.9, 4.8, "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png")];
        
>>>>>>> 57657250b2105cacd04dfba4a30caa303bc55153
    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    ngOnInit(): void {
        this.list = this._productService.getProducts();
    }

    onRatingClicked(message: string) : void {
        this.pageTitle = 'Product List : ' + message;
        console.log('clicked ');
    }

    
}