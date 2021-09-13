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

const EmptyMessage = styled.div`
  grid-column: content-start / content-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

const EmptyImage = styled.img`
  height: 40rem;
  width: auto;
  object-fit: contain;
`;

export { PostContainer, Pagination, EmptyMessage, EmptyImage };
