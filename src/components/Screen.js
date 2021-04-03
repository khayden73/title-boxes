import cn from "classnames";
import { boxes } from "../lib/boxes";
import { TitleBox } from "./TitleBox";
import styles from "./Screen.module.scss";

export function Screen(props) {
    const { paused = true } = props;
    const css = cn(styles.screen, {
        [`${styles.paused}`]: paused,
    });
    return (
        <main className={css}>
            {boxes.map((box, index) => (
                <TitleBox key={index} {...box} />
            ))}
        </main>
    );
}
