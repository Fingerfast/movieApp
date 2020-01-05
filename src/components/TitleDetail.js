import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Title = styled.div`
    font-size: 20px;
`
const DetailInfo = styled.div`
    background: red;
    display: flex;
    flex-wrap: wrap;
`
const Info = styled.div`
    display: flex;
    flex-flow: column no-wrap;
    flex: 0 1 50%;
`
const Description = styled.div`
    display: flex;
    flex: 0 1 50%;
`
const MoreInfo = styled.div`
    display: flex;
`
const Image = styled.img`
    src: url(${props => props.src})
`

export default function TitleDetail({ match }) {
    const [detail, setDetailData] = useState(null)
    const imageDomain = 'http://image.tmdb.org/t/p/w342/';
    const { params } = match;
    const { id } = params;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=2d2b4585cf1acf76d22f4e95451fd75e&language=en-US`;
    useEffect(() => {
        fetch(url, {
        method: "GET",
        headers: {
           "Content-Type": "application/json",
        }
        })
        .then(resp => resp.json())
        .then(function(data) {
            setDetailData(data)
            })
        .catch(function(error) {
            console.log('Loading data failed: ', error);
            });
        },[url])
    console.log('DATA TITLE DETAIL:', detail)
    return (<div>
        {detail &&
        <DetailInfo>
            <Info>
                <Title>{detail.original_title}</Title>
                <Description>{detail.overview}</Description>
                <MoreInfo>{detail.release_date.split('-')[0]}</MoreInfo>
            </Info>
            <Image src={imageDomain + detail.poster_path}></Image>
        </DetailInfo>}
    </div>);
}
