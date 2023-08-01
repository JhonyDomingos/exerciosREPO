import { useState } from "react";
import { blogApi } from "../../services/api";

export const NewsSection = () => {
    const [newsList, setNewsList] = useState([])

    const getNews = async () => {

        const {data} = await blogApi.get("/news")

        setNewsList(data)
    }
    return (
        <div>
            <ul>
                {newsList.map(news => {
                return <li key={news.id}>
                    <h2>{news.title}</h2>
                    <span>{news.category}</span>
                    <p>{news.content}</p>
                    <cite>{news.author}</cite>
                </li>
                })}
            </ul>
            <button onClick={getNews}>Click to get news</button>
        </div>
    )
}