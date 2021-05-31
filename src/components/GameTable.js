import { connect } from 'react-redux';
import { deleteGame } from '../redux/actions/userActions';
import GameRow from './GameRow';
import Table from 'react-bootstrap/Table';

const GameTable = (props) => {


        const handleOnClick = (gameId) => {
            props.deleteGame(gameId)
            window.location.reload()
        }

        const headers = props.headers.map( (head, i) => <th key={i} >{head}</th> ) 
        const games = props.games.map( (game, index ) => <GameRow key={index} game={game} handleOnClick={handleOnClick} /> )

        return (
            <div className='main-gametable-wrapper' >
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            { headers }
                        </tr>
                    </thead>
                    <tbody>
                        { games }
                    </tbody>
                </Table>
            </div>
        )


}

export default connect(null, { deleteGame })(GameTable);