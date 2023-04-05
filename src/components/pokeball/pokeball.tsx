import React from 'react';
import styles from './pokeball.module.scss';

export const Pokeball = () => {
    return (
        <div className={styles["pokeball"]}>
            <div className={styles["pokeball__button"]} />
        </div>
    );
};

Pokeball.displayName = 'Pokeball';