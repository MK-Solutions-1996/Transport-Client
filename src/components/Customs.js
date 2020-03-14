import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue); /*From App.css*/
  border-color: var(--lightBlue);
  border-radius: 0.5rem;
  color: var(--lightBlue);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
export const TopicContainer = styled.label`
  text-align: center;
  font-size: 2.1rem;
  font-weight: bolder;
  color: var(--lightBlue);
  margin: 3%;
`;

export const LabelContainer = styled.label`
  font-size: 1.2rem;
  color: var(--lightBlue);
  margin: 1%;
  padding: 2%;
  width: 200px;
`;

export const InputContainer = styled.input`
  width: 300px;
  margin: 1%;
  padding: 2%;
  height: 35px;
  border-radius: 0.3rem;
`;

export const DateContainer = styled.input`
  text-align: center;
  width: 400px;
  margin: 1%;
  padding: 2%;
  height: 35px;
  border-radius: 0.3rem;
`;

export const SelectContainer = styled.select`
  padding: 2%;
  margin: 2%;
  height: 35px;
  width: 200px;
  font-size: 1rem;
`;
