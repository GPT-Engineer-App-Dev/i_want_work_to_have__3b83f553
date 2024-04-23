import { Box, Heading } from "@chakra-ui/react";
import VideoCard from "../components/VideoCard";

const videos = [
  {
    title: "Video 1",
    description: "Description of video 1",
    thumbnail: "https://example.com/video1-thumbnail.jpg",
  },
  {
    title: "Video 2",
    description: "Description of video 2",
    thumbnail: "https://example.com/video2-thumbnail.jpg",
  },
];

const Work = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>
        Our Work
      </Heading>
      {videos.map((video) => (
        <VideoCard key={video.title} video={video} />
      ))}
    </Box>
  );
};

export default Work;
