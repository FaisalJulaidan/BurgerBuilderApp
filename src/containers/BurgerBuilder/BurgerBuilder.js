import React from 'react'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 2,
            meat: 2,
            ShouldBeNull:3
            
        }
    }
    render () {
        return (
            <div>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </div>
        );
    }



}


export default BurgerBuilder;