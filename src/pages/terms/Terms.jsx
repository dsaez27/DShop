import React from "react";
import styled from "styled-components";
import TitlePage from "@/components/TitlePage";

const Terms = () => {
    return (
        <>
            <TermContainer>
                <TitlePage>Term of Use</TitlePage>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur, nisi
                    urna aliquam eros, eget tincidunt nisl nunc eget purus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec euismod, nisi eget
                    tincidunt consectetur, nisi urna aliquam eros, eget
                    tincidunt nisl nunc eget purus. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec euismod, nisi eget tincidunt consectetur, nisi urna
                    aliquam eros, eget tincidunt nisl nunc eget purus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur, nisi
                    urna aliquam eros, eget tincidunt nisl nunc eget purus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec euismod, nisi eget
                    tincidunt consectetur, nisi urna aliquam eros, eget
                    tincidunt nisl nunc eget purus. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Donec euismod, nisi eget tincidunt consectetur, nisi urna
                    aliquam eros, eget tincidunt nisl nunc eget purus.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur, nisi
                    urna aliquam eros, eget tincidunt nisl nunc eget purus.
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Donec euismod, nisi eget
                    tincidunt consectetur, nisi urna aliquam eros.
                </p>
            </TermContainer>
        </>
    );
};

export default Terms;

const TermContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    width: min(768px, 100%);
`;
