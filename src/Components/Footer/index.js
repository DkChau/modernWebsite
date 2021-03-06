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
    Category,
    CreditWrapper,
    CreditLink

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
                    <CreditWrapper>
                        All Images made by 
                        <CreditLink href='https://lukaszadam.com/' target='_blank'>  Lukas Zadam</CreditLink>
                    </CreditWrapper>
                    <SocialWrapper>
                        <Socials>
                            <TiSocialFacebook/>
                            <TiSocialGithub/>
                            <TiSocialInstagram/>
                            <TiSocialYoutube/>
                            <TiSocialTwitter/>
                        </Socials>
                    </SocialWrapper>
                </LogoWrapper>
                <ContentWrapper>
                    <LinkWrapper>
                        <LinkItem>
                            <Category>News and Info</Category>
                            <Link>Press Releases</Link>
                            <Link>Product Manuals</Link>
                            <Link>Newsletter Sign Up</Link>
                        </LinkItem>
                        <LinkItem>
                            <Category>Other Sites</Category>
                            <Link>Site #1</Link>
                            <Link>Site #2</Link>
                            <Link>Site #3</Link>
                            <Link>Site #4</Link>
                        </LinkItem>
                        <LinkItem>
                            <Category>Learn More</Category>
                            <Link>DKC Products</Link>
                            <Link>FAQ</Link>
                        </LinkItem>
                    </LinkWrapper>
                </ContentWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default index
