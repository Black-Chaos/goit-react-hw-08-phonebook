import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { StyledBackButton } from './BackButton.styled';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <StyledBackButton type="button" onClick={() => navigate('/')}>
      <BsFillArrowLeftCircleFill size={30} />Home
    </StyledBackButton>
  );
}
