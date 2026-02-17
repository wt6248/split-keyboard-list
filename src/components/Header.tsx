import { theme } from "@/tokens/theme"
import styled from "@emotion/styled"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <HeaderContainer>
            <Title>
                <h1 className="text-display text-text-main">//</h1>
                <h1 className="text-display text-accent">SPLIT</h1>
                <h1 className="text-display text-text-main">.KB</h1>
            </Title>
            <LinkGroup>
                <Link className="text-text-main" to="/">카탈로그</Link>
                <Link className="text-text-main" to="/about">소개</Link>
                <a href="https://github.com/wt6248/split-keyboard-list" target="_blank" rel="noopener noreferrer">Github</a>
            </LinkGroup>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: ${theme.colors.card};
    padding: 16px 32px;

`
const Title = styled.div`
display: flex;
align-items: center;
.Link {
    ...${theme.style.bodySm};
}
`

const LinkGroup = styled.div`
display: flex;
align-items: center;
gap: ${theme.spacing.lg};
a {
    ...${theme.style.bodySm};
    color: ${theme.colors.text.sub};
}
`