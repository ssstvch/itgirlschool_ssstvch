import React from 'react';
import '../styles/superhero.scss';

const Superhero = (props) => {
    console.log(this)
    const {id, name, activity, universe, alterego, image, friends, superpower, more} = props;
    return (<React.Fragment>
        <article className="hero-card">
            <h2 className="hidden">{name}</h2>
            <div className="hero-card__data hero-data">
                <h2 className="hero-card__title">{name}</h2>

                <div className="hero-data__flex-container">
                    <div className="hero-data__flex-info">

                        <div className="hero-data__block">
                            <h3 className="hero-data__title">Деятельность:</h3>
                            <div className="hero-data__text hero-data__text_mini">{activity}</div>
                        </div>
                    
                        <div className="hero-data__block">
                            <h3 className="hero-data__title">Вселенная:</h3>
                            <div className="hero-data__text hero-data__text_mini">{universe}</div>
                        </div>

                        <div className="hero-data__block">
                            <h3 className="hero-data__title">Альтер Эго:</h3>
                            <div className="hero-data__text hero-data__text_mini">{alterego}</div>
                        </div>

                    </div>    
                    
                    <div className="hero-data__imgbox">
                        <img alt="Фото супергероя" className="hero-data__image" src={image}/>
                    </div>
                </div>

                <div className="hero-data__block">
                    <h3 className="hero-data__title">Друзья:</h3>
                    <div className="hero-data__text">{friends}</div>
                </div>

                <div className="hero-data__block">    
                    <h3 className="hero-data__title">Суперспособности:</h3>
                    <div className="hero-data__text">{superpower}</div>
                </div>


                <div className="hero-data__block">
                    <h3 className="hero-data__title">Подробнее:</h3>
                    <div className="hero-data__text">{more}</div>
                </div>

            </div>
        </article>
    </React.Fragment>)
}

export default Superhero;