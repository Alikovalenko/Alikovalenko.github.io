

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
function Search_all() {
  let over = document.getElementById('srch_site');
          over.style.display='block';
}
function CloseSh() {
  let over = document.getElementById('srch_site');
          over.style.display='none';
}

function Search_site_all() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const pages = ['index.html', 'about.html', 'advertising.html', 'contact.html','news.html','user.html']; // Замініть на свої сторінки
  let found = false;
  pages.forEach(page => {
      if (found) return; // Зупиняємося, якщо термін вже знайдено
      fetch(page)
          .then(response => response.text())
          .then(html => {
              const parser = new DOMParser();
              const doc = parser.parseFromString(html, 'text/html');
              // Функція для підсвітки тексту
              function highlightText(node) {
                  if (node.nodeType === Node.TEXT_NODE) {
                      const text = node.textContent.toLowerCase();
                      const index = text.indexOf(searchTerm);
                      if (index !== -1) {
                          const before = node.textContent.substring(0, index);
                          const highlighted = node.textContent.substring(index, index + searchTerm.length);
                          const after = node.textContent.substring(index + searchTerm.length);
                          const fragment = document.createDocumentFragment();
                          fragment.appendChild(document.createTextNode(before));
                          const span = document.createElement('span');
                          span.classList.add('highlight');
                          span.textContent = highlighted;
                          fragment.appendChild(span);
                          fragment.appendChild(document.createTextNode(after));
                          node.parentNode.replaceChild(fragment, node);
                          found = true; // Встановлюємо found на true
                          // Відображаємо змінену HTML
                          document.open();
                          document.write(doc.documentElement.outerHTML);
                          document.close();
                      }
                  } else if (node.nodeType === Node.ELEMENT_NODE) {
                      node.childNodes.forEach(highlightText);
                  }
              }
              // Викликаємо функцію для пошуку та підсвітки на всій сторінці
              highlightText(doc.body);
          })
          .catch(error => console.error('Помилка при завантаженні сторінки:', error));
  });
}

function ENG() {
  let ukr = document.getElementById('logo_ukr');
  let eng = document.getElementById('logo_eng');
  let deu = document.getElementById('logo_deu');
  let rus = document.getElementById('logo_rus');
  let markereng = document.getElementById('marker_eng');
  let marker = document.getElementById('marker');
  let markerdeu = document.getElementById('marker_deu');
  let markerrus = document.getElementById('marker_rus');
  let btsukr = document.getElementById('basket_ukr');
  let btseng = document.getElementById('basket_eng');
  let btsdeu = document.getElementById('basket_deu');
  let descukr = document.getElementById('desc_ukr');
  let desceng = document.getElementById('desc_eng');
  let desceng2 = document.getElementById('desc_eng2');
  let desclink2 = document.getElementById('desc_link2');
  let descdeu2 = document.getElementById('desc_deu2');
  let descdeu = document.getElementById('desc_deu');
  let descrus2 = document.getElementById('desc_rus2');
  let desctoys1 = document.getElementById('desc_toys_eng1');
  let desctoys = document.getElementById('desc_toys_ukr');
  let desctoys2 = document.getElementById('desc_toys_deu');
  let desctoys3 = document.getElementById('desc_toys_rus');
  let deschome = document.getElementById('desc_home');
  let deschome1 = document.getElementById('desc_home1');
  let deschome2 = document.getElementById('desc_home2');
  let deschome3 = document.getElementById('desc_home3');
  let clothes = document.getElementById('clothes');
  let clothes1 = document.getElementById('clothes1');
  let clothes2 = document.getElementById('clothes2');
  let clothes3 = document.getElementById('clothes3');
  let slink1 = document.getElementById('slink1UA');
  let slink1_1 = document.getElementById('slink1_1ENG');
  let slink1_2 = document.getElementById('slink1_2DEU');
  let slink1_3 = document.getElementById('slink1_3RUS');
  let slink2 = document.getElementById('slink2UA');
  let slink2_1 = document.getElementById('slink2_1ENG');
  let slink2_2 = document.getElementById('slink2_2DEU');
  let slink2_3 = document.getElementById('slink2_3RUS');
  let slink3 = document.getElementById('slink3UA');
  let slink3_1 = document.getElementById('slink3_1ENG');
  let slink3_2 = document.getElementById('slink3_2DEU');
  let slink4 = document.getElementById('slink4UA');
  let slink4_1 = document.getElementById('slink4_1ENG');
  let slink4_2 = document.getElementById('slink4_2DEU');
  let slink4_3 = document.getElementById('slink4_3RUS');
  let slink5 = document.getElementById('slink5UA');
  let slink5_1 = document.getElementById('slink5_1ENG');
  let slink5_2 = document.getElementById('slink5_2DEU');
  let slink5_3 = document.getElementById('slink5_3RUS');
  let slink6 = document.getElementById('slink6UA');
  let slink6_1 = document.getElementById('slink6_1ENG');
  let slink6_2 = document.getElementById('slink6_2DEU');
  let slink6_3 = document.getElementById('slink6_3RUS');
  let slink7 = document.getElementById('slink7UA');
  let slink7_1 = document.getElementById('slink7_1ENG');
  let slink7_2 = document.getElementById('slink7_2DEU');
  let slink7_3 = document.getElementById('slink7_3RUS');
  let slink8 = document.getElementById('slink8UA');
  let slink8_1 = document.getElementById('slink8_1ENG');
  let slink8_2 = document.getElementById('slink8_2DEU');
  let slink8_3 = document.getElementById('slink8_3RUS');
  let slink9 = document.getElementById('slink9UA');
  let slink9_1 = document.getElementById('slink9_1ENG');
  let slink9_2 = document.getElementById('slink9_2DEU');
  let slink9_3 = document.getElementById('slink9_3RUS');
  let over = document.getElementById('ov');
          over.style.display='none';
          eng.style.display='block';
          ukr.style.display='none';
          deu.style.display='none';
          rus.style.display='none';
          markereng.style.display='block';
          markerdeu.style.display='none';
          markerrus.style.display='none';
          marker.style.display='none';
          btsukr.style.display='none';
          btseng.style.display='block';
          btsdeu.style.display='none';
          descukr.style.display='none';
          desceng.style.display='block';
          desceng2.style.display='block';  
          desclink2.style.display='none';    
          descdeu.style.display='none';  
          descdeu2.style.display='none';
          descrus2.style.display='none';
          desctoys1.style.display='block';   
          desctoys.style.display='none';
          desctoys2.style.display='none';        
          desctoys3.style.display='none'; 
          deschome1.style.display='block'; 
          deschome.style.display='none'; 
          deschome2.style.display='none';  
          deschome3.style.display='none'; 
          clothes.style.display='none'; 
          clothes1.style.display='block'; 
          clothes2.style.display='none'; 
          clothes3.style.display='none'; 
          slink1.style.display='none'; 
          slink1_1.style.display='block'; 
          slink1_2.style.display='none'; 
          slink1_3.style.display='none';  
          slink2_1.style.display='block'; 
          slink2.style.display='none'; 
          slink2_2.style.display='none'; 
          slink2_3.style.display='none';
          slink3.style.display='none'; 
          slink3_1.style.display='block'; 
          slink3_2.style.display='none';
          slink4.style.display='none'; 
          slink4_1.style.display='block'; 
          slink4_2.style.display='none'; 
          slink4_3.style.display='none'; 
          slink5.style.display='none'; 
          slink5_1.style.display='block'; 
          slink5_2.style.display='none'; 
          slink5_3.style.display='none'; 
          slink6.style.display='none'; 
          slink6_1.style.display='block'; 
          slink6_2.style.display='none'; 
          slink6_3.style.display='none'; 
          slink7.style.display='none'; 
          slink7_1.style.display='block'; 
          slink7_2.style.display='none'; 
          slink7_3.style.display='none'; 
          slink8.style.display='none'; 
          slink8_1.style.display='block'; 
          slink8_2.style.display='none'; 
          slink8_3.style.display='none'; 
          slink9.style.display='none'; 
          slink9_1.style.display='block'; 
          slink9_2.style.display='none'; 
          slink9_3.style.display='none';
}
function UKR() {
  let ukr = document.getElementById('logo_ukr');
  let eng = document.getElementById('logo_eng');
  let deu = document.getElementById('logo_deu');
  let rus = document.getElementById('logo_rus');
  let markereng = document.getElementById('marker_eng');
  let markerdeu = document.getElementById('marker_deu');
  let markerrus = document.getElementById('marker_rus');
  let marker = document.getElementById('marker');
  let btsukr = document.getElementById('basket_ukr');
  let btseng = document.getElementById('basket_eng');
  let btsdeu = document.getElementById('basket_deu');
  let desceng = document.getElementById('desc_eng');
  let desceng2 = document.getElementById('desc_eng2');
  let descukr = document.getElementById('desc_ukr');
  let desclink2 = document.getElementById('desc_link2');
  let descdeu2 = document.getElementById('desc_deu2');
  let descdeu = document.getElementById('desc_deu');
  let descrus2 = document.getElementById('desc_rus2');
  let desctoys1 = document.getElementById('desc_toys_eng1');
  let desctoys = document.getElementById('desc_toys_ukr');
  let desctoys2 = document.getElementById('desc_toys_deu');
  let desctoys3 = document.getElementById('desc_toys_rus');
  let deschome = document.getElementById('desc_home');
  let deschome1 = document.getElementById('desc_home1');
  let deschome2 = document.getElementById('desc_home2');
  let deschome3 = document.getElementById('desc_home3');
  let clothes = document.getElementById('clothes');
  let clothes1 = document.getElementById('clothes1');
  let clothes2 = document.getElementById('clothes2');
  let clothes3 = document.getElementById('clothes3');
  let slink1 = document.getElementById('slink1UA');
  let slink1_1 = document.getElementById('slink1_1ENG');
  let slink1_2 = document.getElementById('slink1_2DEU');
  let slink1_3 = document.getElementById('slink1_3RUS');
  let slink2 = document.getElementById('slink2UA');
  let slink2_1 = document.getElementById('slink2_1ENG');
  let slink2_2 = document.getElementById('slink2_2DEU');
  let slink2_3 = document.getElementById('slink2_3RUS');
  let slink3 = document.getElementById('slink3UA');
  let slink3_1 = document.getElementById('slink3_1ENG');
  let slink3_2 = document.getElementById('slink3_2DEU');
  let slink4 = document.getElementById('slink4UA');
  let slink4_1 = document.getElementById('slink4_1ENG');
  let slink4_2 = document.getElementById('slink4_2DEU');
  let slink4_3 = document.getElementById('slink4_3RUS');
  let slink5 = document.getElementById('slink5UA');
  let slink5_1 = document.getElementById('slink5_1ENG');
  let slink5_2 = document.getElementById('slink5_2DEU');
  let slink5_3 = document.getElementById('slink5_3RUS');
  let slink6 = document.getElementById('slink6UA');
  let slink6_1 = document.getElementById('slink6_1ENG');
  let slink6_2 = document.getElementById('slink6_2DEU');
  let slink6_3 = document.getElementById('slink6_3RUS');
  let slink7 = document.getElementById('slink7UA');
  let slink7_1 = document.getElementById('slink7_1ENG');
  let slink7_2 = document.getElementById('slink7_2DEU');
  let slink7_3 = document.getElementById('slink7_3RUS');
  let slink8 = document.getElementById('slink8UA');
  let slink8_1 = document.getElementById('slink8_1ENG');
  let slink8_2 = document.getElementById('slink8_2DEU');
  let slink8_3 = document.getElementById('slink8_3RUS');
  let slink9 = document.getElementById('slink9UA');
  let slink9_1 = document.getElementById('slink9_1ENG');
  let slink9_2 = document.getElementById('slink9_2DEU');
  let slink9_3 = document.getElementById('slink9_3RUS');
  let over = document.getElementById('ov');
          over.style.display='none';
          eng.style.display='none';
          ukr.style.display='block';
          deu.style.display='none';
          rus.style.display='none';
          markereng.style.display='none';
          markerdeu.style.display='none';
          markerrus.style.display='none';
          marker.style.display='block';
          btsukr.style.display='block';
          btseng.style.display='none';
          btsdeu.style.display='none';
          desceng.style.display='none';
          descukr.style.display='block';
          desceng2.style.display='none';
          descukr.style.display='block';
          desclink2.style.display='block';  
          descdeu.style.display='none'; 
          descdeu2.style.display='none';  
          descrus2.style.display='none'; 
          desctoys1.style.display='none';   
          desctoys.style.display='block';   
          desctoys2.style.display='none';  
          desctoys3.style.display='none';
          deschome1.style.display='none'; 
          deschome.style.display='block'; 
          deschome2.style.display='none';  
          deschome3.style.display='none';  
          clothes.style.display='block'; 
          clothes1.style.display='none'; 
          clothes2.style.display='none'; 
          clothes3.style.display='none'; 
          slink1.style.display='block'; 
          slink1_1.style.display='none'; 
          slink1_2.style.display='none'; 
          slink1_3.style.display='none';  
          slink2_1.style.display='none'; 
          slink2.style.display='block'; 
          slink2_2.style.display='none'; 
          slink2_3.style.display='none';
          slink3.style.display='block'; 
          slink3_1.style.display='none'; 
          slink3_2.style.display='none';
          slink4.style.display='block'; 
          slink4_1.style.display='none'; 
          slink4_2.style.display='none'; 
          slink4_3.style.display='none'; 
          slink5.style.display='block'; 
          slink5_1.style.display='none'; 
          slink5_2.style.display='none'; 
          slink5_3.style.display='none'; 
          slink6.style.display='block'; 
          slink6_1.style.display='none'; 
          slink6_2.style.display='none'; 
          slink6_3.style.display='none'; 
          slink7.style.display='block'; 
          slink7_1.style.display='none'; 
          slink7_2.style.display='none'; 
          slink7_3.style.display='none'; 
          slink8.style.display='block'; 
          slink8_1.style.display='none'; 
          slink8_2.style.display='none'; 
          slink8_3.style.display='none';  
          slink9.style.display='block'; 
          slink9_1.style.display='none'; 
          slink9_2.style.display='none'; 
          slink9_3.style.display='none'; 
}
function DEU() {
  let ukr = document.getElementById('logo_ukr');
  let eng = document.getElementById('logo_eng');
  let deu = document.getElementById('logo_deu');
  let rus = document.getElementById('logo_rus');
  let markerdeu = document.getElementById('marker_deu');
  let markerrus = document.getElementById('marker_rus');
  let markereng = document.getElementById('marker_eng');
  let marker = document.getElementById('marker');
  let btsukr = document.getElementById('basket_ukr');
  let btseng = document.getElementById('basket_eng');
  let btsdeu = document.getElementById('basket_deu');
  let desceng = document.getElementById('desc_eng');
  let desceng2 = document.getElementById('desc_eng2');
  let descukr = document.getElementById('desc_ukr');
  let desclink2 = document.getElementById('desc_link2');
  let descdeu2 = document.getElementById('desc_deu2');
  let descdeu = document.getElementById('desc_deu');
  let descrus2 = document.getElementById('desc_rus2');
  let desctoys1 = document.getElementById('desc_toys_eng1');
  let desctoys = document.getElementById('desc_toys_ukr');
  let desctoys2 = document.getElementById('desc_toys_deu');
  let desctoys3 = document.getElementById('desc_toys_rus');
  let deschome = document.getElementById('desc_home');
  let deschome1 = document.getElementById('desc_home1');
  let deschome2 = document.getElementById('desc_home2');
  let deschome3 = document.getElementById('desc_home3');
  let clothes = document.getElementById('clothes');
  let clothes1 = document.getElementById('clothes1');
  let clothes2 = document.getElementById('clothes2');
  let clothes3 = document.getElementById('clothes3');
  let slink1 = document.getElementById('slink1UA');
  let slink1_1 = document.getElementById('slink1_1ENG');
  let slink1_2 = document.getElementById('slink1_2DEU');
  let slink1_3 = document.getElementById('slink1_3RUS');
  let slink2 = document.getElementById('slink2UA');
  let slink2_1 = document.getElementById('slink2_1ENG');
  let slink2_2 = document.getElementById('slink2_2DEU');
  let slink2_3 = document.getElementById('slink2_3RUS');
  let slink3 = document.getElementById('slink3UA');
  let slink3_1 = document.getElementById('slink3_1ENG');
  let slink3_2 = document.getElementById('slink3_2DEU');
  let slink4 = document.getElementById('slink4UA');
  let slink4_1 = document.getElementById('slink4_1ENG');
  let slink4_2 = document.getElementById('slink4_2DEU');
  let slink4_3 = document.getElementById('slink4_3RUS');
  let slink5 = document.getElementById('slink5UA');
  let slink5_1 = document.getElementById('slink5_1ENG');
  let slink5_2 = document.getElementById('slink5_2DEU');
  let slink5_3 = document.getElementById('slink5_3RUS');
  let slink6 = document.getElementById('slink6UA');
  let slink6_1 = document.getElementById('slink6_1ENG');
  let slink6_2 = document.getElementById('slink6_2DEU');
  let slink6_3 = document.getElementById('slink6_3RUS');
  let slink7 = document.getElementById('slink7UA');
  let slink7_1 = document.getElementById('slink7_1ENG');
  let slink7_2 = document.getElementById('slink7_2DEU');
  let slink7_3 = document.getElementById('slink7_3RUS');
  let slink8 = document.getElementById('slink8UA');
  let slink8_1 = document.getElementById('slink8_1ENG');
  let slink8_2 = document.getElementById('slink8_2DEU');
  let slink8_3 = document.getElementById('slink8_3RUS');
  let slink9 = document.getElementById('slink9UA');
  let slink9_1 = document.getElementById('slink9_1ENG');
  let slink9_2 = document.getElementById('slink9_2DEU');
  let slink9_3 = document.getElementById('slink9_3RUS');
  let over = document.getElementById('ov');
          over.style.display='none';
          eng.style.display='none';
          ukr.style.display='none';
          rus.style.display='none';
          deu.style.display='block';
          markerdeu.style.display='block';
          markerrus.style.display='none';
          markereng.style.display='none';
          marker.style.display='none';
          btsukr.style.display='none';
          btseng.style.display='none';
          btsdeu.style.display='block';
          desceng.style.display='none';
          desceng2.style.display='none';
          descukr.style.display='none';
          desclink2.style.display='none';  
          descdeu.style.display='block';  
          descdeu2.style.display='block'; 
          descrus2.style.display='none'; 
          desctoys1.style.display='none';  
          desctoys.style.display='none';
          desctoys2.style.display='block'; 
          desctoys3.style.display='none';  
          deschome1.style.display='none'; 
          deschome.style.display='none'; 
          deschome2.style.display='block';  
          deschome3.style.display='none'; 
          clothes.style.display='none'; 
          clothes1.style.display='none';
          clothes2.style.display='block'; 
          clothes3.style.display='none';   
          slink1.style.display='none'; 
          slink1_1.style.display='none'; 
          slink1_2.style.display='block'; 
          slink1_3.style.display='none'; 
          slink2_1.style.display='none'; 
          slink2.style.display='none'; 
          slink2_2.style.display='block'; 
          slink2_3.style.display='none';  
          slink3.style.display='none'; 
          slink3_1.style.display='none'; 
          slink3_2.style.display='block';
          slink4.style.display='none'; 
          slink4_1.style.display='none'; 
          slink4_2.style.display='block'; 
          slink4_3.style.display='none'; 
          slink5.style.display='none'; 
          slink5_1.style.display='none'; 
          slink5_2.style.display='block'; 
          slink5_3.style.display='none'; 
          slink6.style.display='none'; 
          slink6_1.style.display='none'; 
          slink6_2.style.display='block'; 
          slink6_3.style.display='none'; 
          slink7.style.display='none'; 
          slink7_1.style.display='none'; 
          slink7_2.style.display='block'; 
          slink7_3.style.display='none'; 
          slink8.style.display='none'; 
          slink8_1.style.display='none'; 
          slink8_2.style.display='block'; 
          slink8_3.style.display='none'; 
          slink9.style.display='none'; 
          slink9_1.style.display='none'; 
          slink9_2.style.display='block'; 
          slink9_3.style.display='none';  
          
}
function RUS() {
  let ukr = document.getElementById('logo_ukr');
  let eng = document.getElementById('logo_eng');
  let deu = document.getElementById('logo_deu');
  let rus = document.getElementById('logo_rus');
  let markerdeu = document.getElementById('marker_deu');
  let markerrus = document.getElementById('marker_rus');
  let markereng = document.getElementById('marker_eng');
  let marker = document.getElementById('marker');
  let btsukr = document.getElementById('basket_ukr');
  let btseng = document.getElementById('basket_eng');
  let btsdeu = document.getElementById('basket_deu');
  let desceng = document.getElementById('desc_eng');
  let desceng2 = document.getElementById('desc_eng2');
  let descukr = document.getElementById('desc_ukr');
  let descdeu = document.getElementById('desc_deu');
  let descdeu2 = document.getElementById('desc_deu2');
  let descrus2 = document.getElementById('desc_rus2');
  let desclink2 = document.getElementById('desc_link2');
  let desctoys1 = document.getElementById('desc_toys_eng1');
  let desctoys = document.getElementById('desc_toys_ukr');
  let desctoys2 = document.getElementById('desc_toys_deu');
  let desctoys3 = document.getElementById('desc_toys_rus');
  let deschome = document.getElementById('desc_home');
  let deschome1 = document.getElementById('desc_home1');
  let deschome2 = document.getElementById('desc_home2');
  let deschome3 = document.getElementById('desc_home3');
  let clothes = document.getElementById('clothes');
  let clothes1 = document.getElementById('clothes1');
  let clothes2 = document.getElementById('clothes2');
  let clothes3 = document.getElementById('clothes3');
  let slink1 = document.getElementById('slink1UA');
  let slink1_1 = document.getElementById('slink1_1ENG');
  let slink1_2 = document.getElementById('slink1_2DEU');
  let slink1_3 = document.getElementById('slink1_3RUS');
  let slink2 = document.getElementById('slink2UA');
  let slink2_1 = document.getElementById('slink2_1ENG');
  let slink2_2 = document.getElementById('slink2_2DEU');
  let slink2_3 = document.getElementById('slink2_3RUS');
  let slink3 = document.getElementById('slink3UA');
  let slink3_1 = document.getElementById('slink3_1ENG');
  let slink3_2 = document.getElementById('slink3_2DEU');
  let slink4 = document.getElementById('slink4UA');
  let slink4_1 = document.getElementById('slink4_1ENG');
  let slink4_2 = document.getElementById('slink4_2DEU');
  let slink4_3 = document.getElementById('slink4_3RUS');
  let slink5 = document.getElementById('slink5UA');
  let slink5_1 = document.getElementById('slink5_1ENG');
  let slink5_2 = document.getElementById('slink5_2DEU');
  let slink5_3 = document.getElementById('slink5_3RUS');
  let slink6 = document.getElementById('slink6UA');
  let slink6_1 = document.getElementById('slink6_1ENG');
  let slink6_2 = document.getElementById('slink6_2DEU');
  let slink6_3 = document.getElementById('slink6_3RUS');
  let slink7 = document.getElementById('slink7UA');
  let slink7_1 = document.getElementById('slink7_1ENG');
  let slink7_2 = document.getElementById('slink7_2DEU');
  let slink7_3 = document.getElementById('slink7_3RUS');
  let slink8 = document.getElementById('slink8UA');
  let slink8_1 = document.getElementById('slink8_1ENG');
  let slink8_2 = document.getElementById('slink8_2DEU');
  let slink8_3 = document.getElementById('slink8_3RUS');
  let slink9 = document.getElementById('slink9UA');
  let slink9_1 = document.getElementById('slink9_1ENG');
  let slink9_2 = document.getElementById('slink9_2DEU');
  let slink9_3 = document.getElementById('slink9_3RUS');
  let over = document.getElementById('ov');
          over.style.display='none';
          eng.style.display='none';
          ukr.style.display='none';
          rus.style.display='block';
          deu.style.display='none';
          markerdeu.style.display='none';
          markerrus.style.display='block';
          markereng.style.display='none';
          marker.style.display='none';
          btsukr.style.display='block';
          btseng.style.display='none';
          btsdeu.style.display='none';
          desceng.style.display='none';
          desceng2.style.display='none';
          descukr.style.display='block';
          desclink2.style.display='none';  
          descdeu.style.display='none';  
          descdeu2.style.display='none'; 
          descrus2.style.display='block'; 
          desctoys1.style.display='none';  
          desctoys.style.display='none';  
          desctoys2.style.display='none';  
          desctoys3.style.display='block'; 
          deschome1.style.display='none'; 
          deschome.style.display='none'; 
          deschome2.style.display='none';  
          deschome3.style.display='block'; 
          clothes.style.display='none'; 
          clothes1.style.display='none';
          clothes2.style.display='none'; 
          clothes3.style.display='block'; 
          slink1.style.display='none'; 
          slink1_1.style.display='none'; 
          slink1_2.style.display='none';   
          slink1_3.style.display='block';  
          slink2_1.style.display='none'; 
          slink2.style.display='none'; 
          slink2_2.style.display='none'; 
          slink2_3.style.display='block';
          slink3.style.display='block'; 
          slink3_1.style.display='none'; 
          slink3_2.style.display='none';
          slink4.style.display='none'; 
          slink4_1.style.display='none'; 
          slink4_2.style.display='none'; 
          slink4_3.style.display='block'; 
          slink5.style.display='none'; 
          slink5_1.style.display='none'; 
          slink5_2.style.display='none'; 
          slink5_3.style.display='block'; 
          slink6.style.display='none'; 
          slink6_1.style.display='none'; 
          slink6_2.style.display='none'; 
          slink6_3.style.display='block'; 
          slink7.style.display='none'; 
          slink7_1.style.display='none'; 
          slink7_2.style.display='none'; 
          slink7_3.style.display='block';
          slink8.style.display='none'; 
          slink8_1.style.display='none'; 
          slink8_2.style.display='none'; 
          slink8_3.style.display='block';  
          slink9.style.display='none'; 
          slink9_1.style.display='none'; 
          slink9_2.style.display='none'; 
          slink9_3.style.display='block';      
}