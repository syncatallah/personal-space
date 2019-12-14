/** @jsx jsx */
import jsx from '../jsx';
import React from 'react';
import Flex from '../components/Flex';
import { Div } from '../elements';
import ReadingsContainer from '../containers/ReadingsContainer';
import Header from '../containers/Header';

function Readings({ ...props }) {
  return (
    <>
      <Flex
        alignItems="center"
        flexDirection="column"
        maxWidth="80em"
        minHeight="100%"
        mr="auto"
        ml="auto"
        minWidth="20rem"
        pr={3}
        pl={3}
      >
        <Header />
        <Div display="grid" pl={[1, 2, 4]} pr={[1, 2, 3]} py={2} mt={1}>
          <ReadingsContainer />
        </Div>
      </Flex>
    </>
  );
}

export default Readings;
