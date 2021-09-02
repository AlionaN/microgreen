import './Button.module.scss';

interface IProps {
  btnText: string
}

function Button(btnText: IProps) {
  return (
    <button type="button" className="btn">{btnText}</button>
  );
}

export default Button;
