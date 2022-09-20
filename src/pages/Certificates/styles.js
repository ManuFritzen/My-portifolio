import styled from "styled-components";

export const Container = styled.div`
width: 100%;
//border: solid 2px red; 
  
`;

export const Section = styled.div`

margin: 48px 133px 80px;
//border: solid 2px red; 

  
`;

export const Cards = styled.div`
    width: 1200px;
    margin: 28px auto;
    //border: solid 2px red; 
    display: flex;
    
    button{
        width: 340px;
        height: 222px;
        border-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 20px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 15px;  
        cursor: pointer;   
       
        h3{            
            width: 100%;
            text-align: center;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            line-height: 27px;
             
        }

        #certificate{
            margin: auto;
            width: 221px;
            height: 132px;
            margin-top: 10px;
            border-radius: 10px;
            background-color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
        
      
    }
  
`;