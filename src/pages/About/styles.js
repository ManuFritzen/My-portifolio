import styled from "styled-components";

export const Container = styled.div`
width: 100%;


//border: solid 2px red; 
  
`;

export const Text = styled.div`
display: flex;
margin-top: 47px;
padding: 0 130px;

section{
    width: 50%;
    //border: solid 2px red;   
    
    h3{
        width: 100%;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 21.9798px;
        line-height: 30px;
        text-align: justify;
    }  

}

#image{
    display: grid;
    justify-content: right;

    #foto{
        width: 413px;
        height: 412px;
        margin-top: 100px;
        border-radius: 140px;
    }

    h3{
        text-align: center;
        margin-top: 30px;
    }

    ul{
        display: flex;
        justify-content: space-around;
        margin-top: 18px;

        li {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            
            img{ 
                margin-right: 4px;
            }

        }
    }
}

  
`;