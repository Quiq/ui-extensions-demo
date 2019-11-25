import * as React from "react";
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRedo} from "@fortawesome/free-solid-svg-icons";

export type DevelopmentHeaderProps = {};

const DevelopmentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(17, 92, 167);
`;

const ReloadButton = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const Banner = styled.div`
  font-size: 0.75em;
`;

const DevelopmentHeader = (props: DevelopmentHeaderProps) => (
  <DevelopmentHeaderContainer className="DevelopmentHeader">
    <Banner>Development Mode</Banner>
    <ReloadButton
      title="Reload Extension"
      icon={faRedo}
      onClick={() => window.location.reload()}
    >
      Reload
    </ReloadButton>
  </DevelopmentHeaderContainer>
);

export default DevelopmentHeader;
