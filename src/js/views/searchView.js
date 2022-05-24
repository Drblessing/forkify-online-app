import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('.search'); // skipcq

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }
  // publisher
  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', ev => {
      ev.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
