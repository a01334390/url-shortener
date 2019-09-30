import React from 'react'
import { Window, WindowContent, WindowHeader, Button, Anchor, TextArea, Hourglass } from "react95"

// Style JSON sheet
const style = {
    window: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '400px'
    },
    windowHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonmenu: {
        marginRight: '-6px',
        marginTop: '1px'
    },
    button: {
        marginTop: '3px',
        left: '130px'
    },
    span: {
        fontWeight: 'bold',
        transform: 'translateY(-1px)'
    },
    h1: {
        fontFamily: 'times new roman',
        textAlign: 'center',
        fontSize: '3rem',
        marginTop: '0.5rem',
    },
    p: {
        fontFamily: 'times new roman',
        textAlign: 'center',
        marginBottom: '5px'
    },
    textarea: {
        marginTop: '3px'
    }
}
/**
 * Homepage Apllication for Fondeadoera's Challenge
 */
class App extends React.Component {
    /**
     * State variables
     * @public submitState if data has been submited. Should be {false} when editing is happening and {true} when querying AWS
     * @public link should be the received link
     */
    state = {
        submitState: false,
        link: '',
        windowOpen: true
    }

    onSubmit = () => {
        this.setState({ submitState: true })
    }

    onWindowClose = () => {
        this.setState({windowOpen: false})
        setTimeout(() =>  {
            this.setState({windowOpen: true})
        }, 2000);
    }

    render() {
        return (<>
            {this.state.windowOpen &&
                <Window style={style.window}>
                    <WindowHeader style={style.windowHeader}>
                        <span>URL Shortener</span>
                        <Button onClick={this.onWindowClose} style={style.buttonmenu} size={'sm'} square>
                            <span style={style.span}>x</span>
                        </Button>
                    </WindowHeader>
                    <WindowContent>
                        <h1 style={style.h1}>
                            URL Shortener
                        </h1>
                        <p style={style.p}> Created by <Anchor href="https://www.github.com/a01334390" target="_blank"> A01334390</Anchor></p>
                        <TextArea disabled={this.state.submitState} onChange={(event) => this.setState({ link: event.target.value })} style={style.textarea} shadow={true} placeholder="Place your link here..."></TextArea>
                        <div style={style.button}>
                            {!this.state.submitState ?
                                <Button onClick={this.onSubmit} style={style.button}>
                                    Convert
                                </Button> :
                                <Hourglass />
                            }
                        </div>
                    </WindowContent>
                </Window>
            }
        </>)
    }
}

export default App