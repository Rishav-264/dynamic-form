import styled from 'styled-components';

export const ParentContainer = styled.div`
  width: 100%;
`;

export const FormContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: left;
`;

export const Title = styled.p`
  font-size: 20px;
  margin: 20px auto;
`;

export const TextInput = styled.input`
  display: block;
  margin: 1em auto;
  padding: 12px 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Select = styled.select`
  display: block;
  margin: 1em auto;
  padding: 12px 20px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  margin-left: none;
`;

export const PhoneInputContainer = styled.div``;

export const CountryCodeInput = styled.select`
  margin: 1em auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 20%;
`;
export const PhoneNumberInput = styled.input`
  margin: 1em 8px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  width: 77%;
`;
