'use client';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../components/Sidebar';
import FeaturedPost from '../components/FeaturedPost';
import Footer from '../components/Footer';
import MainFeaturedPost from '../components/MainFeaturedPost';
import Header from '../components/Header';
import Main from '../components/Main';
import {
  featuredPosts,
  sections,
  mainFeaturedPost,
  sidebar,
} from './data/postData';

const posts = [featuredPosts[0], featuredPosts[1]];

const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth='lg'>
        {<Header title='Blog' sections={sections} />}
        <main>
          {<MainFeaturedPost post={mainFeaturedPost} />}
          {
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          }
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar social={sidebar.social} />
          </Grid>
        </main>
      </Container>
      <Footer
        title='Footer'
        description='Something here to give the footer a purpose!'
      />
    </ThemeProvider>
  );
}
