import styled from "styled-components";


export const LoaderStyled = styled.section`

h3{
  color:grey;
}

.loading-alert{
    transform: translateY(-30%) translateX(49%);
    margin-top:22rem;
    display: flex;
  
}

.loading-alert > h2{
  text-align: center;
}

.cs-loader {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}


h2{
  margin-left:25px;
  font-family: "Epilogue", sans-serif;
  font-size: 30px;
  color:black;
}



.cs-loader-inner {
  transform: translateY(-50%);
  top: 40%;
  position: absolute;
  display: flex;
  justify-content: center;
  width: calc(100% - 200px);
  color: #FFF;
  align-items: center;
  padding: 0 100px;
  text-align: center;
}



`