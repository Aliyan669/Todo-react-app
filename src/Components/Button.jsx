function Button(props) {
    return (
      <button
        className={props.Class}
        onClick={props.onClick}
        type={props.Type}
      >
        {props.btnName}
      </button>
    );
  }
  export default Button;
