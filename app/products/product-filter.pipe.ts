import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{

    transform (value : IProduct[], filterBy : string) : IProduct[]{
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
<<<<<<< HEAD
        return filterBy ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value ;
=======
        return filterBy ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
>>>>>>> 57657250b2105cacd04dfba4a30caa303bc55153
    }
}