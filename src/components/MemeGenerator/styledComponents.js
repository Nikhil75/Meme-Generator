import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`
export const Heading = styled.h1`
  color: #35469c;
  font-weight: bold;
`

export const Label = styled.label`
  color: #7e858e;
  font-size: 15px;
`
export const Input = styled.input`
  color: #7e858e;
  height: 5vh;
  border-radius: 8px;
  border: 2px solid #7e858e;
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
`

export const SelectOption = styled.select`
  color: #7e858e;
  height: 5vh;
  border-radius: 8px;
  border: 2px solid #7e858e;
  width: 100%;
  margin-bottom: 10px;
  font-size: 15px;
`
export const CustomButton = styled.button`
  height: 5vh;
  background-color: #0b69ff;
  color: white;
  width: 180px;
  border-width: 0px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
`
export const ChildContainer = styled.div`
  height: 40vh;
  width: 40%;
  background-image: url(${props => props.imageUrl});
  //   background-image: url('https://assets.ccbp.in/frontend/react-js/nature-img.png');
  background-size: cover;
`
export const Text = styled.p`
  color: white;
  font-size: ${props => props.fontSize}px;
  console.log(fontSize)
`
