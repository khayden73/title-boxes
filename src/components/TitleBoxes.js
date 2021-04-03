import { TitleBox } from "./TitleBox";
import styles from "./TitleBoxes.module.scss";

const boxes = [
    {
        title: "director",
        names: ["john doe"],
    },
    {
        title: "writers",
        names: ["john smith", "jane doe"],
    },
    {
        title: "created by",
        names: ["stan lee"],
    },
];

export const TitleBoxes = () => {
    return (
        <div className={styles["title-boxes"]}>
            {boxes.map((box) => (
                <TitleBox {...box} />
            ))}
        </div>
    );
};
