import styled from 'styled-components';
export const AuthBanner = styled.div`
    background-image: linear-gradient(#297bf5, #011b33);
    border: 0.25px solid rgba(9, 165, 219, 0.7);
    width: 100%;
    height: 726px;
    color: white;
    text-align: center;
    padding: 244px 40px;
    @media screen and (min-width: 320px) and (max-width: 769px) {
        // margin-bottom: 2rem;
    }
`;
export const AuthBannerBg = styled.div`
    background-image: linear-gradient(#297bf5, #011b33);
    border: 0.25px solid rgba(9, 165, 219, 0.7);
    width: 100%;
    height: 750px;
    color: white;
    text-align: center;
    padding: 260px 40px;
    @media screen and (min-width: 320px) and (max-width: 769px) {
        // margin-bottom: 2rem;
        height: unset;
    }
`;
export const Social = styled.a`
    border-radius: 50%;
    color: #011b33;
    border: 1px solid #011b33;
    width: 48px;
    height: 48px;
    text-align: center;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 24px;
`;
export const TabWrapper = styled.div``;
