import styled from '@emotion/styled';
import { SiLinkedin } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';

export default function Footer() {
  return (
    <StyledFooter>
      <a href="#">
        <SiLinkedin size="17" />
      </a>
      <a href="#">
        <AiFillGithub size="19" />
      </a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  width: 100vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7fafc;
  > a {
    color: #718096;
    margin-right: 1rem;
  }
`;
