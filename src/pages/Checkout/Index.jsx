//Checkaout page styled-components
import React from 'react';
import styled from 'styled-components';
import { TitlePage } from '../../components/TitlePage';

export const Index = () => {
    return (
        <Container>
            <TitlePage title='Checkout' />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
`;
