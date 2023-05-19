import { useState, useEffect } from 'react';

export default function IncomeCard() {

    const [incomes, setIncomes] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8082/cafeorder-income')
            .then(res => res.json())
            .then(
                (result) => {
                    setIncomes(result);
                }
            )
    })

    return (
        <>
            <div className='income'>
                {incomes.map(income =>
                    <h3>Income {income.total_income}</h3>
                )}

            </div>
        </>
    )
}