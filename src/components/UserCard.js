

const UserCard = (props) => {

    return (
        <div className="usercard-wrapper">
            <p>Welcome {props.user.username}, to your new game tracking app. Whats that? You have a ton of games backlogged that you want to finish playing, and there are new games that you want to start playing as well, but your so behind you don't know where to start? Well then, this is the app for you. Just add your game you want to track, then once you finish it, tell the app that and then your all done! Keep the ones you've finsihed and add more to the list to keep playing.</p>
        </div>
        
    )

}

export default UserCard;