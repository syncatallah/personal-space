/** @jsx jsx */
import jsx from '../../jsx';
import React from 'react';
import theme from '../../theme';
import { Div, H2, Span } from '../../elements';
import Frames from '../../components/Frames';
import { zerodBQarunLake } from '../../utils/constants.js';

function ZerodBQarunLake({ ...props }) {
  return (
    <>
      <Div
        justifyConent="center"
        fontFamily={theme.typefaces.sansSerif}
        py={2}
        mx="auto"
      >
        <H2 color="secondary">26 Apr, 2020</H2>
        <Frames
          photos={zerodBQarunLake}
          title="Zero Decibel Qarun Lake, Egypt 2020"
          href="zdB-qarun-lake"
          totalPages={0}
          initialLength={20}
          disallowScrollLoad={true}
        />
        <Span>Qarun lake photoset, a zero decibel place in Egypt.</Span>
      </Div>
    </>
  );
}

export default ZerodBQarunLake;
