
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      author: 'Aditya Bhargava',
      price: 650,
      coverImage: 'https://cv8.litres.ru/pub/c/pdf-kniga/cover_330/39158380-aditya-bhargava-grokaem-algoritmy-illustrirovannoe-posobie-dlya-p-39158380.jpg',
    },
    {
      id: 2,
      title: 'Вы не знаете JS!',
      author: 'Kyle Simpson',
      price: 650,
      coverImage: 'https://cv2.litres.ru/pub/c/pdf-kniga/cover_330/43123823-kayl-simpson-vy-ne-znaete-js-asinhronnaya-obrabotka-i-optimizaciy-43123823.jpg',
    },
    {
      id: 3,
      title: 'Выразительный JavaScript',
      author: 'Marijn Haverbeke',
      price: 1200,
      coverImage: 'https://cv6.litres.ru/pub/c/pdf-kniga/cover_415/50447564-mareyn-haverbeke-vyrazitelnyy-javascript-sovremennoe-veb-programm-50447564.jpg',
    },
    {
      id: 4,
      title: 'Изучаем JavaScript',
      author: 'Ethan Brown',
      price: 1200,
      coverImage: 'https://cdn1.ozone.ru/multimedia/wc1200/1019046801.jpg',

    }

  ];

  getBooks() {
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        // reject(new Error('Что то пошло не так!'))
        resolve(this.data);
      }, 700);
    });
  };

};