import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'dark',
  },
  tabsRoot: {
    borderBottom: '1px solid  dark',
    color: 'white',
    fontSize: '50px'
  },
  tabsIndicator: {
    backgroundColor: 'dark',
  },
  tabRoot: {
    textTransform: 'initial',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$tabSelected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3,
  },
});

class Tabbar extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        >
         <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            href="/Home"
            label="Home"
          />  
           <Tab             
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            href="/News"
            label="News"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            href="/Sports"
            label="Sports"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            href="/Entertainment"
            label="Entertainment"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            href="/Classified"
            label="Classified"
          />
          <Tab
            disableRipple
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
            label="Community Service"
            href="/CommunityService"
          />  
        </Tabs>
      </div>
    );
  }
}

Tabbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tabbar);