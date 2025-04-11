import express from "express";
import { getBooks, addBook, updateBook, deleteBook } from "../controllers/bookController";
import { protect, admin } from "../middleware/authMiddleware";
import { bookValidationSchema } from "../Validations/bookValidation";

const router = express.Router();
router.get("/", getBooks);
router.post("/", addBook);
router.put("/:id",  updateBook);
router.delete("/:id",  deleteBook);

export default router;
