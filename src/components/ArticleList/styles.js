import styled from "styled-components";

export const ArticleListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
  row-gap: 48px;
  padding: 20px;
`;