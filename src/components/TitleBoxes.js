import { useState } from "react";
import styles from "./TitleBoxes.module.scss";
import { Controls } from "./Controls";
import { Screen } from "./Screen";

export const TitleBoxes = () => {
    const [paused, setPaused] = useState(true);

    return (
        <div className={styles["title-boxes"]}>
            <Screen paused={paused} />
            <Controls pause={() => setPaused(true)} play={() => setPaused(false)} />
        </div>
    );
};
