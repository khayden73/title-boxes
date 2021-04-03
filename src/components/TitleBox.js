import PropTypes from "prop-types";
import styles from "./TitleBox.module.scss";

export const TitleBox = (props) => {
    const { title, names } = props;
    return (
        <figure className={styles["title-box"]}>
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
    title: PropTypes.string,
    names: PropTypes.arrayOf(PropTypes.string),
};
