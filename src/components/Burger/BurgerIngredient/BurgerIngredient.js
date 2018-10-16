import React from 'react';
import styles from './BurgerIngredient.module.css'

const ingredientJSX = {
    'burger-top': <div className={styles.BreadTop}>
                    <div className={styles.Seeds1}> </div>
                    <div className={styles.Seeds2}> </div>
                  </div>,
    'burger-bottom': <div className={styles.BreadBottom}> </div>,
    'meat': <div className={styles.Meat}> </div>,
    'salad': <div className={styles.Salad}> </div>,
    'cheese': <div className={styles.Cheese}> </div>
  }

const ingredient = (props) => {
    if (props.type in ingredientJSX){
        return ingredientJSX[props.type]
    }
    return null;
}

export default ingredient;