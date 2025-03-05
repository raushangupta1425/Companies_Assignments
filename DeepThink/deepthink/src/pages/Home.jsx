import React, { useState, useEffect } from "react";
import "../../public/css/Home.css";

export function Home() {
  document.title = "DeepThink - Home";

  const [data, setData] = useState([]); 

  const apiData = async () => {
    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp/edit?gid=642301134#gid=642301134https://docs.google.com/spreadsheets/d/bc1qre8jdw2azrg6tf49wmp652w00xltddxmpk98xp/edit?gid=1485299999#gid=1485299999"
      );
      const text = await response.text();
      const rows = text.split("\n").map((row) => row.split(",")); // Convert CSV to array
      setData(rows); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    apiData(); 
  }, []);

  return (
    <div className="homeContainer">
      <div className="row">
        <div className="col-lg-12">
          {data.length > 0 ? (
            data.map((row, index) => (
              <div key={index}>
                {row[0]}
                {row[1]}
              </div>
            ))
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </div>
  );
}
