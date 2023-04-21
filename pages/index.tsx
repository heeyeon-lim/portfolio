import React from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styled from '@emotion/styled';
import Animation from '../components/home/Animation';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => (
  <>
    <Head>
      <title>나의 포트폴리오</title>
      <meta name="description" content="임희연의 포트폴리오" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Container>
        <Content>
          <Title>
            {/* 안녕하세요! */}
            <br />
            Front-End 개발자 임희연입니다
          </Title>
          <ButtonGroup>
            {/* <Link href="/aboutMe">
                <Button className="primary">About me</Button>
              </Link> */}
            <Link href="/projects">
              <Button className="primary">프로젝트 보러가기</Button>
            </Link>
          </ButtonGroup>
        </Content>
        <Animation />
      </Container>
    </main>
  </>
);
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
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
    margin-right: 8rem;
    flex: 1;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.7rem;
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

  &.primary {
    background-color: #dce9f2;
    margin-right: 10px;
    &:hover {
      background-color: #d3e0e9;
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
