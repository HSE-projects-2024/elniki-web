import React from "react";

export const Navbar= () => {
    return (
        <div className="flex py-4 justify-between items-center">

            <ul className="flex gap-8">
                <li>
                    <a href="/" className="menu-item">Главная</a>
                </li>
                <li>
                    <a href="/order" className="menu-item">Заказ ски-пасса</a>
                </li>
                <li>
                    <a href="/buy" className="menu-item">Покупка ски-пасса</a>
                </li>
            </ul>
        </div>
    )
}