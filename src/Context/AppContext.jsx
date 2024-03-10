import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

//AppCtx is exported as createContext
export const AppCtx=createContext(null);
//createContext is imported

//using children property so that all the children can use these context values
export default function AppContext({children}){
    //books array of objects
    const books=[{
        bookName:"Kafka on the Shore",
        bookAuthor:"Haruki Murakami",
        bookNumber: 9781593762714,
        bookDate:2005,
    },
    {
        bookName:"Americanah",
        bookAuthor:"Chimamanda Ngozi Adichie",
        bookNumber:9780307377955,
        bookDate:2013,
    },
    {
        bookName:"Harry Potter and the Philosopher's Stone",
        bookAuthor:"J.K. Rowling",
        bookNumber:9780545010223,
        bookDate:1997,
    },
    {
        bookName:"Beloved",
        bookAuthor:"Toni Morrison",
        bookNumber:9781400033490,
        bookDate:1987,
    },
    {
        bookName:"One Hundred Years of Solitude",
        bookAuthor:"Gabriel García Márquez",
        bookNumber:9780140177142,
        bookDate:1967,
    }
]
   //authors array of objects
    const authors=[{     
        bookAuthor:"Haruki Murakami",
        authorDoy:1949,
        authorBio:" Haruki Murakami is a Japanese author known for his surrealistic and imaginative storytelling. He has received numerous awards for his work, including the Franz Kafka Prize and the Jerusalem Prize. Murakami's novels often blend elements of magical realism with themes of loneliness, identity, and the search for meaning"
    },
    {  
        bookAuthor:"Chimamanda Ngozi Adichie",
        authorDoy:1977,
        authorBio:"Chimamanda Ngozi Adichie is a Nigerian author and feminist icon. Her works explore themes of identity, race, gender, and culture. Adichie's writing is celebrated for its powerful storytelling and insightful commentary on contemporary issues. She has won numerous awards, including the Orange Prize for Fiction and the National Book Critics Circle Award"
    },
    {     
        bookAuthor:"J.K. Rowling",    
        authorDoy:1965,
        authorBio:"J.K. Rowling is a British author best known for creating the Harry Potter series, one of the most successful book franchises in history. Her books have sold millions of copies worldwide and have been adapted into blockbuster films. Rowling's writing is characterized by its richly imagined magical world and compelling characters"
    },
    {      
        bookAuthor:"Toni Morrison",
        authorDoy:1931,
        authorBio:"Toni Morrison was an American novelist, essayist, editor, and professor renowned for her exploration of the African American experience. She was awarded the Nobel Prize in Literature in 1993, making her the first African American woman to receive the honor. Morrison's work delves into themes of race, identity, and the legacy of slavery with profound lyricism and emotional depth"
    },
    {
        bookAuthor:"Gabriel García Márquez",
        authorDoy:1927,
        authorBio:"Gabriel García Márquez was a Colombian novelist, short-story writer, and journalist, known for his pioneering magic realism literary style. He won the Nobel Prize in Literature in 1982 for his novels and short stories, such as One Hundred Years of Solitude and Love in the Time of Cholera. García Márquez's writing blends fantastical elements with political and social commentary, often set in Latin America"
    }]

    //necessary states is used and is passed as a value to the AppCtx.Provider
    const navigate=useNavigate();
    const [data,setData]=useState(books);
    const [info,setInfo]=useState(authors);
    const [topBar,setTopBar]=useState("books");
    const [useIndex,setUseIndex]=useState();
    const [toEdit,setToEdit]=useState();
    const [remaining,setRemaining]=useState();
    return(
        <AppCtx.Provider
        value={{
           data,
           setData,
           info,
           setInfo,
           navigate,
           setTopBar,
           topBar,
           useIndex,
           setUseIndex,
           toEdit,
           setToEdit,
           remaining,
           setRemaining
        }}
        >
            {children}
        </AppCtx.Provider>
    )
}