import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ ...rest }) => {

    return (
        <button className={styles.box} {...rest} />
    )
};

export default Button;