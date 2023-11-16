import { Outlet } from "react-router-dom";
import { useState } from "react";

export function ProductsLayout ()
{
    const Library = [
        {id:1, name:"Стрейч-ботфорти зимові шкіряні чорні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 6870, photo:"../images/1.jpg" },
        {id:2, name:"Зимові кеди шкіряні молочні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 3510, photo:"../images/2.jpg" },
        {id:3, name:"Ботильйони чорні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 4630, photo:"../images/3.jpg" },
        {id:4, name:"Ботильйони чорні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 3990, photo:"../images/4.jpg" },
        {id:4, name:"Уггі молочні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 4470, photo:"../images/5.jpg" },
        {id:4, name:"Стрейч-ботфорти осінні шкіряні чорні Estro", period:"ОСІНЬ-ЗИМА 23/24", price: 7670, photo:"../images/6.jpg" },
    ];
    const [products, setProducts] = useState (Library);
    return (
        <>
        <Outlet context={[products, setProducts]}/>
        </>
    )
}