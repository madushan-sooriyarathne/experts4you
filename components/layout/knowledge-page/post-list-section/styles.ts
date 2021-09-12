import styled from "styled-components";

const PostContainer = styled.section`
  grid-column: content-start / content-end;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  row-gap: 5rem;
`;

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export { PostContainer, Pagination };
