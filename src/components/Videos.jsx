import { VideoCard, ChannelCard } from './';
import {Stack, Box} from '@mui/material';

function Videos({videos,direction}) {
  if(!videos?.length) return 'Loading...';

  return (
   <Stack direction={direction || "row"} flexWrap='wrap' justifyContent='flex-start' gap={1}>
        {videos?.map((item, id) => (
        <Box key={id}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
   </Stack>
  )
}

export default Videos