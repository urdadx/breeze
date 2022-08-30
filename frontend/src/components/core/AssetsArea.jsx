import { useState, useEffect } from "react";
import { AssetStyled } from "../../styles/AssetStyled";
import { Button, TextField } from "@mui/material";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FiBookmark, FiChevronRight } from "react-icons/fi";


const AssetsArea = ({ children, setChildren }) => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    // bookmarks
    const [bookmarks, setBookmarks] = useState([]);

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
    
    // elements json
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // icon finder api
        const fetchUrl = `https://iconfinder-api-auth.herokuapp.com/v4/icons/search?query=${searchValue}&count=50`;
    
        setIsLoading(true);
    
        fetch(fetchUrl)
          .then((res) => res.json())
          .then((json) => {
            setData(json.icons);
            setIsLoading(false);
        })
        .catch((err) => console.error("error:" + err));
    }, [searchValue]);

    useEffect(() => {
        fetch("/elements/elements.json")
          .then((res) => res.json())
          .then((json) => setElements(json))
          .catch((err) => console.error("error:" + err));
    }, []);


    const searchImages = (e) => {
        if (e.keyCode === 13) {
          setSearchValue(e.target.value);
          setData([]);
        }
    };

    const addImage = (src) => {
        setChildren([
          ...children,
          {
            component: <img src={src} style={{ height: "100%", width: "100%" }} />,
          },
        ]);
    };

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
    
    const changePack = (value) => {
        setData([]);
        setSearchValue(value);
        setQuery(value);
    };
    
    return ( 
        <>
        <AssetStyled>
            <div className="main_wrapper">
                <TextField
                    size="small"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => searchImages(e)}
                    variant="outlined"
                    label="Search Emojis"
                    className="search_bar"
                />

                {
                    isLoading && (
                        <div className="loader_wrapper">
                            {
                                searchValue.replace(/\s/g, "").length ? <div><h3>Loading...</h3></div> : null
                            }
                        </div>
                )}

            {
                searchValue.replace(/\s/g, "").length ? (
                <div className="container">
                {
                data.map((data, key) => {
                    return (
                    <Button
                        className="btn"
                        key={key}
                    >
                        <img
                            src={
                                data.raster_sizes.slice(-1)[0].formats.slice(-1)[0]
                                .preview_url
                            }
                            className="image"
                            alt={data.icon_id}
                            onClick={() =>
                                addImage(
                                data.raster_sizes.slice(-1)[0].formats.slice(-1)[0]
                                    .preview_url
                                )
                            }
                        />
                        <div
                            className="bookmarked"
                            onClick={() =>
                                bookmarkImage(
                                data.raster_sizes.slice(-1)[0].formats.slice(-1)[0]
                                    .preview_url
                                )
                            }
                        >
                        {
                            fetchBookmarked(
                                data.raster_sizes.slice(-1)[0].formats.slice(-1)[0]
                                .preview_url
                            ) ? (
                                <BsFillBookmarkFill className="bm-icon" />
                            ) : (
                                <FiBookmark className="bm-icon-2" />
                        )}
                        </div>
                    </Button>
                )
            })}
                </div>
            ) : (
                <div className="wrapper">
                {
                    elements.map((data, key) => (
                        <Button
                            key={key}
                            className="change_btn"
                            onClick={() => changePack(data.value)}
                        >
                        <img
                            src={`/elements/assets/${data.name
                            .replace(/\s+/g, "-")
                            .toLowerCase()}.png`}
                            alt={data.name}
                        />
                        <div className="cover_wrapper">
                            <h3 className="cover_title">
                                {data.name}
                            </h3>
                            <h3 className="see_more">
                                See more <FiChevronRight />
                            </h3>
                        </div>
                        </Button>
                     ))
                }
                </div>
            )}

        </div>
            </AssetStyled>
        </>
     );
}
 
export default AssetsArea;