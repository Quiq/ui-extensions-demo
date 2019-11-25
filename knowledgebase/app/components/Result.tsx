declare var Quiq: any;
import * as React from "react";
import styled from "@emotion/styled";
import DOMPurify from "dompurify";
import {lighten} from "polished";

export type ResultProps = {
  title: string;
  body: string;
  url: string;
};

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #1f5380;
  margin-bottom: 10px;
  margin: 0 20px 10px;

  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${lighten(0.1, "#1f5380")};
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    .title {
      color: #1f5380;
      text-decoration: none;
    }
  }
`;

const Body = styled.div`
  color: #1f5380;

  em {
    color: white;
    font-weight: 300;
    font-style: normal;
  }
`;

const Result = (props: ResultProps) => (
  <ResultContainer className="Result">
    <Title
      title={props.title}
      onClick={() => {
        Quiq.prepareMessage(`${props.title}\n\n${props.url}`);
      }}
    >
      <span className="title">{props.title}</span>
      <a href={props.url} target="zendesk">
        Open
      </a>
    </Title>

    <Body dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(props.body)}} />
  </ResultContainer>
);

export default Result;
