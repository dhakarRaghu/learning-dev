import React, { useState } from 'react';
import axios from 'axios';

interface UrlType {
  short_url: string;
  redirect_url: string;
  visitHistory: { timestamp: string; _id: string }[];
}

const Short = () => {
  const [url, setUrl] = useState(''); // User input
  const [shortenedUrl, setShortenedUrl] = useState(''); // Shortened URL returned from backend
  const [longUrl, setLongUrl] = useState<UrlType[]>([]); // All URLs fetched from backend
  const [success, setSuccess] = useState(false); // Success state for shortening

  // Shorten URL handler
  const handleShortenUrl = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/shorturl', { url });
      console.log('Shortened URL:', response.data);
        setShortenedUrl(response.data.shortUrl); // Set the shortened URL
      setUrl(''); // Clear the input field
      setSuccess(true); // Set success state
    } catch (error) {
      console.error('Error shortening URL:', error);
      alert('Failed to shorten the URL. Please try again.');
      setSuccess(false);
    }
  };

  // Fetch all URLs handler
  const handleAllUrl = async () => {
    try {
      const response = await axios.get<UrlType[]>('http://localhost:5001/api/shorturl/allUrls');
      setLongUrl(response.data); // Update state with all URLs
    } catch (error) {
      console.error('Error fetching all URLs:', error);
      alert('Failed to fetch all URLs. Please try again.');
    }
  };

  // Fetch all URLs on component mount
  // React.useEffect(() => {
  //   handleShortenUrl();
  // }, [shortenedUrl]);


  return (
    <div style={{ padding: '20px' }}>
      <h1>URL Shortener</h1>

      {/* Input for URL shortening */}
      <div>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <button onClick={handleShortenUrl} style={{ padding: '5px 10px' }}>
          Shorten
        </button>
      </div>

      {/* Display Shortened URL */}
      {success && shortenedUrl && (
        <div style={{ marginTop: '20px' }}>
          <p>
            <strong>Shortened URL:</strong>{' '}
            <a
              href={`${shortenedUrl}`}
              target="_blank"
              rel="noreferrer"
            >
              {`${shortenedUrl}`}
            </a>
          </p>
        </div>
      )}

      {/* Fetch All URLs */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleAllUrl} style={{ padding: '5px 10px' }}>
          View Shortened URLs
        </button>
      </div>

      {/* Display All URLs */}
      <div style={{ marginTop: '20px' }}>
        <h2>All URLs</h2>
        <ul>
          {longUrl.length === 0 ? (
            <p>Click "View Shortened URLs" to load them.</p>
          ) : (
            longUrl.map((url) => (
              <li key={url.short_url} style={{ marginBottom: '10px' }}>
                <p>
                  <strong>Short URL:</strong>{' '}
                  <a
                    href={`http://localhost:5001/api/shorturl/${url.short_url}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {url.short_url}
                  </a>
                </p>
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
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Short;
