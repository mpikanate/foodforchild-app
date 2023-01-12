import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Nav from './Nav'

export default function Homepage() {
    return (

        <div>


            <center>
                <img src="/logo.png" width={700} height={450} />
                <h1>
                    Food for child
                </h1>
                <Stack spacing={2} direction="column">

                    <Link href="Login">
                        <Button variant="contained">เข้าสู่ระบบ</Button>
                    </Link>

                    <Link href="Register">
                        <Button variant="contained">สมัครสมาชิก</Button>
                    </Link>



                </Stack>
            </center>

        </div>

    );

}
