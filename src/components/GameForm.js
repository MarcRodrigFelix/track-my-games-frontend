import { connect } from 'react-redux';
import Navbar from '../navigation/Navbar';
import { submitNewGame, handleGameFormChange } from '../redux/actions/userActions';
;
const GameForm = (props) => {

        const handleOnSubmit = (event) => {
            event.preventDefault()
            submitNewGame({ title, platform, kind })
        }


        const { submitNewGame, handleGameFormChange, form } = props
        const { title, kind, platform, is_completed } = form
// console.log(this.props)
// console.log(form)

        return (
            <div>
                <h2>Start Tracking A New Game</h2>
                <div>
                    <form onSubmit={handleOnSubmit} >
                        <input type="text"  name="title" value={title} onChange={handleGameFormChange} />
                        <br />
                        <input type="text"  name="platform" value={platform}  onChange={handleGameFormChange} />
                        <br />
                        <input type="text"  name="kind" value={kind}  onChange={handleGameFormChange} />
                        <br />
                        <label>Game Finished:
                            <input type="checkbox" name="isCompletedTrue" value={is_completed} defaultChecked={is_completed} /> (check box if finshed)
                        </label>
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
    userId: state.user.id,
    form: state.user.gameForm
})

export default connect(mapStateToProps, { submitNewGame, handleGameFormChange })(GameForm);