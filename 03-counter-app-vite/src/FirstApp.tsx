import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle, name}) => {

    return(
        <>
            <h1 data-testid="test-title">{ title }</h1>
            {/* <h1>{ greetings() }</h1> */}
            <p>{ subTitle }</p>
            <p>{name}</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
}

FirstApp.defaultProps = {
    name: "Fernando",
    subTitle: "No hay subtítulo",
    // title: "No hay título"
}
