// material-ui
import * as React from 'react';

import { Typography, Box, TextField , Button} from '@mui/material';
import MainCard from 'components/MainCard';
import './support.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import LogoSection from 'components/Logo/index';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


// ==============================|| SAMPLE PAGE ||============================== //
function Form() {


    return (
        <>

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Subject"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="You Name"
          multiline
          maxRows={4}
        />
       
      </div>

      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="E-Mail"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="order number"
          multiline
          maxRows={4}
        />
       
      </div>


      <div>
      <TextField
      
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows={8}
          sx={{ width: 1/4 }}
        />
      </div>

      <div>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="I have read the topics above, but I have not found a solution to my problem" />
      <Button variant="contained">send message</Button>
    </FormGroup>
      </div>

    </Box>
        
        </>
    );
}
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  )
function BasicCard(props) {
    return (
      <Card className =" carte " >
        <CardContent>
          
          <Typography variant="h5" component="div" sx = {{  fontSize : 30   }}>
            {props.title}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  }

const Support = () => (
    <>
            <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

        }}
      >
        <LogoSection/>
        <Typography sx = {
            {
                display: 'flex',
                justifyContent: 'center',
                fontSize  : 20 ,
                mt : 2
            }
        }>Version 1.0</Typography>
      </Box>
            
        <Typography className="title"> Support and Help center</Typography>
        <Typography>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices 
            de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
            sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles 
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications 
            de mise en page de texte, comme Aldus PageMaker.
        </Typography>
        <Typography className="sous-title">You are here for: </Typography>

    <Box sx={{ display: 'flex', flexDirection: 'column' }} >
    
    <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          justifyContent: 'center',
          

        }}
      >
            <BasicCard title = "Documentation"/>
            <BasicCard title = "Help and Support"/>
            <BasicCard title = "Reporting a Bug"/>
    
    </Box>

    </Box>


        <Box>
        <Typography className="sous-title">Documentation</Typography>

        <Typography>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices 
            de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
            sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles 
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications 
            de mise en page de texte, comme Aldus PageMaker.
        </Typography>

        </Box>

        <Box>
        <Typography className="sous-title">Help and Support</Typography>

        <Typography>
            Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page
            avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices 
            de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, 
            sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles 
            Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications 
            de mise en page de texte, comme Aldus PageMaker.
        </Typography>

        </Box>

        <Box>
        <Typography className="sous-title">Reporting a bug</Typography>

      
        <Typography sx = {
            {
                display: 'flex',
                justifyContent: 'center',
                fontSize  : 20 ,
                mt : 2
            }
        }>Please contact us below</Typography>


                <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',

        }}
      >
        
                <Form/>
      </Box>


    </Box>

        
    </>
)
export default Support;
