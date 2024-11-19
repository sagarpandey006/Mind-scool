// // src/components/BooksComponent.js
// import React, { useEffect, useState } from 'react';

// const BooksComponent = () => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     // Modified API URL without API Key
//     const API_URL = `https://www.googleapis.com/books/v1/volumes?q=meditation`;

//     const fetchBooks = async () => {
//         try {
//             const response = await fetch(API_URL);
//             if (!response.ok) throw new Error("Failed to fetch books");

//             const data = await response.json();
//             setBooks(data.items || []); // The books are inside the 'items' array
//             setLoading(false);
//         } catch (error) {
//             setError(error.message);
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchBooks();
//     }, []);

//     if (loading) return <div>Loading books...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (
//         <div className="p-6 bg-yellow-100 min-h-screen">
//             <h2 className="text-3xl font-semibold mb-4">Books and Thoughts</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {books.map((book, index) => (
//                     <div key={index} className="p-4 bg-white shadow rounded-lg">
//                         <h3 className="text-xl font-bold">{book.volumeInfo.title}</h3>
//                         <p className="text-md font-semibold">
//                             by {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"}
//                         </p>
//                         <p className="text-sm mt-2">{book.volumeInfo.publishedDate}</p>
//                         <p className="text-sm mt-2">{book.volumeInfo.description?.slice(0, 100)}...</p>
//                         <button
//                             onClick={() => window.open(book.volumeInfo.previewLink, '_blank')}
//                             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//                         >
//                             Read Book
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BooksComponent;






import React, { useEffect, useState } from 'react';

const BooksComponent = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [leaves, setLeaves] = useState(0); // Track leaves count
    const [totalScore, setTotalScore] = useState(0); // Track total score

    // Corrected API URL string with quotes
    const API_URL = "https://www.googleapis.com/books/v1/volumes?q=meditation";

    const fetchBooks = async () => {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error("Failed to fetch books");

            const data = await response.json();
            setBooks(data.items || []); // The books are inside the 'items' array
            setLoading(false);
            localStorage.setItem('books', JSON.stringify(data.items || [])); // Save books to localStorage

            // Check if total score should be updated based on leaves
            if (leaves >= 1) {
                setTotalScore(leaves); // Set total score to be equal to the leaves count
                localStorage.setItem('totalScore', leaves); // Save total score to localStorage
            }

        } catch (error) {
            setError(error.message);
            setLoading(false);
            localStorage.setItem('booksError', error.message); // Save error to localStorage
        }
    };

    // Increase leaves when a book is selected
    const handleBookSelect = () => {
        const newLeaves = leaves + 1;
        setLeaves(newLeaves); // Update local state for leaves
        localStorage.setItem('leaves', newLeaves); // Save leaves to localStorage

        // Update total score based on leaves count
        setTotalScore(newLeaves); // Set total score equal to the number of leaves
        localStorage.setItem('totalScore', newLeaves); // Save total score to localStorage
    };

    useEffect(() => {
        // Load previous state from localStorage
        const savedBooks = localStorage.getItem('books');
        const savedError = localStorage.getItem('booksError');
        const savedLeaves = localStorage.getItem('leaves');
        const savedTotalScore = localStorage.getItem('totalScore');

        if (savedBooks) {
            setBooks(JSON.parse(savedBooks));
            setLoading(false);
        } else if (savedError) {
            setError(savedError);
            setLoading(false);
        } else {
            fetchBooks(); // Fetch books if no saved data
        }

        // Load saved leaves and total score count
        if (savedLeaves) {
            setLeaves(Number(savedLeaves));
        }
        if (savedTotalScore) {
            setTotalScore(Number(savedTotalScore));
        }
    }, []);

    if (loading) return <div>Loading books...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-6 bg-yellow-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-4">Books and Thoughts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {books.map((book, index) => (
                    <div key={index} className="p-4 bg-white shadow rounded-lg">
                        <h3 className="text-xl font-bold">{book.volumeInfo.title}</h3>
                        <p className="text-md font-semibold">
                            by {book.volumeInfo.authors ? book.volumeInfo.authors.join(", ") : "Unknown Author"}
                        </p>
                        <p className="text-sm mt-2">{book.volumeInfo.publishedDate}</p>
                        <p className="text-sm mt-2">{book.volumeInfo.description?.slice(0, 100)}...</p>
                        <button
                            onClick={() => {
                                window.open(book.volumeInfo.previewLink, '_blank');
                                handleBookSelect(); // Increase leaf count and update score on book selection
                            }}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Read Book
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold">Leaves Count: {leaves}</h3>
                <h3 className="text-2xl font-semibold">Total Score: {totalScore}</h3>
            </div>
        </div>
    );
};

export default BooksComponent;



