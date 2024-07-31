

/*
Product Serial
Product Name
Product Price
Product Category

*/

import { ProductItemType } from "./product-item-type";

export default function Product({id, price, name, category}: ProductItemType) {
    return (
        <tr >
            <td style={{ border: '1px solid black', padding: '10px' }}>{id}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{name}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{price}</td>
            <td style={{ border: '1px solid black', padding: '10px' }}>{category}</td>
        </tr>


    )
}