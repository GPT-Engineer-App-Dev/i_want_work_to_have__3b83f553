import { Box, Image, Heading, Text } from "@chakra-ui/react";

const VideoCard = ({ video }) => {
  return (
    <Box>
      <Image src={video.thumbnail} />
      <Box>
        <Heading as="h3">{video.title}</Heading>
        <Text>{video.description}</Text>
      </Box>
    </Box>
  );
};

export default VideoCard;
