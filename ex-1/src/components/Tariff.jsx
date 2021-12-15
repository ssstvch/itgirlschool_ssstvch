import React from 'react';

const Tariff = (props) => {
    const {tariff, tariffName, price, speed, id, profit} = props;
    return(
        <React.Fragment>
            <article key={id} className={`tariff`} id={profit}>
                <div className="tariff__title_wrapper">
                    <h2 className={`tariff__title ${tariff}`}>{tariffName}</h2>
                    <div className={`tariff__dark-wrapper tariff__title_dark`}></div>
                </div>
                
                <div className={`tariff__price price ${tariff}`}>
                    <p className={`price__currency`}>руб</p>
                    <p className={`price__value`}>{price}</p>
                    <p className={`price__period`}>/мес</p>
                </div>
                <div className={`tariff__speed`}>до {speed} Мбит/сек</div>
                <div className={`tariff__dark-wrapper`}>
                    <div className={`tariff__info`}>Объём включенного трафика не ограничен</div>
                </div>
            </article>
        </React.Fragment>
    )
}

export default Tariff