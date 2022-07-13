

const Button = (props) =>{
    <button type={props.type} onClick={props.callFunction} className = {props.className}>{props.child}</button>
}

export default Button;