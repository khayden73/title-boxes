import PropTypes from "prop-types";
import styles from "./TitleBox.module.scss";

export const TitleBox = (props) => {
    console.log("[TitleBox] props: ", props);
    const { title, names, number } = props;
    const onEnd = () => {
        if (typeof finished === "function") {
            // finished();
        }
    };

    const onStart = () => {
        if (typeof started === "function") {
            // started();
        }
    };

    return (
        <figure className={styles["title-box"]} data-number={number} onAnimationStart={onStart} onAnimationEnd={onEnd}>
            <figcaption className={styles["caption"]}>
                <span className={styles.title}>{title}</span>
                {names.map((name, index) => (
                    <span key={index} className={styles.name}>
                        {name}
                    </span>
                ))}
            </figcaption>
        </figure>
    );
};

TitleBox.propTypes = {
    number: PropTypes.number,
    title: PropTypes.string,
    names: PropTypes.arrayOf(PropTypes.string),
};
