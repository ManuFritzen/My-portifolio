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
            margin-top: 15px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
             
            }
        h4{
            width: 100%;
            text-align: center;
            margin: 10px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
                 
        }

        ul{
            width: 100%;
            display: flex;
            justify-content: space-around;
            list-style: none;
            margin-top: 40px;

            li{
                color: ${({ theme }) => theme.COLORS.GRAY_100};
            }
        }
      
    }
  
`;