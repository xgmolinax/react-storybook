import { withInfo } from '@storybook/addon-info';

const infoStyle = {
    // header: {
    //     h1: {
    //         marginRight: '20px',
    //         fontSize: '25px',
    //         display: 'inline'
    //     },
    //     body: {
    //         paddingTop: 0,
    //         paddingBottom: 0
    //     },
    //     h2: {
    //         display: 'inline',
    //         color: '#999'
    //     }
    // },
    // infoBody: {
    //     backgroundColor: '#f2f2f2',
    //     padding: '0px 5px',
    //     lineHeight: '2'
    // }
};

export const wInfo = text => withInfo({ styles: infoStyle, text: text });
// TOGGLE OTHER PROPERTIES: inline: true, source: true
