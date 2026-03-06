import { supabase } from "@/api/supabase"
import { useState } from "react"
import styled from "@emotion/styled";
import { theme } from "@/tokens/theme";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            setError(error.message)
        }
        navigate('/table')
    }

    return (
        <StyledDiv className="pt-20">
            <div>
                아이디
                <StyledInput value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            <div>
                비밀번호 
                <StyledInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            </div>
            <StyledButton onClick={handleLogin}>로그인</StyledButton>
            {error && <p>{error}</p>}
        </StyledDiv>
    )
}

export default LoginPage

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.text.main};
    ${theme.style.headingSm};
`
const StyledInput = styled.input`
    background-color: ${theme.colors.card};
    /* width: 100%; */
    box-sizing : border-box;
    border: 1px solid ${theme.colors.border};
`

const StyledButton = styled.button`
    background-color: ${theme.colors.card};
    border: 1px, solid, ${theme.colors.border};
    cursor: pointer;
    &:hover {
        background-color: ${theme.colors.accent};
    }
`