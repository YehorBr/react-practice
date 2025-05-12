const favouriteBooks = [
    { name: "JS for beginners" },
    { name: "React basics" },
    { name: "React Router overview" },
    { name: "Redux in depth" },
   ];

   export const Book = () => {
    return <ul>
        {favouriteBooks.map ((book)=>{
            return <li><p>{book.name}</p></li>
        })}
    </ul>
   }