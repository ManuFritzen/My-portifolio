import styled from "styled-components";

export const Container = styled.header`
width: 100%;
height: 27px;

margin-top: 55px;
padding: 0 130px ;

display: flex;

//border: solid 2px red;

  
  
`;

export const Navegation = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

ul{
    display:flex;

    li{
        margin-left: 22px;
        list-style: none;       
    }

    a{
        cursor:pointer;
    

        img {
         margin-left: 15px;
        }
    }

}


`

