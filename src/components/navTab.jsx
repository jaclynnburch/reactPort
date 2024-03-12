// import React from "react";
// import { Link } from "react-router-dom";

// function NavTabs() {
//   return (
//     <div>
//       <Link to="/">About Me</Link>
//       <Link to="/portfolio">Portfolio</Link>
//       <Link to="/contact">Contact</Link>
//       <Link to="/resume">Resume</Link>
//     </div>
//   );

//   export default NavTabs;


// ****************************************

// import React from "react";
// import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';

// export const Navbar = () => {
//     return (
//         <AppBar position='static'>
//             <Toolbar>
//                 <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
//                 <CodeIcon />
//                 </IconButton>
//                 <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
//                     CODINGNEWBIE
//                 </Typography>
//                 <Stack direction='row' spacing={2}>
//                     <Button color='inherit'>About</Button>
//                     <Button color='inherit'>Portfolio</Button>
//                     <Button color='inherit'>Resume</Button>
//                     <Button color='inherit'>Contact</Button>
//                 </Stack>
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;

// **************************************
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';

export const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
                    <CodeIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    CODINGNEWBIE
                </Typography>
                <Stack direction='row' spacing={3}>
                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color='inherit'>
                            About
                        </Button>
                    </Link>
                    <Link to="/portfolio" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color='inherit'>
                            Portfolio
                        </Button>
                    </Link>
                    <Link to="/resume" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color='inherit'>
                            Resume
                        </Button>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button color='inherit'>
                            Contact
                        </Button>
                    </Link>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
