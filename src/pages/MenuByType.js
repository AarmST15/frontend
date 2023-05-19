import { useEffect, useState } from "react";
import '../styles/Menu.css'
import '../styles/MenuByType.css'
import { Container, Row } from 'react-bootstrap';
import * as React from 'react';
import MenuCard from "../components/MenuCard";

export default function MenuByType({ handleClick }) {

    const [items, setItem] = useState([])
    const [menus, setMenu] = useState([])
    const [selected, setSelected] = useState(false)


    let select;

    const options = [
        { label: 'Coffee', value: 'coffee' },
        { label: 'Tea', value: 'tea' },
        { label: 'Milk', value: 'milk' },
        { label: 'Soda', value: 'soda' },
        { label: 'Bakery', value: 'bakery' },
        { label: 'Water', value: 'water' }
    ];

    useEffect(() => {
        fetch("http://127.0.0.1:8082/menuitem")
            .then(res => res.json())
            .then(
                (result) => {
                    setItem(result);
                }
            )
    }, [])

    const getMenu = () => {
        fetch("http://127.0.0.1:8082/menuitem/" + select)
            .then(res => res.json())
            .then(
                (result) => {
                    setMenu(result);
                }
            )
    }

    if (selected) {
        return (
            <>
                <div className="select-container">
                    <button className="filter-btn" onClick={(e) =>
                        e.preventDefault(
                            select = "*",
                            getMenu(),
                            setSelected(false)
                        )}>
                        All
                    </button>
                    {options.map(opt =>
                        <button className="filter-btn" onClick={(e) =>
                            e.preventDefault(
                                select = opt.value,
                                setSelected(true),
                                getMenu()
                            )}>
                            {opt.label}
                        </button>
                    )}
                    <Container>
                        <Row>
                            {menus?.map(menu => {
                                return (
                                    <MenuCard key={menu.menuId} m={menu} handleClick={handleClick} />
                                )
                            })}
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="select-container">
                    <button className="filter-btn" onClick={(e) =>
                        e.preventDefault(
                            select = "*",
                            getMenu(),
                            setSelected(false)
                        )}>
                        All
                    </button>
                    {options.map(opt =>
                        <button className="filter-btn" onClick={(e) =>
                            e.preventDefault(
                                select = opt.value,
                                setSelected(true),
                                getMenu()
                            )}>
                            {opt.label}
                        </button>
                    )}
                    <Container>
                        <Row>
                            {items?.map(menu => {
                                return (
                                    <MenuCard key={menu.menuId} m={menu} handleClick={handleClick} />
                                )
                            })}

                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}