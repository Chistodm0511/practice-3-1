// ============================================================
// Практика 3: Классы и ООП
// ============================================================

import { Book } from "./task1-types";
import { filterByTitle, sortBooks } from "./task5-utils";

export class BookCatalog {
  // Состояние
  private books: Book[] = [];
  readonly id: string;

  // Конструктор
  constructor(id: string, books: Book[] = []) {
    this.id = id;
    this.books = books;
  }

  // Публичный API
  addBook(book: Book): void {
    // Не мутируем массив, а создаем новый (иммутабельность)
    this.books = [...this.books, book];
  }

  removeBook(id: string): void {
    // Создаем новый массив без книги с указанным id
    this.books = this.books.filter((b) => b.id !== id);
  }

  getBooks(): Book[] {
    // Возвращаем копию, чтобы внешний код не мог изменить внутренний массив
    return [...this.books];
  }

  searchByTitle(query: string): Book[] {
    // Переиспользуем filterByTitle из Практики 2.2
    return this.books.filter(filterByTitle(query));
  }

  sortBy(sortType: "year" | "rating"): Book[] {
    // Переиспользуем sortBooks из Практики 2.2
    return sortBooks(this.books, sortType);
  }

  // Геттер для получения количества книг
  get count(): number {
    return this.books.length;
  }
}