import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [savedArticles, setSavedArticles] = useState([]);
  const [copySavedUrl, setCopySavedUrl] = useState("");

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles"),
    );

    if (articlesFromLocalStorage) {
      setSavedArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // data from api
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedSavedArticles = [newArticle, ...savedArticles];

      setArticle(newArticle);
      setSavedArticles(updatedSavedArticles);

      // saving to local storage
      localStorage.setItem("articles", JSON.stringify(updatedSavedArticles));

      console.log(newArticle);
    }
  };

  const handleCopy = (copyUrl) => {
    setCopySavedUrl(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopySavedUrl(false), 3000);
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex w-full flex-col gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↵
          </button>
        </form>

        {/* Previous searches */}
        <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">
          {savedArticles.map((article, index) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(article)}
              className="link_card"
            >
              <div className="copy_btn" onClick={() => handleCopy(article.url)}>
                <img
                  src={copySavedUrl === article.url ? tick : copy}
                  alt="copyIcon"
                  className="h-[40%] w-[40%] object-contain"
                />
              </div>
              <p className="flex-1 truncate font-satoshi text-sm font-medium text-blue-700">
                {article.url}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Display results */}
      <div className="my-10 flex max-w-full items-center justify-center">
        {isFetching ? (
          <img
            src={loader}
            alt="loading"
            className="h-20 w-20 object-contain"
          />
        ) : error ? (
          <p className="text-center font-inter font-bold text-black">
            Well that wasn't supposed to happen...
            <br />
            <span className="font-satoshi font-normal text-gray-700">
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi text-xl font-bold text-gray-600">
                Article <span className="blue_gradient">Summary</span>
              </h2>
              <div className="summary_box">
                <p className="font-inter text-sm font-medium text-gray-700">
                  {article.summary}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Demo;
