
function Button(props) {
    return (
        <section className="button">
            <button className={props.btnType}>{props.btnText}</button>
        </section>
    )
}

export default Button;