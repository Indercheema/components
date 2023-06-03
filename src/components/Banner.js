import Button from "./Button";

function Banner(props) {
    let primaryButton = 'Courses';
    let secondaryButton = 'Live Chat';

  return (
    <section className='banner'>
        <section className='overlay'>
            <div className="container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <div className='buttons'>
                    <Button
                    btnType="primaryButton"
                    btnText={primaryButton}
                    />
                    <Button
                    btnType="secondaryButton"
                    btnText={secondaryButton}
                    />
                </div>
            </div>
        </section>
    </section>
  )
}

export default Banner;