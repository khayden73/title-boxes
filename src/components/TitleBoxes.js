import { useState } from "react";
import styles from "./TitleBoxes.module.scss";
import { Controls } from "./Controls";
import { Screen } from "./Screen";

export const TitleBoxes = () => {
    // const [paused, setPaused] = useState(true);
    const [play, setPlay] = useState(false);

    return (
        <div className={styles["title-boxes"]}>
            <Screen play={play} />
            <Controls play={() => setPlay(true)} />
        </div>
    );
};
