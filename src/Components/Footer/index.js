import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    LinkWrapper,
    LogoWrapper,
    ContentWrapper,
    SocialWrapper,
    Logo,
    Socials,
    Link,
    LinkItem,
    Category

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
            <FooterWrapper>
                <LogoWrapper>
                    <Logo>DKC</Logo>
                </LogoWrapper>
                <ContentWrapper>
                    <LinkWrapper>
                        <LinkItem>
                            <Category>Test</Category>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                        </LinkItem>
                        <LinkItem>
                            <Category>Test</Category>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                        </LinkItem>
                        <LinkItem>
                            <Category>Test</Category>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                            <Link>Link test</Link>
                        </LinkItem>
                    </LinkWrapper>
                    <SocialWrapper>
                        <Socials>
                            <TiSocialFacebook/>
                            <TiSocialGithub/>
                            <TiSocialInstagram/>
                            <TiSocialYoutube/>
                            <TiSocialTwitter/>
                        </Socials>
                    </SocialWrapper>
                </ContentWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default index
