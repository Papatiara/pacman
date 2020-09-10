import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface PageProps {
  children: React.ReactNode | React.ReactNode[];
}

const useStyles = makeStyles((theme: Theme) => ({
  window: {
    minHeight: '100vh',
    paddingTop: 64 + theme.spacing(2),
  },
}));

const Page: React.FC<PageProps> = ({
  children,
}): JSX.Element => {
  
  const styles = useStyles({});

  return (
    <>
      <div className={styles.window}>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default Page;