const axios = require('axios');

// Get all books
async function getAllBooks() {
  try {
    const response = await axios.get('http://localhost:3000/');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(`http://localhost:3000/isbn/${isbn}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`http://localhost:3000/author/${author}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

// Get books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`http://localhost:3000/title/${title}`);
    console.log(response.data);
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
