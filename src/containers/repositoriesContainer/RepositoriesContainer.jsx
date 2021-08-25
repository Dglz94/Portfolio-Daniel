import React, { useState, useEffect } from "react";
import "./respositoriesContainer.css";
import Repo from "../../components/repo/Repo";

export default function RepositoriesContainer() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState([0, 9]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getRepositories();
  }, []);

  const getRepositories = async () => {
    setLoading(true);
    const response = await fetch("https://api.github.com/users/dglz94/repos");
    const data = await response.json();
    setRepos(data);
    setLoading(false);
  };

  return (
    <div className="repos-container">
      <div className="repos">
        {loading ? <h1>Loading...</h1> : repos.slice(page[0], page[1]).map((rep) => (
          <Repo key={rep.id} repo={rep} />
        ))}
      </div>
      <div className="filter">
        <label htmlFor="search">Search:
          <input type="text" name="seach" id="" />
        </label>
      </div>
    </div>
  );
}
