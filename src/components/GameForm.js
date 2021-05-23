// import { useState } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navigation/Navbar';
import { submitNewGame, handleGameFormChange } from '../redux/actions/userActions';
;
const GameForm = (props) => {
        // const [ box, setBox ] = useState("false");

        const handleOnSubmit = (event) => {
            event.preventDefault()
            submitNewGame({ title, platform, kind, is_completed })
        }

//         const checkboxChange = (e) => {
//             setBox(e.target.checked)
// console.log(!box)
//             toggleCheckboxChange(box)
//         }

        const { submitNewGame, handleGameFormChange, form } = props
        const { title, kind, platform, is_completed } = form


        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form onSubmit={handleOnSubmit} >
                        <label>Title:
                            <input type="text"  name="title" value={title} onChange={handleGameFormChange} />
                        </label>
                        <br />
                        <label>Platform:
                            <input type="text"  name="platform" value={platform}  onChange={handleGameFormChange} />
                        </label>
                        <br />
                        <label>Type of Game:
                            <input type="text"  name="kind" value={kind}  onChange={handleGameFormChange} />
                        </label>
                        <br />
                        {/* <label>Game Finished:
                            <input type="checkbox" name="is_completed" value={is_completed} onClick={checkboxChange}/> 
                            (check box if finshed)
                        </label> */}
                        <br />
                        <button type="submit" >Track Game</button>
                    </form>
                    <br />
                    <Navbar />
                    <br />
                </div>
            </div>
        )

}

const mapStateToProps = (state) => ({
    // userId: state.user.id,
    form: state.user.gameForm
    // ,is_completed: state.user.gameForm.is_completed
})

export default connect(mapStateToProps, { submitNewGame, handleGameFormChange })(GameForm);