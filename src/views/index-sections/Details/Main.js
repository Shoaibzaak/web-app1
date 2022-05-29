import React from 'react'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './Markdown';
import Link from '@mui/material/Link';
import './Details.css';



const Main = (props) => {
    const {  title } = props;
  return (

    <>
       <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
     <Typography variant='subtitle1'>
          
     Writers are a dime a dozen, but GOOD writers are hard to find.

If you want something written you have three options:
     </Typography>
    
  
        <Markdown className="class"  >
        - Do it yourself.
        </Markdown>
        <Markdown className="class"  >
        - Hire a freelancer.
        
        </Markdown>
        <Markdown className="class"  >
        - Keep a writer on staff.
        
        </Markdown>
       < Typography variant='subtitle1' gutterBottom>
       Let’s forget doing it yourself. If that was a viable option, you wouldn’t be on this page, would you?

Instead, let’s look realistically at Freelancers.

Some are good.

Some are bad.

Some think English is what you put on a cue ball when playing pool.

If you find one that’s good, they are probably expensive, and they probably don’t have time to do the work you need it when you need it done.

Funny thing – good writers are always working, and unless you hire them full time, they probably aren’t working for you.

Which of course brings us to option 3: keeping a writer on staff.

Depending on what you do, you may or may not need a writer full time.

If you are like most, the work you need done comes in bits and spurts, sometimes requiring just one good writer, and at others requiring an entire army typing away at keyboards for days on end.

Many just resign themselves to this fluctuating cost because they have the money to burn, and doing without easy access to content right when you need it most can be even more costly than having a staff you don’t use.

But…

What if there was a way your writing costs could shrink and GROW with your needs.

What if you never had to spend time recruiting writers and then training them to write the way you wanted?

What if you had access to countless, high quality writers ready to do the work you need, precisely when you need it. No ifs, ands, or buts?

Imagine:
       </Typography>
  
        <Markdown className="class"  >
        - Eliminating the time consuming task of hiring, vetting, firing, and keeping track of questionable freelancers .
        </Markdown>
        <Markdown className="class"  >
        - Saving thousands of dollars on writing costs while still having access to all the benefits of an in-house staff.
        </Markdown>
        <Markdown className="class"  >
        - Going through the “learning curve” of training writers to write for YOU only once.
        </Markdown>
    
         <Typography variant='subtitle1' gutterBottom>

         This is what WordsRWeapons can do for you.

     Unlike many content creation sites, WordsRWeapons ISN’T a hub for freelancers to negotiate rates. We offer 1 price to all our clients no matter how much or how little work you need.

    That means you are always getting the best rate for the best quality possible, every time.

    Just like a regular writing department, if a piece of work isn’t to spec, you can send it back until it is exactly what you have asked for. Our process ensures that you don’t pay for work that isn’t exactly the way you want it.

    The biggest difference is that because of the way WordsRWeapons works, in lean months when your company is focused on other areas, you don’t have to change a thing. When you sign up today, you will only pay for the work you ask for…

How?
         </Typography>
         <Link href="#">Check out how our pricing works by clicking here.</Link>
    
    </Grid>
    
    </>
  )
}
Main.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  };
export default Main