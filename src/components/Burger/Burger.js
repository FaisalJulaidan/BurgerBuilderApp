import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'



const burger = (props) => {
    const ingredientsPack = Object.keys(props.ingredients).map(ingKey => {
        return [...Array(props.ingredients[ingKey])].map((v, i) => {
            return <BurgerIngredient key={ingKey + i} type={ingKey} />
        });
    });
    console.log(ingredientsPack);
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='burger-top' />
            {ingredientsPack}
            <BurgerIngredient type='burger-bottom' />
        </div>
    )
}

export default burger;