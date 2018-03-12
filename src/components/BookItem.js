import React, { Component } from 'react';

const BookItem = ({ book }) => {
    console.log(book);

    const bookItem = book.volumeInfo;
    return (
        <tbody>
            <tr>
                <td><a href={bookItem.infoLink}> {bookItem.title}</a></td>
                <td>{bookItem.description}</td>
                <td><img src={bookItem.imageLinks === undefined ? "" : bookItem.imageLinks.smallThumbnail} /></td>
            </tr>
        </tbody>
    );
}

export default BookItem;