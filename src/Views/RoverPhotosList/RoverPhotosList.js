import React, { useEffect, useState } from "react";
import { useContext } from 'react';
import { RoverContext } from '../../Context/RoverContext'
import { useParams } from "react-router-dom";
import CardPhoto from "../../Components/CardPhoto";
import { Spinner } from 'reactstrap';
import './RoverPhotoList.css'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

function RoverPhotosList() {
    const { roverName } = useParams();
    const [{ dataObtained }] = useContext(RoverContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
 
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === Object.keys(dataObtained).length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? Object.keys(dataObtained).length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = dataObtained.map((photo) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={photo.img_src}
        >
          <img src={photo.img_src} alt={photo.roverName} />
          <CarouselCaption captionText={photo.roverName} captionHeader={photo.roverName} />
        </CarouselItem>
      );
    });
  
    // return (
    //   <Carousel
    //     activeIndex={activeIndex}
    //     next={next}
    //     previous={previous}
    //   >
    //     <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
    //     {slides}
    //     <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
    //     <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    //   </Carousel>
    // );

    return (
        <div>
            {
                Object.keys(dataObtained).length === 0 ?
                    <div className="container" style={{ height: '100vh' }}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }} >
                            <Spinner type="grow" color="primary" />
                            <Spinner color="primary" />

                        </div>
                    </div> :
                    <div>
                        <h2 className="text-center py-4 text-white">Fotos tomadas por el Rover {roverName}</h2>
                        {/* <div className="row m-5 " >
                            {dataObtained.map((photo, index) => {
                                return <CardPhoto photo={photo} key={index} />
                            })}
                        </div> */}
                        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={dataObtained} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
                    </div>
            }
        </div>

    );
}

export default RoverPhotosList;
