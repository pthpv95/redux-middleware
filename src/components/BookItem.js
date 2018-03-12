import React, { Component } from 'react';

const BookItem = ({ book, key }) => {
    console.log(key);
    
    return (
        <div>
            {/* <tbody key={i}>
                <tr>
                    <td><a href={item.volumeInfo.infoLink}> {item.volumeInfo.title}</a></td>
                    <td>{item.volumeInfo.description}</td>
                    <td><img src={item.volumeInfo.imageLinks === undefined ? "" : item.volumeInfo.imageLinks.smallThumbnail} /></td>
                </tr>
            </tbody> */}
        </div>
    );
}

export default BookItem;