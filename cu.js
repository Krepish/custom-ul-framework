/*
*cu - Custom UL
*Функция кастомизирующая списки UL
*/

function cu(selector) {

  if (selector) {

    if (window === this) {
      return new cu(selector);
    }
    /*Варианты поиска элементов
     * - Поиск всех UL в документе
     # - Поиск по id
     . - Поиск по классу
    */
    if(selector[0] === '*'){
      this.ulArr = document.getElementsByTagName("ul");
      return this; 
    } else if (selector[0] === '#' ) {
      this.ulArr = [document.getElementById(selector.slice(1, selector.length))];
      return this;
    } else if (selector[0] === '.') {
      this.ulArr = document.querySelectorAll("ul"+selector);
      return this;      
    } else {
      console.error(`Некорректный параметр поиска селектора ${selector}`);
      return
    }
  };
}

/*Функция применяющаяя к UL стили, соответствующие переданному классу custClass*/
cu.prototype.makeCustomUl = function(custClass){
  if(this.ulArr !== undefined){
    [].forEach.call(this.ulArr, (elem) => { 
    elem.setAttribute("class",custClass);
      [].forEach.call( elem.children, (li) => { 
        let link = document.createElement("a");
        link.setAttribute("href","#");
        link.innerText = li.innerHTML;
        li.innerHTML = "";
        li.appendChild(link);
      })      
  });
  }
};