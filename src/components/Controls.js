import { useState } from "react";
import cn from "classnames";
import styles from "./Controls.module.scss";

export const Controls = (props) => {
    const [start, setStart] = useState(false);
    const play = () => {
        if (typeof props.play === "function") {
            props.play();
            return;
        }
        alert("no play function attached!");
    };
    const clicked = () => {
        if (!start) {
            setStart(true);
            play();
        }
    };
    const btnCss = cn({
        [`${styles.play}`]: play,
    });
    console.log("[Controls] start: ", start);
    return (
        <div className={styles.controls}>
            <button onClick={clicked} className={btnCss} disabled={!play} />
        </div>
    );
};
