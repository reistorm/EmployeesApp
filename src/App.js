import { React, Component } from 'react';
import BootstrapTest from './BootstrapTest';
import './App.css'

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this)
    }

    nextYear = () => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, surname, link } = this.props;
        const { years, position } = this.state
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                {/* <button onClick={() => this.nextYear()}>+++</button>  если функция nextYear не стрелочная*/}
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position - {position}</h1>

                {/* <h1>My name is {name.firstName}, surname - {surname}</h1> */}

                {/* <h1>My name is {name()}, surname - {surname} </h1> */}
                <a href={link}>My profile</a>
                <form>
                    <span>ВВедите должность</span>
                    <input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
                </form>
            </div>
        )
    }
}

const DynamicGreating = (props) => {
    return (
        <div className={'mb-3 p-3 border border-' + props.color}>
            {/* {props.children} */}
            {
                React.Children.map(props.children, child => {
                    return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
                })
            }
        </div>
    )
}

// композиция
const HelloGreating = () => {
    return (
        <div style={{ 'width': '600px', 'margin': '0 auto' }}>
            <DynamicGreating color={'primary'}>
                <h2>Hello world!</h2>
            </DynamicGreating>
        </div>
    )
}

const Message = (props) => {
    return (
        <h2>This counter is {props.counter}</h2>
    )
}

class Counter extends Component {
    state = {
        counter: 0
    }

    changeCounter = () => {
        this.setState(({ counter }) => ({
            counter: counter + 1
        }))
    }

    render() {
        return (
            <>
                <button
                    className={'btn btn-primary'}
                    onClick={this.changeCounter}>
                    Click me!
                </button>
                {this.props.render(this.state.counter)}
            </>
        )
    }
}

function App() {
    return (
        // eslint-disable-next-line react/jsx-no-undef
        <Wrapper>
            <Counter render={counter => (
                <Message counter={counter} />
            )} />
            <DynamicGreating color={'primary'}>
                <h2>This well was hard</h2>
                <h2>Hello world!</h2>
            </DynamicGreating>
            <BootstrapTest
                left={
                    <DynamicGreating color={'primary'}>
                        <h2>This well was hard</h2>
                        <h2>Hello world!</h2>
                    </DynamicGreating>
                }
                right={
                    <DynamicGreating color={'primary'}>
                        <h2>Right!</h2>
                        <h2>Hello world!</h2>
                    </DynamicGreating>
                }
            />
            <WhoAmI name="John" surname="Smith" link="facebook.com" />
            <WhoAmI name="Alex" surname="Shepard" link="vk.com" />

            {/* <WhoAmI name={{ firstName: "John" }} surname="Smith" link="facebook.com" />
            <WhoAmI name={{ firstName: "Alex" }} surname="Shepard" link="vk.com" /> */}

            {/* <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com" />
            <WhoAmI name={() => {return 'Alex'}} surname="Shepard" link="vk.com" /> */}

        </Wrapper>
    )
}

export default App;