import { useState } from "react";
import cn from "classnames";
import styles from "./Controls.module.scss";

export const Controls = (props) => {
    const [paused, setPaused] = useState(true);
    const play = () => {
        if (typeof props.play === "function") {
            props.play();
            return;
        }
        alert("no play function attached!");
    };
    const pause = () => {
        if (typeof props.pause === "function") {
            props.pause();
            return;
        }
        alert("no pause function attached!");
    };
    const clicked = () => {
        console.log("[Controls] clicked: ", paused);
        if (paused) {
            play();
        } else {
            pause();
        }
        setPaused(!paused);
    };
    const btnCss = cn({
        [`${styles.paused}`]: paused,
    });
    console.log("[Controls] paused: ", paused);
    return (
        <div className={styles.controls}>
            <button onClick={clicked} className={btnCss} />
        </div>
    );
};
