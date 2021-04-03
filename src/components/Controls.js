import styles from "./Controls.module.scss";

export const Controls = () => {
    return (
        <div className={styles.controls}>
            <button>play</button>
            <button>pause</button>
        </div>
    );
};
