import Book from "../models/BookReview";

export const getAllBooks = async () => {
  return await Book.find();
};

export const createBook = async (data: any) => {
  return await Book.create(data);
};

export const updateBookById = async (id: string, data: any) => {
  return await Book.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBookById = async (id: string) => {
  return await Book.findByIdAndDelete(id);
};
