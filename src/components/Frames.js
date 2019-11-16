/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useState, useCallback, useEffect } from "react";
import { H1, H2, Div } from "../elements";
import Flex from "../components/Flex";
import Carousel, { Modal, ModalGateway } from "react-images";
import useEveryReloadColorMode from "../hooks/useEveryReloadColorMode";
import debounce from "../utils/debounce";
import Gallery from "react-photo-gallery";
import Loading from "../components/Loading";

function Frames({
  title,
  totalPages,
  initialLength,
  photos,
  disallowScrollLoad
}) {
  const [currentImage, setCurrentImage] = useState(0);
  const [pageNum, setPageNum] = useState(1);
  const [loadedAll, setLoadedAll] = useState(false);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const { textColor } = useEveryReloadColorMode();

  // TODO handle this initial value based on innerWidth
  const [images, setImages] = useState(photos.slice(0, initialLength));

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setViewerIsOpen(false);
  };

  const loadMorePhotos = debounce(() => {
    if (pageNum > totalPages) {
      setLoadedAll(true);
      return;
    }

    setImages(images.concat(photos.slice(images.length, images.length + 6)));
    setPageNum(pageNum + 1);
  }, 200);

  useEffect(() => {
    if (!disallowScrollLoad) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

  const handleScroll = () => {
    let scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop;
    if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
      loadMorePhotos();
    }
  };

  const carouselStyle = {
    footer: base => ({
      ...base,
      paddingTop: 30,
    }),
    header: base => ({
      ...base,
      background: "none !important",
      paddingBottom: 100,
      display: "flex !important",
      justifyContent: "space-around center !important",
      right: "0",
      top: "auto !important",
      left: "30px",
      "& span": {
          backgroundColor: 'black !important',
      }
    }),
    headerClose: base => ({
      ...base
    }),
    view: base => ({
      ...base,
      overflow: "hidden"
    })
  };

  return (
    <>
      <H1 fontWeight={600} color={textColor}>
        {title}
      </H1>
      <Gallery photos={images} onClick={openLightbox} />
      {!loadedAll && !disallowScrollLoad && (
        <Flex>
          <H2 fontWeight={300} mr={2}>
            {" "}
            Loading{" "}
          </H2>
          <Loading type="spokes" color="currentcolor" />
        </Flex>
      )}
      <Div pl={[4, 4, 6]} pr={[4, 4, 6]}>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal
              onClose={closeLightbox}
              styles={{
                positioner: base => ({
                  ...base,
                  zIndex: 1000
                })
              }}
            >
              <Carousel
                styles={carouselStyle}
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Div>
    </>
  );
}

export default Frames;
