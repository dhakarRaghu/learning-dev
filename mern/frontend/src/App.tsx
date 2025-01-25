import { useEffect, useState } from 'react'
import axios from 'axios'

interface UrlData {
  _id: string;
  short_url: string;
  redirect_url: string;
  visitHistory: { timestamp: string; _id: string }[];
}

function App() {
  const [urls, setUrls] = useState<UrlData[]>([]) // State to store the array of URLs

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/shorturl/allUrls")
      .then((response: any) => {
        setUrls(response.data) // Save the array of URL objects to state
      })
      .catch((error: any) => {
        console.error("Error fetching data:", error)
      })
  }, [])

  return (
    <div>
      <h1>Shortened URLs</h1>
      {urls.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {urls.map((url) => (
            <li key={url._id}>
              <p><strong>Short URL:</strong> {url.short_url}</p>
              <p><strong>Redirect URL:</strong> {url.redirect_url}</p>
              <p><strong>Visit History:</strong></p>
              <ul>
                {url.visitHistory.length > 0 ? (
                  url.visitHistory.map((visit) => (
                    <li key={visit._id}>
                      {new Date(visit.timestamp).toLocaleString()}
                    </li>
                  ))
                ) : (
                  <li>No visits yet.</li>
                )}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
