import React from 'react'

const index = () => {
    return (
        <FooterContainer>
            <InformationWrapper>
                <LogoWrapper>
                    <Logo></Logo>
                    <LogoText></LogoText>
                </LogoWrapper>
                <LinkWrapper>
                    <LinkList>
                        <LinkTitle></LinkTitle>
                        <Link></Link>
                    </LinkList>
                    <LinkList>
                        <LinkTitle></LinkTitle>
                        <Link></Link>
                    </LinkList>
                    <LinkList>
                        <LinkTitle></LinkTitle>
                        <Link></Link>
                    </LinkList>
                </LinkWrapper>
            </InformationWrapper>
            <Socials>
                <Github></Github>
                <SocialWrapper> 
                    <SocialLinks></SocialLinks>
                    <SocialLinks></SocialLinks>
                    <SocialLinks></SocialLinks>
                </SocialWrapper>
            </Socials>
        </FooterContainer>
    )
}

export default index
