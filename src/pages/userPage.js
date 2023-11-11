import { BackButton } from 'components/BackButton/BackButton';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Wrapper } from 'components/partials/wrapper.styled';
import { PageBg } from './stylePages/userPage.style';

export default function UserPage() {
  return (
    <PageBg>
      <Wrapper>
        <BackButton />
          <UserMenu />
      </Wrapper>
    </PageBg>
  );
}
