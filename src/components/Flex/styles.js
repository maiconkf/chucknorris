import styled from "vue-styled-components";

const flexProps = { justify: String };

export const StyledFlex = styled("div", flexProps)`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: center;
`;
