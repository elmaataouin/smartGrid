import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '../../../node_modules/@mui/material/index';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import image from "assets/images/imgs/node.png"
import { Grade, ThumbUp } from '../../../node_modules/@mui/icons-material/index';
import WarningIcon from '@mui/icons-material/Warning';


import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
export default function AlignItemsList() {
  return (

    /*  <Box
       sx={{
         width: 1000,
         backgroundColor: 'primary.dark',
        
       }}
     >   
     <Typography
         sx = {
             {
                 mt : 5 ,
                 mb : 2 ,
                 ml : 1 ,
                 fontFamily: 'Raleway, Arial',
                 fontSize: 25,
             }
         }
     
     > Notifications</Typography>
     <List sx={{ width: '100%' , bgcolor: 'background.paper' }}>
       <ListItem alignItems="flex-start">
         <ListItemAvatar>
           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
         </ListItemAvatar>
         <ListItemText
           primary="Brunch this weekend?"
           secondary={
             <React.Fragment>
               <Typography
                 sx={{ display: 'inline' }}
                 component="span"
                 variant="body2"
                 color="text.primary"
               >
                 Ali Connors
               </Typography>
               {" — I'll be in your neighborhood doing errands this…"}
             </React.Fragment>
           }
         />
       </ListItem>
       <Divider variant="inset" component="li" />
       <ListItem alignItems="flex-start">
         <ListItemAvatar>
           <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
         </ListItemAvatar>
         <ListItemText
           primary="Summer BBQ"
           secondary={
             <React.Fragment>
               <Typography
                 sx={{ display: 'inline' }}
                 component="span"
                 variant="body2"
                 color="text.primary"
               >
                 to Scott, Alex, Jennifer
               </Typography>
               {" — Wish I could come, but I'm out of town this…"}
             </React.Fragment>
           }
         />
       </ListItem>
       <Divider variant="inset" component="li" />
       <ListItem alignItems="flex-start">
         <ListItemAvatar>
           <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
         </ListItemAvatar>
         <ListItemText
           primary="Oui Oui"
           secondary={
             <React.Fragment>
               <Typography
                 sx={{ display: 'inline' }}
                 component="span"
                 variant="body2"
                 color="text.primary"
               >
                 Sandra Adams
               </Typography>
               {' — Do you have Paris recommendations? Have you ever…'}
             </React.Fragment>
           }
         />
       </ListItem>
     </List>
     </Box>
  */

    <Grid

      direction="column"
      alignItems="center"
      justifyContent="center"
    >

      <Box>
        <Typography
          sx={
            {
              mb: 2,
              fontFamily: 'Raleway, Arial',
              fontSize: 25,
              ml: 2,
              display: 'inline',
              mb: 20

            }
          }

        > Notifications</Typography>
        <CircleNotificationsIcon sx={{
          display: 'inline',
          ml: 2,
          fontSize: 30
        }} />
      </Box>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{
          minHeight: '100vh',
        }}
      >


        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.lighter'
                }}
              >
                <ThumbUp />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lorem Ipsum "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem Upsum is
                  </Typography>
                  {" simply dummy text of the printing and typesetting industry."}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar

                sx={{
                  color: 'error.main',
                  bgcolor: 'error.lighter'
                }}
              >
                <WarningIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lorem Ipsum "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem Upsum is
                  </Typography>
                  {" simply dummy text of the printing and typesetting industry."}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                sx={{
                  color: 'primary.main',
                  bgcolor: 'primary.lighter'
                }}
              >
                <ThumbUp />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lorem Ipsum "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem Upsum is
                  </Typography>
                  {" simply dummy text of the printing and typesetting industry."}
                </React.Fragment>
              }
            />
          </ListItem>

          <Divider variant="inset" component="li" />

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar

                sx={{
                  color: 'error.main',
                  bgcolor: 'error.lighter'
                }}
              >
                <WarningIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lorem Ipsum "
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Lorem Upsum is
                  </Typography>
                  {" simply dummy text of the printing and typesetting industry."}
                </React.Fragment>
              }
            />
          </ListItem>





        </List>

        <Link sx={{
          mt: 3,
          fontSize: 15,
        }}
          href="#">Load more notifications</Link>

      </Grid>
    </Grid>)
}
