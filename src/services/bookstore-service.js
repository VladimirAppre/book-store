
export default class BookstoreService {

  data = [
    {
      id: 1,
      title: 'Грокаем алгоритмы',
      author: 'Адитья Бхаргава',
      price: 650,
      coverImage: 'https://cv8.litres.ru/pub/c/pdf-kniga/cover_330/39158380-aditya-bhargava-grokaem-algoritmy-illustrirovannoe-posobie-dlya-p-39158380.jpg',},
    {
      id: 2,
      title: 'Вы не знаете JS!',
      author: 'Кайл Симпсон',
      price: 650,
      coverImage: 'https://cv2.litres.ru/pub/c/pdf-kniga/cover_330/43123823-kayl-simpson-vy-ne-znaete-js-asinhronnaya-obrabotka-i-optimizaciy-43123823.jpg',
    }
  ];

  getBooks() {
    return new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve(this.data);
      }, 700);
    });
  };

};