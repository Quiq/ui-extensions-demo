declare var Quiq: any;

import * as React from "react";
import styled from "@emotion/styled";
import Result from "./Result";
import take from "lodash/take";
import shuffle from "lodash/shuffle";
import last from "lodash/last";
import sw from "stopword";
import {Result as ResultType, Conversation} from "../types";
import {
  topKeywords,
  zendeskDomain,
  zendeskAuthToken,
  defaultCategoryNumber
} from "../Constants";

export type KnowledgeProps = {
  conversation: Conversation;
};

const KnowledgeContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: "Helvetica Neue", Helvetica, Roboto, Arial, sans-serif;
`;

const ErrorBody = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid #333;
`;

const Text = styled.div`
  color: #b33e40;
`;

const Example = styled.div`
  margin: 10px 5px;
  padding: 0 10px;
  white-space: pre-wrap;
  background: #e7f1f9;
`;

const Results = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h5`
  color: #1f5380;
`;

type KnowledgeState = {
  errors: Array<{text: string; example: string; id: string}>;
  results: Array<ResultType>;
  staticResults: Array<ResultType>;
};

export class Knowledge extends React.Component<KnowledgeProps, KnowledgeState> {
  props: KnowledgeProps;
  state: KnowledgeState = {
    errors: [],
    results: [],
    staticResults: []
  };

  fetchResults = async (query: string) => {
    try {
      const response = await fetch(
        `${zendeskDomain}/api/v2/help_center/articles/search.json?${query}`,
        {
          headers: {Authorization: `Basic ${zendeskAuthToken}`},
          mode: "cors"
        }
      );
      const data = await response.json();
      return data
        ? shuffle(
            data.results.map(r => ({
              title: r.title,
              url: r.html_url,
              body: r.snippet,
              id: r.id.toString()
            }))
          )
        : [];
    } catch (e) {
      return [];
    }
  };

  normalizeText = (text: string = "") => {
    const normalizedText = (text || "").toLowerCase().replace(/[^\s\w]/gi, "");
    const kw = topKeywords.filter(k => normalizedText.includes(k));
    return kw.length
      ? kw.join(" ")
      : sw.removeStopwords(normalizedText.split(" ")).join(" ");
  };

  async componentDidMount() {
    Quiq.resizeWindow({height: 500});

    const staticResults = await this.fetchResults(
      `category=${defaultCategoryNumber}`
    );
    let results: any = [];

    const messages = this.props.conversation.messages
      .filter(m => m.fromCustomer)
      .map(m => m.text);
    if (messages.length) {
      results = await this.fetchResults(
        `query=${encodeURIComponent(this.normalizeText(last(messages)))}`
      );
    }
    this.setState({results, staticResults});

    Quiq.on("messageReceived", async ({text}) => {
      const results = await this.fetchResults(
        `query=${encodeURIComponent(this.normalizeText(text))}`
      );
      this.setState({
        results,
        staticResults: shuffle(this.state.staticResults)
      });
    });
  }

  renderTopResults = (results: Array<ResultType>) => {
    if (!results.length) return null;

    return (
      <Results>
        <Title>Top Suggestions</Title>
        {results.map(r => (
          <Result key={r.id} title={r.title} body={r.body} url={r.url} />
        ))}
      </Results>
    );
  };

  renderOtherResults = (results: Array<ResultType>) => {
    if (!results.length) return null;

    return (
      <Results>
        <Title>Common Articles</Title>
        {results.map(r => (
          <Result key={r.id} title={r.title} body={r.body} url={r.url} />
        ))}
      </Results>
    );
  };

  render() {
    const topResults = take(this.state.results, 4);
    const staticResults = take(
      this.state.staticResults.filter(
        r => !topResults.map(t => t.id).includes(r.id)
      ),
      4 - topResults.length
    );

    return (
      <KnowledgeContainer className="Knowledge">
        {!this.state.errors.length && (
          <div>
            {this.renderTopResults(topResults)}
            {this.renderOtherResults(staticResults)}
          </div>
        )}

        {this.state.errors.map(e => (
          <ErrorBody key={e.id}>
            <Text>{e.text}</Text>
            <Example>{e.example}</Example>
          </ErrorBody>
        ))}
      </KnowledgeContainer>
    );
  }
}

export default Knowledge;
