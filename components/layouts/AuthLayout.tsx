import { Box } from "@mui/material";
import Head from "next/head"

interface Props {
   children?: React.ReactNode;
   title: string; 
}


export const AuthLayout: React.FC<Props> = ({children, title}) => {
  return (
    <>
    <Head>
        <title>{title}</title>
    </Head>
    <main>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)'>
            {children}
        </Box>
    </main>
    </>
  )
}