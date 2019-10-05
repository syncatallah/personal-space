/** @jsx jsx */
import jsx from "../../jsx";
import React, { lazy, Suspense } from "react";
import theme from "../../theme";
import { Div } from "../../elements";
import Flex from "../../components/Flex";
import Header from "../../containers/Header";
import { importMDX } from "mdx.macro";

const Content = lazy(() => importMDX("./Bio.mdx"));

function Bio({ ...props }) {
  return (
    <>
      <Header />
      <Div
        dir="rtl"
        justifyConent="center"
        maxWidth={900}
        px={[4, 4, 5]}
        py={2}
        mx="auto"
        fontFamily={theme.typefaces.helvetica}
        mt={70}
      >
        <Suspense fallback={<Div>Loading...</Div>}>
          <Content />
        </Suspense>
      </Div>
    </>
  );
}

export default Bio;
