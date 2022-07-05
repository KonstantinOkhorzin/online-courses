import {getResourse} from "../services/services.js";

export class CardCourses {
    constructor(src, category, course, price, speaker, parentSelector, ...classes) {
      this.src = src;
      this.category = category;
      this.course = course;
      this.price = price;
      this.speaker = speaker;
      this.parent = document.querySelector(parentSelector);
      this.modificator = this.setCatagoryClass();
      this.classes = classes;
    }
    setCatagoryClass() {
      switch(this.category) {
        case 'Marketing':
          return 'marketing';
        case 'Management':
          return 'management';
        case 'HR & Recruting':
          return 'hr';
        case 'Design':
          return 'design';
        case 'Development':
          return 'dev';
        default:
          return 'dev';
      } 
    }
    render() {
      const element = document.createElement('li');
      this.classes.forEach(className => element.classList.add(className));
      element.innerHTML = `
        <div class="card-courses__avatar">
          <img class="card-courses__img" src=${this.src} alt="by ${this.speaker}">
        </div>
        <div class="card-courses__content">
          <a class="card-courses__category card-courses__category_${this.modificator}"
            href="courses.html">${this.category}</a>
          <a class="card-courses__course" href="course.html">${this.course}</a>
          <div class="card-courses__info">
            <div class="card-courses__price">${this.price}</div>
            <div class="card-courses__speaker">by ${this.speaker}</div>
          </div>
        </div>
      `;
      this.parent.append(element);
    }
  }

  getResourse('http://localhost:3000/courses')
    .then(data => {
      data.forEach(({speaker, avatar, course, category, price}) => {
        new CardCourses(avatar, category, course, price, speaker, '.main-page-courses__list', 'card-courses').render();
      });
    });