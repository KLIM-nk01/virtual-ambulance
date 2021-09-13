import React from 'react';
import styled from "styled-components";

const ContainerStyle = styled.div`
    
`

const Container: React.FC = (props:any) => {
    return (
        <ContainerStyle>
            {props.children}
        </ContainerStyle>
    );
};

export default Container;