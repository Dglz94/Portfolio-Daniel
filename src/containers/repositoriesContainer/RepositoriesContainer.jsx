import React, { useState, useEffect } from "react";
import "./respositoriesContainer.css";
import Repo from "../../components/repo/Repo";
import icons from "../../utils/icons";

export default function RepositoriesContainer() {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState([0, 10]);
  const [loading, setLoading] = useState(false);
  const [panelSize, setPanelSize] = useState("md");

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
      <div className="filter pressed">
        <div className="repo-panel-buttons">
          <div
            className={
              panelSize === "lg" ? "repo-panel-btns active-btn" : "repo-panel-btns"
            }
            onClick={() => setPanelSize("lg")}
          >
            {icons.repos.big}
          </div>
          <div
            className={
              panelSize === "md" ? "repo-panel-btns active-btn" : "repo-panel-btns"
            }
            onClick={() => setPanelSize("md")}
          >
            {icons.repos.medium}
          </div>
          <div
            className={
              panelSize === "sm" ? "repo-panel-btns active-btn" : "repo-panel-btns"
            }
            onClick={() => setPanelSize("sm")}
          >
            {icons.repos.small}
          </div>
        </div>
      </div>
      <div className="repos">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          repos
            .slice(page[0], page[1])
            .map((rep) => (
              <Repo panelSize={panelSize} key={rep.id} repo={rep} />
            ))
        )}
      </div>
    </div>
  );
}
