import styled from "styled-components";
interface ComponentAProps {
  name: string;
}
const StyledButton = styled.button`
  background-color: black;
  font-size: 40px;
  color: white;
`;

const ComponentA = (props: ComponentAProps) => {
  return (
    <div>
      {/* INLINE STYLE */}
      <p style={{ color: "aquamarine", fontSize: "40px" }}>
        Halo, {props.name}
      </p>
      <StyledButton>Custom Button</StyledButton>
    </div>
  );
};

export default ComponentA;
