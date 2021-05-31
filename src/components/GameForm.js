// import { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import { submitNewGame, handleGameFormChange } from '../redux/actions/userActions';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const GameForm = (props) => {
        // const [ box, setBox ] = useState("false");

        const { submitNewGame, handleGameFormChange, form } = props
        const { title, kind, platform } = form

        const handleOnSubmit = (event) => {
            event.preventDefault()
            submitNewGame({ ...props.form, user_id: props.userId })
            props.history.push('/games')
        }

//         const checkboxChange = (e) => {
//             setBox(e.target.checked)
// console.log(!box)
//             toggleCheckboxChange(box)
//         }

        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <Form onSubmit={handleOnSubmit} >

                        <Form.Group controlId="formGameTitle">
                            <Form.Control type="text"  name="title" value={title} onChange={handleGameFormChange} placeholder="Game Title" />
                        </Form.Group>

                        <Form.Group controlId="formPlatform">
                            <Form.Control type="text"  name="platform" value={platform} onChange={handleGameFormChange} placeholder="Platform" />
                        </Form.Group>

                        <Form.Group controlId="formKind">
                            <Form.Control type="text"  name="kind" value={kind} onChange={handleGameFormChange} placeholder="Kind" />
                        </Form.Group>
                        {/* <label>Game Finished:
                            <input type="checkbox" name="is_completed" value={is_completed} onClick={checkboxChange}/> 
                            (check box if finshed)
                        </label>
                        {/* <br /> */}
                        <Button type="submit" >Track Game</Button>
                    </Form>
                    <br />
                    <Navbar />
                    <br />
                </div>
            </div>
        )

}

const mapStateToProps = (state) => ({
    userId: state.user.id,
    form: state.user.gameForm
})

export default connect(mapStateToProps, { submitNewGame, handleGameFormChange })(GameForm);