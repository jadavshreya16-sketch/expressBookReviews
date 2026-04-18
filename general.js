const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:3000/');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:3000/isbn/${isbn}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Get books by Author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:3000/author/${author}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// Get books by Title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:3000/title/${title}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};
