import logo from '@assets/logo.svg';
import { NewTransactionButton } from '@components/NewTransaction/Button';
import Image from 'next/image';
import React from "react";
import { Container, Content } from './styles';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Image src={logo} alt="Ticto" width='186px' height='34px' />
      <NewTransactionButton />
    </Content >
  </Container>
)

export default Header;