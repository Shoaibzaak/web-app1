import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from './MainFeaturedPost';

import Main from './Main';
import Sidebar from './Sidebar';

import post1 from './post1.md';




const mainFeaturedPost = {
  title: 'wordsrweapons',
  description:
    "We are creating the quality content for you, As a content company, we here at WordsRWeapons pay more attention to WHY something works than how.",
 image:'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDg4MDd8MHwxfHNlYXJjaHwxMnx8YnVpc25lc3N8ZW58MHx8fHwxNjUzMzEyNDkx&ixlib=rb-1.2.1&q=80&w=1080',
  imageText: 'main image description',
   linkText: 'Continue reading…',
};



const posts = [post1];

const sidebar = {
  title: 'Our Vision',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();
const Details = () => {
  return (
    <>
   <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
      
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
         
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="What WordsRWeapons Can Do For You" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      </ThemeProvider>
    </>
  )
}

export default Details