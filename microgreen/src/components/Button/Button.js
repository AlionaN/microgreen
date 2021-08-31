import './Button.module.scss';

function Button(btnText) {
  return (
    <button type="button" className="btn">{btnText}</button>
  );
}

export default Button;
