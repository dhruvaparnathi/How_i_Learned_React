import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [galleryData, setGalleryData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = async (pageNum) => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${pageNum+1}&limit=10`
    );
    setGalleryData(response.data);
  };

  useEffect(() => {
    getData(page);
  }, [page]);


  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        📸 Image Gallery
      </h1>

      <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {galleryData.map((item) => (
          <div
            key={item.id}
            onClick={() => open(item.url, '_blank')}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:cursor-pointer hover:translate-y-[10px]"
          >
            <img
              src={item.download_url}
              alt={item.author}
              className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-300"
            />

            <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition">
              {item.author}
            </div>
          </div>
        ))}
      </div>


      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() => page > 1 && setPage(page - 1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
        >
          ⬅ Prev
        </button>

        <span className="text-lg font-semibold text-gray-700">
          Page {page}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition hover:cursor-pointer"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}

export default App;