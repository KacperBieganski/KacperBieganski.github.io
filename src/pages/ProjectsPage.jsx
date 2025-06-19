import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectsPage() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("desc");
  const GITHUB_TOKEN =
    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;

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/kacperbieganski/repos",
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
            },
          }
        );
        if (!response.ok) throw new Error("Błąd sieci");

        const data = await response.json();

        const filtered = data
          .filter((repo) => repo.name !== "kacperbieganski.github.io")
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

        const reposWithPages = await Promise.all(
          filtered.map(async (repo) => {
            const pageUrl = `https://kacperbieganski.github.io/${repo.name}`;
            try {
              const res = await fetch(pageUrl, { method: "HEAD" });
              if (res.ok) {
                return { ...repo, pageUrl };
              } else {
                return repo;
              }
            } catch (error) {
              return repo;
            }
          })
        );

        setRepos(reposWithPages);
      } catch (err) {
        console.error("Błąd podczas pobierania repozytoriów:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const sortedRepos = [...repos].sort((a, b) => {
    const dateA = new Date(a.updated_at);
    const dateB = new Date(b.updated_at);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>Moje projekty</h1>
        <label>
          Sortuj:{" "}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Najnowsze</option>
            <option value="asc">Najstarsze</option>
          </select>
        </label>
      </div>

      {loading ? (
        <p>Ładowanie projektów...</p>
      ) : (
        <ul>
          {sortedRepos.map((repo) => (
            <li key={repo.id}>
              <p>
                <Link to={`/projects/${repo.name}`}>
                  <strong>{repo.name}</strong>
                </Link>{" "}
                <span>
                  {repo.pageUrl && (
                    <a
                      href={repo.pageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Pages link"
                      style={{ marginLeft: 8 }}
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub link"
                  >
                    <FaGithub size={20} />
                  </a>
                </span>
              </p>
              <p>{repo.description || "Brak opisu"}</p>
              <p>
                <small>
                  Aktualizowano:{" "}
                  {new Date(repo.updated_at).toLocaleDateString()}
                </small>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
