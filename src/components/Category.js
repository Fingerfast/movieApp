 import React, {useEffect, useState} from 'react';
 import styled from 'styled-components'
 import Slider from 'react-styled-carousel';
 import {
     BrowserRouter as Router,
     Link,
     Switch,
     Route,
     useRouteMatch,
     useParams,
 } from "react-router-dom";


const imageDomain = 'http://image.tmdb.org/t/p/w342/';

 const CategoryList = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    flex: 0 1 auto;
    justify-content; center;
`;
 const CategoryTitle = styled.div`
    font-size: 24px;
    color: #808080;
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
    min-height: 200px;
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
    console.log('DATA: ' , data)
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
    let matchedPath = useRouteMatch();
    console.log('MATCH PATH IN CATEGORY::', matchedPath)
    return (
        <CategoryList>
            <CategoryTitle>{title}</CategoryTitle>
            {data && <Slider
                responsive={responsive}
                cardsToShow={2}
                autoSlide={false}
                // dotsWrapper={() => <DotsWrapper />}
                showArrows={true}
                showDots={false}
                infinite={false}
                hideArrowsOnNoSlides={true}
                pauseOnMouseOver={true}
            >
                {sliderContent}
            </Slider>}
        </CategoryList>
    );
}

function Detail () {
    let {detailId} = useParams()
    return <div>{detailId}assadsad</div>;
}



export default Category;