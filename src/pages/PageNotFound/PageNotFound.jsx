import { Link } from 'react-router-dom';
import { StyledWrapper } from './PageNotFound.styled';

const PageNotFound = () => {
  return (
    <StyledWrapper>
      <h1>Ooops... Page is not found</h1>
      <p>
        You can go to
        <Link to="/">Home</Link>
        page
      </p>
    </StyledWrapper>
  );
};

export default PageNotFound;
