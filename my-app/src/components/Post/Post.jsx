
const Post = ({title, text, img, marked, id, changeMarked}) => {
   

    // const {title, description, image} = props;
    return (
    <div style={{background: marked ?  'yellow' : ''}}>
        <h1>
            {title}
        </h1>
        <p>
           {text}
        </p>
        <img src={img} alt={title} />
        <button onClick={() => changeMarked(id)}>Change color</button>
    </div>);
}








//const {title, description, image} = props;


const Post2 = ({title, description,  age, image}) => {
    return (<div>
        <h1>
            {/* {props.title} */}
            {title}
        </h1>
        <h2>{age}</h2>
        <p>
           {/* {props.description}  */}
           {description} 
        </p>

        <img src={image} alt={title} />
    </div>);
};

export default Post;

//examples with props

const sum = (props) => {
    return props.a + props.b;
}

sum ({a: 4, b: 5});

class PostComponent {
    constructor(props) {
        this.title = props.title;
    }
}