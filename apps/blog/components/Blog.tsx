import * as React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Sidebar from '../components/Sidebar';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import MainFeaturedPost from './MainFeaturedPost';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { post1, post2, post3 } from '../data/blogPosts';

import { sections, sidebar } from '../data/postData';

function useFetchPosts() {
  const query = useQuery({
    queryKey: 'posts',
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
      ),
  });

  return query;
}

export default function Blog() {
  const { data, isLoading, error } = useFetchPosts();
  const [mainFeaturedPost, setMainFeaturedPost] = useState([]);
  const [featuredPosts, setFeaturedPosts] = useState([]);

  const posts = [post1, post2, post3];

  useEffect(() => {
    if (error) {
      console.error('Error fetching posts:', error);
    } else if (data) {
      setMainFeaturedPost(data[0]);
      setFeaturedPosts(data.slice(1, data.length - 1));
    }
  }, [data, error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container maxWidth='lg'>
        {<Header title='Blog' sections={sections} />}
        <main>
          {/* *Deus do ceu eu não sei arrumar esse erro de typescript// */}
          {<MainFeaturedPost post={mainFeaturedPost} />}
          {
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          }
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title='From the firehose' posts={posts} />
            <Sidebar social={sidebar.social} />
          </Grid>
        </main>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </>
  );
}
