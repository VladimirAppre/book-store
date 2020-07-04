import React from "react";
import BookList from "../book-list/book-list";

const HomePage = () => {
  const books = [
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      author: 'Адитья Бхаргава' },
    {
      id: 2,
      title: 'Вы не знаете JS!',
      author: 'Кайл Симпсон'}
  ]
  return(
    <BookList books={books}/>
  )
}

export default HomePage;