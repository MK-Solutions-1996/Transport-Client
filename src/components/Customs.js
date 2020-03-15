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
  margin: 0.5rem;
`;

export const LabelContainer = styled.label`
  font-size: 1.1rem;
  color: var(--lightBlue);
  padding: 0.2rem;
  height: auto;
  width: 20vw;
`;

export const LongLabelContainer = styled.label`
  font-size: 1rem;
  color: var(--lightBlue);
  margin: 0.1rem;
  padding: 0.1rem;
  height: auto;
  width: auto;
`;
export const InputContainer = styled.input`
  width: 20vw;
  margin: 0.3rem;
  padding: 0.2rem;
  height: 2rem;
  border-radius: 0.3rem;
`;

export const DateContainer = styled.input`
  text-align: center;
  width: 20vw;
  margin: 0.3rem;
  padding: 0.2rem;
  height: 2rem;
  border-radius: 0.3rem;
`;

export const SelectContainer = styled.select`
  padding: 0.2rem;
  margin: 0.2rem;
  height: 2rem;
  width: 20vw;
  font-size: 1rem;
  border-radius: 0.3rem;
`;
