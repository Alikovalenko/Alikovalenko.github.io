var slider = tns({
    container: '.carusell',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    controlsContainer: false,
    speed:3000,
    autoplayDirection: "backward",
    autoplayButtonOutput: false,
    navPosition:"bottom",
    controlsText:['',''],
    autoplayTimeout:20000
  });
  
  window.addEventListener('scroll', e =>
  {
    let navbar = document.getElementById('green_line').classList
    let active_class = "navbar_scroled"
    if(pageYOffset > 315) navbar.add(active_class)
    else navbar.remove(active_class)
  });
  function Lang() {
    let over = document.getElementById('ov');
            over.style.display='block';
  }
  function Closeln() {
    let over = document.getElementById('ov');
            over.style.display='none';
  }
  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header_menu'),
    menuItem = document.querySelectorAll('.header_menu_item'),
    hamburger = document.querySelector('.hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header_menu_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header_menu_active');
        })
    })
  })
  function sendEmail(){
    window.location.href='mailto:makeshopua@gmail.com';
  }
  function openMap(){
    const latitude = 48.353338;
    const longitude =33.533036;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(url, '_blank');
  }
  function makePhoneCall(phoneNumber){
   window.open('tel:'+phoneNumber,'_blank');
  }
  function Search_all() {
    let over = document.getElementById('srch_site');
            over.style.display='block';
  }
  function CloseSh() {
    let over = document.getElementById('srch_site');
            over.style.display='none';
  }
  function Search_site_all() {
    // Получаем поисковый запрос из поля ввода и приводим его к нижнему регистру
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // Список страниц сайта, на которых будет проводиться поиск
    const pages = ['index.html', 'about.html', 'advertising.html', 'contact.html', 'news.html', 'user.html','indexdeu.html','indexrus.html',
      'indexeng.html','abouteng.html','aboutdeu.html','aboutrus.html','advertisingdeu.html','advertisingeng.html','advertisingrus.html',
      'contacteng.html','contactdeu.html','contactrus.html','newseng.html','newsdeu.html','newsrus.html','review.html','reviewen.html',
      'reviewrus.html']; 
    let found = false; // Флаг для определения, найден ли поисковый запрос
    // Перебираем каждую страницу в списке
    pages.forEach(page => {
        if (found) return; // Прерываем цикл, если запрос уже найден
        // Загружаем содержимое страницы
        fetch(page)
            .then(response => response.text()) // Преобразуем ответ в текст
            .then(html => {
                // Создаем новый DOM-парсер
                const parser = new DOMParser();
                // Парсим HTML-код страницы
                const doc = parser.parseFromString(html, 'text/html');
                // Функция для подсветки текста
                function highlightText(node) {
                    if (node.nodeType === Node.TEXT_NODE) {
                        // Если узел является текстом, проверяем наличие поискового запроса
                        const text = node.textContent.toLowerCase();
                        const index = text.indexOf(searchTerm);
                        if (index !== -1) {
                            // Если поисковый запрос найден, разбиваем текст на части
                            const before = node.textContent.substring(0, index);
                            const highlighted = node.textContent.substring(index, index + searchTerm.length);
                            const after = node.textContent.substring(index + searchTerm.length);
                            // Создаем новый документ-фрагмент
                            const fragment = document.createDocumentFragment();
                            fragment.appendChild(document.createTextNode(before));
                            // Создаем элемент <span> для подсветки
                            const span = document.createElement('span');
                            span.classList.add('highlight');
                            span.textContent = highlighted;
                            fragment.appendChild(span);
                            fragment.appendChild(document.createTextNode(after));
                            // Заменяем старый текст новым фрагментом
                            node.parentNode.replaceChild(fragment, node);
                            found = true; // Устанавливаем флаг найденного запроса в true
                            // Обновляем текущий документ с подсвеченным текстом
                            document.open();
                            document.write(doc.documentElement.outerHTML);
                            document.close();
                        }
                    } else if (node.nodeType === Node.ELEMENT_NODE) {
                        // Если узел является элементом, рекурсивно вызываем функцию для его дочерних узлов
                        node.childNodes.forEach(highlightText);
                    }
                }
                // Вызываем функцию для поиска и подсветки на всей странице
                highlightText(doc.body);
            })
            .catch(error => console.error('Error:', error)); // Обрабатываем ошибки загрузки страницы
    });
  }
  function ENG() {
    const urleng = `contacteng.html`;
    const urlrus = `contactrus.html`;
    const urldeu = `contactdeu.html`;
    const url = `contact.html`;
    window.close(url, '_blank');
    window.close(urldeu, '_blank');
    window.close(urlrus, '_blank');
    window.open(urleng, '_blank');  
  }
  function UKR() {
    const urleng = `contacteng.html`;
    const urlrus = `contactrus.html`;
    const urldeu = `contactdeu.html`;
    const url = `contact.html`;
    window.open(url, '_blank');
    window.close(urldeu, '_blank');
    window.close(urlrus, '_blank');
    window.close(urleng, '_blank');  
  }
  function DEU() {
    const urleng = `contacteng.html`;
    const urlrus = `contactrus.html`;
    const urldeu = `contactdeu.html`;
    const url = `contact.html`;
    window.close(url, '_blank');
    window.open(urldeu, '_blank');
    window.close(urlrus, '_blank');
    window.close(urleng, '_blank');      
}
function RUS() {
  const urleng = `contacteng.html`;
  const urlrus = `contactrus.html`;
  const urldeu = `contactdeu.html`;
  const url = `contact.html`;
  window.close(url, '_blank');
  window.close(urldeu, '_blank');
  window.open(urlrus, '_blank');
  window.close(urleng, '_blank');  
  }
  