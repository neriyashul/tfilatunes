import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`/playlist/kabballat_shabbat.8`)}>
      לכה דודי
    </button>
  );
}
