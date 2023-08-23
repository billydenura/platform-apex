// import PropTypes from "prop-types";
import "./youtube.css";

interface EmbedItemProps {
  embedId: string;
}

const YoutubeEmbed = ({ embedId }: EmbedItemProps) => (
  <div className="video-responsive">
    <iframe
      width="853px"
      height="480px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired,
// };

export default YoutubeEmbed;
