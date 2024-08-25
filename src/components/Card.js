// const todoTitle = 'Call Family';
// const todoDesc = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vitae suscipit rerum voluptas quo esse placeat laborum blanditiis temporibus totam?";
const date = new Date();
const todoDate = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();

function Card(props) {
    const { titleText, descText } = props;
    return (
        <div className='card'>
            <h3 className='card_title'>{titleText}</h3>
            <p className='card_desc'>{descText}</p>
            <p className='card_footer'>{todoDate}</p>
        </div>
    )
}
export default Card;