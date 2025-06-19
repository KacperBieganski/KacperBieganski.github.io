import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectDetailPage() {
  const { repoName } = useParams();
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/kacperbieganski/${repoName}/main/README.md`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("README not found");
        }
        return res.text();
      })
      .then((data) => {
        const fixedReadme = data.replace(
          /!\[([^\]]*)\]\((?!https?:\/\/)([^)]+)\)/g,
          `![$1](https://raw.githubusercontent.com/kacperbieganski/${repoName}/main/$2)`
        );
        setReadme(fixedReadme);
        setLoading(false);
      })

      .catch((err) => {
        console.error(err);
        setReadme("Nie znaleziono pliku README.md");
        setLoading(false);
      });
  }, [repoName]);

  return (
    <div className="project-detail-page">
      {loading ? <p>Ładowanie...</p> : <ReactMarkdown>{readme}</ReactMarkdown>}
    </div>
  );
}
