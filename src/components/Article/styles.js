import styled from "styled-components";

export const ArticleContainer = styled.a`
  display: flex;
  flex-direction: column;
  border: 1px solid #fff;
  padding: 32px;
  text-decoration: none;
  
  * {
    color: #fff;
  }
`;

export const ArticleImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  /* Fallback */
  background-color: #c08fff;
  margin-bottom: 24px;  
`;

export const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;

  h2 {
    font-weight: 600;
    font-size: 22px;  
    align-self: start;
    text-decoration: none;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    text-decoration: none;
    overflow-wrap: anywhere;
  }
  
  span {
    background-color: #9747ff;
    padding: 4px 8px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 16px;
    width: fit-content;
    margin-top: auto;
  }
`;