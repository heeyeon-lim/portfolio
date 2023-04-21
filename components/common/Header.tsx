import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
export default function Header() {
  return (
    <header>
      <Container>
        <Link href="/">
          <Logo>임희연의 포트폴리오</Logo>
        </Link>
        <Nav>
          <Link href="/">
            <span>Home</span>
          </Link>
          {/* <Link href="/aboutMe">
            <span>About me</span>
          </Link> */}
          <Link href="/projects">
            <span>Projects</span>
          </Link>
        </Nav>
        {/* <Button>다크모드</Button> */}
      </Container>
    </header>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.25rem;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Logo = styled.span`
  font-weight: 500;
  color: #1a202c;
  font-weight: 500;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  @media (min-width: 768px) {
    margin: 0 auto;
    flex: 1;
  }

  a {
    margin-right: 1rem;
    font-weight: 500;
    color: #414b58;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #111723;
    }
  }
`;

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: #edf2f7;
  border: none;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  color: #1a202c;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;
