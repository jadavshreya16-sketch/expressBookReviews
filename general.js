const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:3000/');
    return response.data;
  } catch (error) {
    console.error("Error fetching books:", error.message);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:3000/isbn/${isbn}`);
    
    if (!response.data) {
      return { message: "Book not found" };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
}

// Get books by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:3000/author/${author}`);
    
    if (!response.data || response.data.length === 0) {
      return { message: "No books found for this author" };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// Get books by Title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:3000/title/${title}`);
    
    if (!response.data || response.data.length === 0) {
      return { message: "No books found for this title" };
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
