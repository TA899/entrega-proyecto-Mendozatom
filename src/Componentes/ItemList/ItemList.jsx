import { Item } from "../Item/Item"; 
import style from './ItemList.module.css';

export function ItemList({ productos }) { 
return ( 
<div className={style.productos}> 
{productos.map(prod => ( 
<Item key={prod.id} {...prod} /> 
))} 
</div> 
); 
} 