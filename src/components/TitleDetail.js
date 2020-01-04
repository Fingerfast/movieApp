import React from 'react';

export default function TitleDetail({ match }) {
    const { params } = match;
    const { id } = params;
    console.log('TITLE DETAIL :' , id)

    return <div>Detail for title with {id}</div>;
}