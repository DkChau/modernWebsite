import React from 'react'
import {
    FooterContainer,
    InformationWrapper,
    Logo,
    LogoWrapper,
    LogoText,
    Link,
    LinkWrapper,
    LinkList,
    LinkTitle,
    SocialWrapper,
    Socials,
    Item

} from './FooterElements'
import {
    TiSocialInstagram,
    TiSocialTwitter,
    TiSocialFacebook,
    TiSocialYoutube,
    TiSocialGithub,
} from 'react-icons/ti'

const index = () => {
    return (
        <FooterContainer>
            <InformationWrapper>
                <LogoWrapper>
                    <Logo>DKC</Logo>
                    <LogoText>asdadsadas</LogoText>
                </LogoWrapper>
                <LinkWrapper>
                    <LinkList>
                        <LinkTitle>Services</LinkTitle>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                    </LinkList>
                    <LinkList>
                        <LinkTitle>Careers</LinkTitle>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                    </LinkList>
                    <LinkList>
                        <LinkTitle>Learn More</LinkTitle>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                        <Link>Ex Test</Link>
                    </LinkList>
                </LinkWrapper>
            </InformationWrapper>
            <Socials>
                <SocialWrapper>
                    <Item>
                        <TiSocialGithub></TiSocialGithub>
                    </Item> 
                    <Item>
                        <TiSocialTwitter></TiSocialTwitter>
                    </Item> 
                    <Item>
                        <TiSocialYoutube></TiSocialYoutube>
                    </Item> 
                    <Item>
                        <TiSocialFacebook/>
                    </Item> 
                    <Item>
                        <TiSocialInstagram/>
                    </Item> 
                </SocialWrapper>
            </Socials>
        </FooterContainer>
    )
}

export default index
