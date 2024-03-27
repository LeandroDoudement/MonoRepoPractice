import { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useQuery } from 'react-query';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const { data, refetch } = useQuery({
    enabled: false,
    queryKey: 'like',
    queryFn: () => fetch('https://httpstat.us/random/200,404'),
  });

  const handleLike = async () => {
    setLiked(!liked);
    await refetch();
    console.log(data?.status);
    await setTimeout(() => {
      if (!data || data.status !== 200) {
        setLiked(liked);
      }
    }, 5000);
  };

  return (
    <div
      onClick={handleLike}
      style={{ position: 'absolute', top: 0, right: 0 }}
    >
      {liked ? (
        <FavoriteIcon style={{ color: 'red' }} />
      ) : (
        <FavoriteBorderIcon />
      )}
    </div>
  );
};

export default LikeButton;
