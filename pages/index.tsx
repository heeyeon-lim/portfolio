import Head from 'next/head';
import { Inter } from 'next/font/google';
import styled from '@emotion/styled';
import Animation from '../components/home/animation';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>나의 포트폴리오</title>
        <meta name="description" content="임희연의 포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Container>
          <Content>
            <Title>
              Before they sold out
              <br />
              readymade gluten
            </Title>
            <Paragraph>
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
              bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
            </Paragraph>
            <ButtonGroup>
              <Link href="/portfolio">
                <Button className="primary">프로젝트 보러가기</Button>
              </Link>
              <Button className="secondary">Button</Button>
            </ButtonGroup>
          </Content>
          <Animation />
        </Container>
      </section>
    </>
  );
};
export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 5rem 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start; */
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    margin-right: 8rem;
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 4rem;
    margin-bottom: 3rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  border: 0;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  font-weight: 600;
  padding: 1rem 2rem;
  margin-right: 1rem;
  cursor: pointer;
  &:last-of-type {
    margin-right: 0;
  }
  &.primary {
    background-color: #4f46e5;
    color: #fff;
    &:hover {
      background-color: #413bb4;
    }
  }
  &.secondary {
    background-color: #e5e7eb;
    color: #1f2937;
    &:hover {
      background-color: #d1d5db;
    }
  }
`;
