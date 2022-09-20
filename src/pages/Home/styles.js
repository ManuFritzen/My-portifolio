import styled from "styled-components";

export const Container = styled.div`
width: 100%;
//border: solid 2px red; 
  
`;

export const Text = styled.div`
margin: 141px 130px;

h1{
    text-align: center;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 90px;
    line-height: 123px;

    span{
        color: ${({ theme }) => theme.COLORS.PINK};
    }
}

h2{
    text-align: center;
    margin-top: 80px;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 65px;
    line-height: 89px;
}

h3{
    text-align: center;
    margin-top: 48px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Nunito', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 27px;
} 
  
`;

export const ButtonMessage = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    border-color: ${({ theme }) => theme.COLORS.PINK};
    margin: auto;
    cursor: pointer;

    :hover{
        img, h2{            
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};;
        }
        
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};

    }

    h2{
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-left: 4px;

    }



`
