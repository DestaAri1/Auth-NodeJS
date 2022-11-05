import book from "../models/bookModel.js";

export const getBook = async(req, res) => {
    try {
        const Book = await book.findAll();
        res.json(Book);
    } catch (error) {
        
    }
}