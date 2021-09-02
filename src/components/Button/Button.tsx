import styles from './Button.module.scss';

interface IProps {
  btnText: string
}

function Button({ btnText }: IProps) {
  return (
    <button type="button" className={styles.btn}>{btnText}</button>
  );
}

export default Button;
