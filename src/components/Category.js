 import React, {useEffect, useState} from 'react';
 import styled from 'styled-components'
 import Slider from 'react-styled-carousel';
 import {
     Link,
 } from "react-router-dom";


const imageDomain = 'http://image.tmdb.org/t/p/w342/';

 const CategoryList = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    flex: 0 1 auto;
    justify-content; center;
    padding: 0 20px;
`;
 const CategoryTitle = styled.div`
    font-size: 24px;
    color: #f78f19;
    padding: 10px 0 20px;
    display: flex;
    justify-content: center;
    position: relative;
    &:after {
        position: absolute;
        content: "";
        bottom: 15px;
        left: 0;
        right: 0;
        width: 50px;
        margin: 0 auto;
        height: 2px;
        background-color: #808080;
    }
`;
 const Image = styled.div`
    background-image: url("${props => imageDomain + props.movie.poster_path}");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: 0.4s;
    min-height: 200px;
    box-sizing: border-box;
    &:hover {
        // background-size: cover;
        border: 2px solid #808080;
    }
 `

function Category({url, title}) {
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(resp => resp.json())
            .then(function(data) {
                setData(data.results)
            })
            .catch(function(error) {
                console.log('Loading data failed: ', error);
            });
    },[url])
    // console.log('DATA: ' , data)
    const responsive = [
        { breakPoint: 1024, cardsToShow: 7 },
        { breakPoint: 980, cardsToShow: 6 },
        { breakPoint: 860, cardsToShow: 5 },
        { breakPoint: 640, cardsToShow: 4 },
        { breakPoint: 450, cardsToShow: 3 },
        { breakPoint: 320, cardsToShow: 2 },
        { breakPoint: 120, cardsToShow: 1 },
    ];
    let sliderContent = data && data.map((movie,index) => <Link key={`${movie.title}-${index}`} to={`/title/${movie.id}`}><Image movie={movie}></Image></Link>)
    return (
        <CategoryList>
            <CategoryTitle>{title}</CategoryTitle>
            {data && <Slider
                key={`slider-${title}`}
                responsive={responsive}
                cardsToShow={2}
                autoSlide={title === 'Popular movies'}
                // dotsWrapper={() => <DotsWrapper />}
                showArrows={true}
                showDots={true}
                infinite={true}
                hideArrowsOnNoSlides={true}
                pauseOnMouseOver={true}
            >
                {sliderContent}
            </Slider>}
        </CategoryList>
    );
}

export default Category;