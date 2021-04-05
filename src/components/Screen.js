import cn from "classnames";
import { boxes } from "../lib/boxes";
import { TitleBox } from "./TitleBox";
import styles from "./Screen.module.scss";

export function Screen(props) {
    const { play = false } = props;

    console.log("[Screen] play", play);

    const css = cn(styles.screen, {
        [`${styles.play}`]: play,
    });
    return (
        <main className={css}>
            {boxes.map((box, index) => (
                <TitleBox key={index} number={index} {...box} />
            ))}
        </main>
    );
}
