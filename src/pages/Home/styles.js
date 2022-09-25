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

export const ButtonMessage = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    margin: auto;

    a{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        color: ${({ theme }) => theme.COLORS.PINK};        
        text-decoration: none;
        text-transform: upercase;
        overflow: hidden;
        transition: .1s;
        margin-top: 40px;        
        cursor: pointer;
    }

    h3 {
        display: none;
        font-family: 'Nunito', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 25px;
        line-height: 89px;
    }

    a:hover {
        padding: 0 30px;
        background: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        border-radius: 10px;
        box-shadow: 0 0 1px ${({ theme }) => theme.COLORS.PINK},
        0 0 5px ${({ theme }) => theme.COLORS.PINK},
        0 0 25px ${({ theme }) => theme.COLORS.PINK},
        0 0 50px ${({ theme }) => theme.COLORS.PINK};

        h3{
            display: block;            
            background-color: ${({ theme }) => theme.COLORS.PINK};
            color: ${({ theme }) => theme.COLORS.GRAY_100};        
        }
        h2{
            display: none;
        }

        img{
            display: none;
        }
    }
    h2{
       color: ${({ theme }) => theme.COLORS.PINK};
       margin-left: 4px;

       }
    
    a span {
        position: absolute;
        display: block;
    }

    a #span1 {
        top:0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${({ theme }) => theme.COLORS.PINK});
        animation: btn-anim1 1s linear infinite;
    }

    @keyframes btn-anim1 {
        0% {
        left: -100%;
        }
        50%,100% {
        left: 100%;
        }
    }

    a #span2 {
        top: -100%;
        right: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${({ theme }) => theme.COLORS.PINK});
        animation: btn-anim2 1s linear infinite;
        animation-delay: .25s;
    }

@keyframes btn-anim2 {
  0% {
    top: -100%;

  }
  50%,100% {
    top: 100%;
  }
}


a #span3 {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, ${({ theme }) => theme.COLORS.PINK});
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;

  }
  50%,100% {
    right: 100%;
  }
}

a #span4 {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, ${({ theme }) => theme.COLORS.PINK});
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;

  }
  50%,100% {
    bottom: 100%;
  }
}
    
`
