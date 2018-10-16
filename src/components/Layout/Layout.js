import React from 'react';
import styles from './Layout.module.css'

const layout = ( props ) => (
    <div className={styles.layout}>
        <p>Hi from layout</p>
        <main>
            {props.children}
        </main>
    </div>
    
)

export default layout;