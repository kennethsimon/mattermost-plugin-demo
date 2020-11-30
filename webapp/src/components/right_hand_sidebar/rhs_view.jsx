import React from 'react';
import PropTypes from 'prop-types';

import {FormattedMessage} from 'react-intl';

export default class RHSView extends React.PureComponent {
    static propTypes = {
        team: PropTypes.object.isRequired,
    }

    render() {
        return (
            <div style={style.rhs}>
                <div style={style.searchcontainer}>
                <input type='text' placeholder='search for documents' style={style.searchbar}/>
                <button style={style.iconbar}><i class='fab fa-instagram'></i></button>    
                </div>
                
                {/* <br/>
                <br/>
                <br/>
                <br/>
                <FormattedMessage
                    id='rhs.triggered'
                    defaultMessage='You have triggered the right-hand sidebar component of the demo plugin.'
                />
                <br/>
                <br/>
                <br/>
                <br/>
                <FormattedMessage
                    id='demo.testintl'
                    defaultMessage='This is the default string'
                />
                <br/>
                <br/>
                <br/>
                <br/>
                {'Links for custom routes'}
                <br/>
                <a onClick={() => window.WebappUtils.browserHistory.push('/plug/com.mattermost.demo-plugin/roottest')}>
                    {'/plug/com.mattermost.demo-plugin/roottest'}
                </a>
                <br/>
                <a onClick={() => window.WebappUtils.browserHistory.push(`/${this.props.team.name}/com.mattermost.demo-plugin/teamtest`)}>
                    {`/${this.props.team.name}/com.mattermost.demo-plugin/teamtest`}
                </a> */}
            </div>
        );
    }
}

const style = {
    rhs: {
        paddingBottom: '10px'
    },
    searchbar: {
        height: '40px',
        borderTop: '0px',
        borderLeft: '0px',
        borderRight: '0px',
        paddingTop: 0,
        paddingLeft: '10px',
        paddingBottom: '0px',
        flex: 5,
    },
    iconbar: {
     flex: 1,
     display: 'flex',
     alignItems: 'center',
     justifyContant: 'center',
     borderRight: 0,
     borderTop: 0,
    borderBottom: 0,
     height: '40px',
     borderLeft: '1px solid #eeeeee',
     padding: 0,
     backgroundColor: '#fff',
     borderBottom: '1px solid #eeeeee'
    },
    searchcontainer: {
        width: '100%',
        height: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '1px solid #eeeeee',
    }
};
