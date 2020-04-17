/** @jsx jsx*/
import {jsx, Grid} from 'theme-ui';

export const Timeline = () => {
  return (
    <div sx={timeLineStyle}>
      <div sx={afterTimeLineStyle}/>
      <Grid columns={[4, 4, 4, 4]}>
        <div sx={containerStyle}>
          <h3>Step 1</h3>
          <p>Submit your online application</p>
        </div>
        <div sx={containerStyle}>
          <h3>Step 2</h3>
          <p>Sign your company formation documents</p>
        </div>
        <div sx={containerStyle}>
          <h3>Step 3</h3>
          <p>Your company is formed in Estonia</p>
        </div>
        <div sx={containerStyle}>
          <h3>Step 4</h3>
          <p>Receive a tax ID number from the IRS</p>
        </div>

      </Grid>
    </div>
  );

}

const timeLineStyle = {
  position: `relative`,
  maxWidth: `1200px`,
  margin: `0 auto`
};

const afterTimeLineStyle = {
  content: '',
  position: 'absolute',
  width: '6px',
  backgroundColor: `primary`,
  top: 0,
  bottom: 0,
  left: '50 %',
  marginLeft: '-3px'
};

const containerStyle = {
  padding: '10px 10px',
  position: 'relative',
  backgroundColor: 'inherit',
  width: '50%'
};

export default Timeline;