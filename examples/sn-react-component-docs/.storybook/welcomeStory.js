import React from 'react'
import { storiesOf } from '@storybook/react'

import imageFile from '../assets/img/sensenet-logo.png';
import previewImg from '../assets/img/welcome/preview.png';
import notesImg from '../assets/img/welcome/notes.png';
import knobsImg from '../assets/img/welcome/knobs.png';
import sourceImg from '../assets/img/welcome/source.png'
import propsImg from '../assets/img/welcome/proptable.png'

const image = {
    src: imageFile,
    alt: 'sensenet',
};

storiesOf('sensenet', module).add('Introduction', () => (
    <div style={styles.container}>
        <div style={styles.logoContainer}>
            <img width="300" src={image.src} alt={image.alt} />
        </div>
        <div style={styles.paragraphContainer}>
            <h1>Introduction</h1>
            <span>This is the guide for using sensenet, a flexible open-source development platform to deliver web based business applications.</span>
        </div>
        <div style={styles.paragraphContainer}>
            <h2>What is sensenet</h2>
            <span>sensenet is a <strong>central repository</strong> with an <strong>extendable API</strong> ready for integration. Enterprise grade <strong>security</strong> and <strong>permission system</strong> makes it a perfect core of any <strong>content management</strong> solution. The platform is highly <strong>modularized</strong> and ready to build your custom business solution and it also provides the possibility creating <strong>one page apps</strong> using your favourite JavaScript framework without a steep learning curve. You can find more about sensenet in general [here](/guide/introduction/what-is-sensenet).</span>
        </div>
        <div style={styles.paragraphContainer}>
            <h2>How to use this docs</h2>
            <span>
                <ul>
                    <li style={styles.listItem}>
                        1. Choose a component from the menu in the left column (they are grouped by type but you can also search for them with typing in the filter textbox)</li>
                    <li style={styles.listItem}>
                        2. In the preview frame you can see how the control will actually be rendered (you can also try it).<br/>
                        <img src={previewImg} style={styles.img} />
                    </li>
                    <li style={styles.listItem}>
                        3. Check the notes tab for a quick overview of the chosen component.<br/>
                        <img src={notesImg} style={styles.img} />
                    </li>
                    <li style={styles.listItem}>
                        4. Try out how you can customize the component on the knobs tab and check the changes in the preview frame.<br />
                        <img src={knobsImg} style={styles.img} />
                    </li>
                    <li style={styles.listItem}>
                        5. If you want to use your customized control in your application, click on the show info button to see the info panel where you can copy and paste the source code of the modified control.<br/>
                        <img src={sourceImg} style={styles.img} />
                    </li>
                    <li style={styles.listItem}>
                        6. If you need more information about the properties of the component there's a prop type table on the info panel where you can find the types, default values etc. This table is autogenerated from the code of the related component.<br />
                        <img src={propsImg} style={styles.img} />
                    </li>
                </ul>
            </span>
        </div>
    </div>
))

const styles = {
    container: {
        fontFamily: '-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","Lucida Grande","Arial",sans-serif',
        padding: 20,
    },
    logoContainer: {
        width: 200,
        margin: '30px auto 50px'
    },
    paragraphContainer: {},
    listItem: {
        listStyleType: 'none',
        margin: '20px 0',
        fontWeight: 'bold',
        color: '#666',
    },
    img: {
        margin: '20px 0',
        display: 'block',
    }
};
styles.firstCellContainer = { ...styles.cellContainer, marginRight: 20 };