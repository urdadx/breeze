import { BookmarkStyled } from "../../styles/BookmarkStyled";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";


// icons
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiBookmark } from "react-icons/fi";


const Bookmarks = () => {

    const [bookmarks, setBookmarks] = useState([]); // bookmarks

    const fetchBookmarks = () => {
        if (window.localStorage.getItem("saved")) {
        setBookmarks(JSON.parse(window.localStorage.getItem("saved")));
        } else {
        window.localStorage.setItem("saved", JSON.stringify([]));
        }
    };

    useEffect(() => {
        fetchBookmarks();
    }, []);

    const fetchBookmarked = (src) => {
        if (bookmarks.some((image) => image.src === src)) {
            return true;
        } else {
            return false;
        }
    };

    // bookmarking a image
    const bookmarkImage = (src) => {
        if (typeof window !== "undefined") {
        if (fetchBookmarked(src)) {
            // removing bookmark if already bookmarked
            window.localStorage.setItem(
            "saved",
            JSON.stringify(bookmarks.filter((image) => image.src !== src))
            );

            // making state uptodate
            fetchBookmarks();
            fetchBookmarked(src);
        } else {
            // adding bookmark
            window.localStorage.setItem(
            "saved",
            JSON.stringify([
                ...bookmarks,
                {
                src: src,
                },
            ])
            );

            // making state uptodate
            fetchBookmarks();
            fetchBookmarked(src);
        }
        }
    };

  // adding image to app
  const addImage = (src) => {
    setChildren([
      ...children,
      {
        component: <img src={src} style={{ height: "100%", width: "100%" }} />,
      },
    ]);
  };

    return (
        <>
        <BookmarkStyled>    
            <div className="main_wrapper">
                {
                    bookmarks.length > 0 && (
                        <>
                        <h1 className="bookmarks_title">
                            Your Bookmarks
                        </h1>
                        <p className="subtitle">
                            Bookmark an element or image to see it here 🚀
                        </p>
                        </>
                )}
            <div className="wrapper">
                {bookmarks.map((data, key) => {
                return (
                    <Button
                    className="button"
                    key={key}
                    >
                    <img
                        src={data.src}
                        className="image"
                        alt="An Image"
                        onClick={() => addImage(data.src)}
                    />
                    <div
                        className="book_img"
                        onClick={() => bookmarkImage(data.src)}
                    >
                        {fetchBookmarked(data.src) ? (
                        <BsFillBookmarkFill className="icon" />
                        ) : (
                        <FiBookmark className="icon" />
                        )}
                    </div>
                    </Button>
                );
                })}
                <div className="error">
                {bookmarks.length === 0 && (
                        <h4>You have no bookmarked icons 🚀</h4>  
                )}
                </div>
            </div>
    </div>
            </BookmarkStyled>
        
        </>
      );
}
 
export default Bookmarks;