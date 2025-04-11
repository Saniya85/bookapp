import { Request, Response } from "express";
import { getAllBooks, createBook, updateBookById, deleteBookById } from "../services/bookService";

export const getBooks = async (req: Request, res: Response) => {
  const books = await getAllBooks();
  res.json(books);
};

export const addBook = async (req: Request, res: Response) => {
  const book = await createBook(req.body);
  res.status(201).json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const book = await updateBookById(req.params.id, req.body);
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  await deleteBookById(req.params.id);
  res.json({ message: "Book deleted" });
};



