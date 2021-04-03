import { useState } from "react";
import cn from "classnames";
import styles from "./TitleBoxes.module.scss";
import { Controls } from "./Controls";
import { Screen } from "./Screen";

export const TitleBoxes = () => {
    const [animating, setAnimating] = useState(false);

    const css = cn(styles["title-boxes"], {
        animating: animating,
    });

    return (
        <div className={css}>
            <Screen animating={animating} />
            <Controls play={() => setAnimating(true)} pause={() => setAnimating(false)} />
        </div>
    );
};
