import {TreeviewItem} from "ngx-treeview";

// TODO переделать на категория получаеыме с сервера
export class BookService {
  getBooks(): TreeviewItem[] {
    const itCategory = new TreeviewItem({
      text: 'IT', value: 'IT', children: [
              { text: 'Angular 1', value: 'IT' },
              { text: 'Angular 2', value: 'IT'}
          ]
        });

    const otherCategory = new TreeviewItem({
      text: 'Cooking', value: 'Cooking', children: [
        { text: 'Best reciepes', value: 'Cooking'}
      ]
    });

    const fairyTeil = new TreeviewItem({
      text: 'Fairyteils', value: 'Fairyteil', children: [
        {text: 'Whitesnow', value: 'Fairyteil'}
      ]
    });

    const simpleBook = new TreeviewItem({
      text: 'Simple Books', value: 'SimpleBook', children: [
        {text: 'Good Book', value: 'SimpleBook'},
        {text: 'Bad book', value: 'SimpleBook'}
      ]
    });

    return [itCategory, otherCategory, fairyTeil, simpleBook];
  }
}
