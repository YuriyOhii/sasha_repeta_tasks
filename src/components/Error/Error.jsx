import PropTypes from 'prop-types'
import { Message } from './Error.styled'

export const ErrorNotice = ({errorMessage}) => {
    return <p>Something went wrong....<Message>{errorMessage}</Message></p>
};
ErrorNotice.propTypes = {
    errorMessage: PropTypes.string.isRequired,
}