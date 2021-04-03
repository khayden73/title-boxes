import { TitleBox } from "./TitleBox";
import styles from "./TitleBoxes.module.scss";
import { boxes } from "../lib/boxes";
import { Controls } from "./Controls";

export const TitleBoxes = () => {
    return (
        <div className={styles["title-boxes"]}>
            <section className={styles["title-boxes-container"]}>
                {boxes.map((box, index) => (
                    <TitleBox key={index} {...box} />
                ))}
            </section>
            <Controls />
        </div>
    );
};
