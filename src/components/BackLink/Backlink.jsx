import PropTypes from 'prop-types';
import { Icon, StyledLink } from './BackLink.styled';

export const BackLink = ({ link, children }) => {
  return (
    <div>
      <StyledLink to={link}>
        <Icon />
        {children}
      </StyledLink>
    </div>
  );
};

BackLink.ptopTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.any,
};
