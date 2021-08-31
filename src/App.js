import './App.css';

function App() {

    function renderProducts() {
        const products = [
            'IMG_9062.jpg',
            'IMG_9063.jpg',
            'IMG_9067.jpg',
            'IMG_9068.jpg',
            'IMG_9069.jpg',
            'IMG_9070.jpg',
            'IMG_9071.jpg',
            'IMG_9072.jpg',
            'IMG_9073.jpg'
        ];

        const list = []

        for (const [i, product] of products.entries()) {
            list.push(
                <li>{i + 1}
                    <span> - </span>
                    <span>
                        <a href={'image/'+product}>
                            <img src={'image/'+product} height={window.innerHeight / 10}/>
                        </a>
                    </span>
                </li>);
        }

        return (
            <div>
                <div>
                    <span><h2>Welcome to Xiong's Family Picture site:</h2></span>
                </div>
                {list}
            </div>
        )
    }

    return renderProducts();
}

export default App;
