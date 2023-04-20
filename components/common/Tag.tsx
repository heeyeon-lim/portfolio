import styled from '@emotion/styled';

export const TagContainer = styled.ul`
  display: flex;
`;

export const Tag = styled.li`
  display: flex;
  height: 20px;
  width: fit-content;
  padding: 0px 3px;
  align-items: center;
  padding: 0 6px;
  margin-right: 4px;
  border-radius: 3px;
  background: #dce9f2;
  > .tag-name {
    display: flex;
    color: #276891;
    font-size: 12px;
  }
`;
